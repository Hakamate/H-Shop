<template>
  <v-container fluid>
    <v-row justify="center" class="mb-4">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="success" dark v-bind="attrs" v-on="on"
            >Add Article</v-btn
          >
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Add Article to Shop</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Title*"
                    required
                    v-model="addProduct.title"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Price*"
                    type="number"
                    min="0"
                    hint="Price in €"
                    v-model="addProduct.price"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="addProduct.image"
                    label="Image*"
                    hint="Name PNG store inside static folder on Adonis for the moment"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    auto-grow
                    rows="1"
                    v-model="addProduct.description"
                    label="Description*"
                    required
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" @click="storeProduct">Add</v-btn>
            <v-btn color="error" @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <v-row>
      <v-col v-for="item in items" :key="item.id" cols="6" sm="4" lg="3">
        <v-card
          class="mx-auto"
          width="auto"
          max-width="400"
          :to="`/product/${item.id}/show`"
        >
          <v-img
            to="/inspire"
            style="background-color: #F7F7F7F7"
            class="white--text align-end"
            height="200px"
            :src="require(`~/assets/img/${item.image}`)"
          ></v-img>
          <v-card-title class="pb-0 text-body-1">{{ item.title }}</v-card-title>

          <v-card-actions class="h3">
            <p class="my-0 mx-2 black--text">
              <b>{{ item.price }} €</b>
            </p>

            <v-btn icon color="warning">
              <v-icon>mdi-cart</v-icon>
            </v-btn>

            <v-btn icon color="secondary">
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn
              icon
              color="primary"
              class="ml-auto"
              :to="`/product/${item.id}/edit`"
            >
              <v-icon>mdi-pencil-box-multiple</v-icon>
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
      addProduct: {
        title: null,
        price: null,
        image: null
      },
      dialog: false,
      items: null
    };
  },
  async mounted() {
    try {
      const products = await this.$axios.get("/api/getproducts");
      console.log(products.data);
      return {items: products.data}
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    async storeProduct() {
      try {
        const product = await this.getDataWithAxios("post", "storeproduct",this.addProduct);
        // this.items.unshift(response.data);
        this.items = [product.data, ...this.items];
      } catch (e) {
        console.error(e);
      }
      this.dialog = false;
    }
  }
};
</script>
