<template>
 <v-container>
  <form class="w-full max-w-lg" method="post" @submit.prevent="register">
    <Notification :message="error" v-if="error" />

    <v-text-field v-model="email" label="Email" required />

    <v-text-field v-model="password" type="password" label="Password" required />

    <v-btn color="success" type="submit">Submit</v-btn>
  </form>

  <v-btn color="primary" to="/auth/login">
    Login <v-icon class="ml-2">mdi-account</v-icon>
  </v-btn>
</v-container>
</template>

<script>
import Notification from '~/components/Notification'
export default {
  components: {
    Notification
  },
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  mounted(){
    if(this.isAuthenticated){
      this.$router.push('/')
    }
  },
  methods: {
    async register({ req }) {
      try {
        const { data } = await this.$axios.post('register', {
          email: this.email,
          password: this.password
        })
        console.log(data)
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        })
        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>