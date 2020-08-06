<template>
  <v-container fluid>
   <h1>Welcome to cart
    <v-icon>mdi-cart</v-icon>
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
