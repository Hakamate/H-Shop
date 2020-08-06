<template>
  <v-container class="mx-auto">
    <v-btn color="primary" class="ml-auto" :to="`/product/${$route.params.id}/edit`">
      Edit Product
      <v-icon class="ml-3">mdi-pencil-box-multiple</v-icon>
    </v-btn>
    <v-btn color="secondary" class="ml-auto" @click="deleteProduct">
      Delete Product
      <v-icon class="ml-3">mdi-close-box</v-icon>
    </v-btn>
    <v-btn color="warning" class="ml-auto" :to="`/product/catalog`">
      Back to Shop
      <v-icon class="ml-3">mdi-arrow-left-circle</v-icon>
    </v-btn>
    <v-card class="d-inline-block">
      <v-container>
        <v-row justify="space-between">
          <v-col cols="6">
            <v-img width="300" :src="require(`~/assets/img/${item.image}`)"></v-img>
          </v-col>

          <v-col cols="6" class="pl-0">
            <v-row class="flex-column ma-0 fill-height">
              <v-col class="px-0">
                <v-card-title class="text-h3">{{item.title}}</v-card-title>
                <v-card-subtitle class="pb-0 text-body-1">{{item.description}}</v-card-subtitle>
              </v-col>

              <v-col class="px-0">
                <v-card-actions class="h3">
                  <p class="my-0 mx-2 black--text">
                    <b>{{item.price}} €</b>
                  </p>

                  <v-btn icon color="warning">
                    <v-icon>mdi-cart</v-icon>
                  </v-btn>

                  <v-btn icon color="secondary">
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>
    
<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      item: {
        title: "wait",
        price: 0,
        image: "pull.png",
      },
    };
  },
  async mounted() {
    try {
      const product = await this.$axios("getproduct", {
        params: {
          id: this.$route.params.id,
        },
      });

      this.item = product.data;
    } catch (e) {
      console.error(e);
    }
  },

  methods: {
    async deleteProduct() {
        const product = await this.getDataWithAxios("post", "deleteproduct",
        {
          id: this.$route.params.id,
        });

        this.$router.push(`/product/catalog`);
    },
  },
};
</script>
