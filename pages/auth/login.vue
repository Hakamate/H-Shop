<template>
  <v-container fluid>
    <v-row justify="center" align="center" style="height: 300px;">
      <v-card>
        <v-card-title class="px-4 green white--text">Login</v-card-title>
        <v-card-actions class="pa-6">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              prepend-icon="mdi-email"
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              :rules="passwordRules"
              label="Password"
              type="password"
              required
              class="mb-6"
              prepend-icon="mdi-lock"
            ></v-text-field>

            <v-btn color="primary" to="/auth/register">
              Register
              <v-icon class="ml-2">mdi-account-plus</v-icon>
            </v-btn>
            <v-btn :disabled="!valid" color="success" @click="login">Validate</v-btn>
          </v-form>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["loggedInUser", "isAuthenticated"]),
  },
  mounted() {
    if (this.isAuthenticated) {
      this.$router.push("/");
    }
  },
  data() {
    return {
      valid: true,
      email: "",
      password: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [(v) => !!v || "Password is required"],
      error: null,
    };
  },
  methods: {
    async login() {
      const validate = await this.$refs.form.validate();
      if (validate) {
        try {
          const login = await this.$auth.loginWith("local", {
            data: {
              email: this.email,
              password: this.password,
            },
          });

          this.printNotification('success','Hello', "Your are now connected")
        } 
        catch (e) {
          if (e.message !== "Network Error")
            this.printNotification('error','Error', e.response.data.message)
          else
            this.printNotification('error','Server Problem', "Try it again in few minutes")
        }
      }
    },

    clear() {
      this.email = "";
      this.password = "";
      this.$refs.observer.reset();
    },
  },
};
</script>