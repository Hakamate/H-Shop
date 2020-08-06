<template>
  <v-container fluid>
   <h1>Welcome to Wish
   <v-icon>mdi-heart</v-icon>
   </h1>
   {{ loggedInUser.email }}
   
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['loggedInUser', 'isAuthenticated'])
  },
  middleware: "auth",
};
</script>
