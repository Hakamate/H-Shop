<template>
  <ValidationObserver ref="observer" v-slot="{ validate, reset }">
    <form>
      <ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
        <v-text-field v-model="email" :error-messages="errors" label="E-mail" required></v-text-field>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" name="password" rules="required">
        <v-text-field
          v-model="password"
          :error-messages="errors"
          label="Password"
          type="password"
          required
        ></v-text-field>
      </ValidationProvider>

      <v-btn class="mr-4" @click="login">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>

    <v-btn color="primary" to="/auth/register">
      Register
      <v-icon class="ml-2">mdi-account</v-icon>
    </v-btn>
  </ValidationObserver>
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
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const validate = await this.$refs.observer.validate();
        if (validate) {
          this.$auth
            .loginWith("local", {
              data: {
                email: this.email,
                password: this.password,
              },
            })
            .then(() => {
              this.$notify({
                group: "notification",
                title: "Hello",
                type: "success",
                text: "You are now connected",
              });
            })
            .catch(() => {
              this.$notify({
                group: "notification",
                title: "Error",
                type: "error",
                text: "Please try it again in few minutes",
              });
            });
        } else {
          this.$notify({
            group: "notification",
            title: "Warning",
            type: "warn",
            text: "Invalid Email/Password combinaison",
          });
        }
      } catch (e) {
        this.$notify({
          group: "notification",
          title: "Important message",
          type: "error",
          text: e.response.data.message,
        });
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