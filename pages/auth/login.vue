<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <div>{{error}}</div>
    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

    <v-text-field v-model="password" :rules="passwordRules" label="Password" type="password" required></v-text-field>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="login">Validate</v-btn>
  </v-form>
</template>

<script>
import { mapGetters } from "vuex";

import { required, email } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

import { setTimeout } from "timers";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
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
      passwordRules: [
        (v) => !!v || "Password is required",
      ],
      error: null,
    };
  },
  methods: {
    async login() {
      const validate = await this.$refs.form.validate();
      if (validate) {
        try {
          await this.$auth.loginWith("local", {
            data: {
              email: this.email,
              password: this.password,
            },
          });
          this.$notify({
            group: "notification",
            title: "Hello",
            type: "success",
            text: "Your are now connected",
          });
        } catch (e) {

          if(e.message !== "Network Error") {
            this.error = e.response.data.message 
            this.$notify({
              group: "notification",
              title: "Error",
              type: "error",
              text: e.response.data.message,
            });
          }else{
            this.error = 'Serveur Problem Try it again in few minutes'
            this.$notify({
              group: "notification",
              title: "Server Problem",
              type: "error",
              text: 'Try it again in few minutes',
            });
          }
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