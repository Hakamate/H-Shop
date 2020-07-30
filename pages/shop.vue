<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="item in items" :key="item.id" cols="6" sm="4">
        <v-card class="mx-auto" width="auto" max-width="400">
          <v-img
            to="/inspire"
            style="background-color: #F7F7F7F7"
            class="white--text align-end"
            height="200px"
            :src="`./img/${item.image}`"
          ></v-img>
          <v-card-title class="pb-0 text-body-1">{{item.title}}</v-card-title>

          <v-card-actions class="h3">
            <p class="my-0 mx-2 black--text">{{item.price}} €</p>

            <v-btn icon color="primary">
              <v-icon>mdi-cart</v-icon>
            </v-btn>

            <v-btn icon color="secondary">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    axios.get("http://127.0.0.1:3333/api/products").then((res) => {
      this.items = res.data;
    });
  },
};
</script>
