
<template>
  <section class="section">
    <div class="container">
      <h2 class="title">My Profile</h2>
      <div class="content">
        <p>
          <strong>Email:</strong>
          {{ loggedInUser.email }}
        </p>
      </div>
    </div>
    <v-btn @click="createCart">
      Create Your Cart
    </v-btn>
    <v-btn @click="getCart">
      Get Cart
    </v-btn>
    <v-btn @click="logout">
      LogOut<v-icon class="ml-2">mdi-close-box</v-icon>
    </v-btn>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['loggedInUser', 'isAuthenticated'])
  },
  middleware: 'auth',
  methods:{
    async logout(){
      try {
        this.$auth.logout()
        this.printNotification('success','Success', "You are now disconnected")
      } catch (error) {
        this.printNotification('error','Error', error.message)
      }
    },

    async createCart(){
      const response = this.$axios.post("createcart", {
        params: {
          id: this.loggedInUser.email
        }
      }).then((res) => console.log({res}))
      .catch((rest) => console.log({rest}))
    },

    async getCart(){
      const response = this.$axios.get("getcart", {
        params: {
          email: this.loggedInUser.email,
        }
      })
    }
  }
}
</script>