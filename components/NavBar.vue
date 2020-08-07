<template>
  <v-app-bar color="#457b9d" fixed app dark>
    <v-navigation-drawer
      fixed
      app
      absolute
      temporary
      v-model="drawer"
      hide-overlay
      class="d-flex flex-column"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title d-flex">
            <v-icon class="mr-2">mdi-account-circle</v-icon>Hello Thomas
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item v-for="item in explorePages" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <v-list dense nav class="align-self-end">
        <div v-for="item in accountPages" :key="item.title">
          <v-list-item
            v-if="
              (isAuthenticated && (item.title != 'Login' && item.title != 'Register'))|| 
              (!loggedInUser && (item.title != 'Logout' && item.title != 'Your Account'))"
            link
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

    <v-toolbar-title>H-Shop</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-text-field
      hide-details
      prepend-inner-icon="mdi-magnify"
      placeholder="Search ..."
      rounded
      filled
      dense
    ></v-text-field>

    <v-bottom-navigation background-color="rgb(0,0,0,0)" width="auto" style="box-shadow: none">
      <v-btn class="ml-2" value="Card" to="/user/cart">
        <span width="0">Cart</span>
        <v-icon>mdi-cart</v-icon>
      </v-btn>

      <v-btn value="favorites" to="/user/wish">
        <span>Wish</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["loggedInUser", "isAuthenticated"]),
  },
  data() {
    return {
      drawer: false,
      fixed: false,
      explorePages: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-basket",
          title: "Shop",
          to: "/product/catalog",
        },
      ],
      accountPages: [
        {
          icon: "mdi-account",
          title: "Account",
          to: "/user/profile",
        },
        {
          icon: "mdi-cart-arrow-right",
          title: "Orders",
          to: "/user/profile",
        },
        {
          icon: "mdi-account-question",
          title: "Help",
          to: "/user/help",
        },
        {
          icon: "mdi-account-plus",
          title: "Register",
          to: "/auth/register",
        },
        {
          icon: "mdi-login-variant",
          title: "Login",
          to: "/auth/login",
        },
        {
          icon: "mdi-logout-variant",
          title: "Logout",
          to: "/auth/logout",
        },
      ],
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
  methods: {
    async logout() {
      await this.$auth.logout();
    },
  },
};
</script>
<style>
.v-toolbar__content {
  padding-left: 0;
  padding-right: 0;
}
</style>