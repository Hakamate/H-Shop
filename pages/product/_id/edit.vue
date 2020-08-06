<template>
  <v-main class="mx-auto" width="auto">
    <v-btn color="primary" class="ml-auto" :to="`/product/${$route.params.id}/show`">
      Show Product
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
    <v-img
      to="/inspire"
      class="white--text align-end"
      width="300"
      :src="require(`~/assets/img/${item.image}`)"
    ></v-img>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-text-field label="Title*" required v-model="item.title"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field label="Price*" type="number" min="0" hint="Price in €" v-model="item.price"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="item.image"
            label="Image*"
            hint="Name PNG store inside static folder on Adonis for the moment"
            persistent-hint
            required
          ></v-text-field>
        </v-col>
        <v-col cols="10">
          <v-textarea auto-grow rows="1" v-model="item.description" label="Description*" required></v-textarea>
        </v-col>
      </v-row>
      <v-btn color="success" @click="updateProduct">Update Product</v-btn>
    </v-container>
  </v-main>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      item: {
        title: "wait",
        price: 0,
        image: "question.png",
        description: "Wait description",
      },
    };
  },
  async mounted() {
    const product = await this.getDataWithAxios("get", "getproduct", {
        id: this.$route.params.id,
    }, false);
    this.item = product;
  },

  methods: {
    async updateProduct() {
        const product = await this.getDataWithAxios("post", "updateproduct",
        {          
          id: this.$route.params.id,
          product: this.item,
        });

      this.$router.push(`/product/${this.$route.params.id}/show`);
    },
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
