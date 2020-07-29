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
            :src="require(`~/assets/img/${item.image}`)"
          >
          </v-img>
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
export default {
  components: {},
  data() {
    return {
      items: [
        {
          title: "Gant tech",
          price: 10,
          image: "gant.png",
        },
        {
          title: "Bonnet de noël",
          price: 7,
          image: "bonnet.png",
        },
        {
          title: "T-Shirt Baseball",
          price: 9,
          image: "t-shirt.png",
        },
        {
          title: "Pantalon classique",
          price: 19,
          image: "pantalon.png",
        },
        {
          title: "Pull d'hiver zouz",
          price: 22,
          image: "pull.png",
        },
      ],
    };
  },
};
</script>
