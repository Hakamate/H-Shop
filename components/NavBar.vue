<template>
  <v-app-bar class="pl-0" color="#457b9d" fixed app dark>
    <v-navigation-drawer fixed app v-model="drawer" hide-overlay class="d-flex flex-column">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title d-flex">
            <v-icon class="mr-2">mdi-account-circle</v-icon>Bonjour Thomas
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
        <v-list-item v-for="item in accountPages" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
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
      <v-btn value="Card">
        <span>Cart</span>
        <v-icon>mdi-cart</v-icon>
      </v-btn>

      <v-btn value="favorites">
        <span>Wish</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn value="nearby">
        <span>Setting</span>
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app-bar>
</template>

<script>
export default {
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
          to: "/shop",
        },
      ],
      accountPages: [
        {
          icon: "mdi-account",
          title: "Your Account",
          to: "/",
        },
        {
          icon: "mdi-account-question",
          title: "Help",
          to: "/",
        },
        {
          icon: "mdi-logout-variant",
          title: "Log Out",
          to: "/",
        },
      ],
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>
<style>
.v-toolbar__content {
  padding-left: 0;
}
</style>