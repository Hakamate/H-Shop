
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
      await this.$auth.logout()
    },
  }
}
</script>