<template>
        <form id="app" @submit="checkForm" action method="post">
      <p>
        <label for="title">Title</label>
        <input id="title" v-model="dataToSend.title" type="text" name="title" />
      </p>

      <p>
        <label for="price">Price</label>
        <input id="price" v-model="dataToSend.price" type="number" name="price" min="0" />
      </p>

      <p>
        <label for="image">Image String</label>
        <input id="image" v-model="dataToSend.image" type="text" />
      </p>

      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
</template>
<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      items: [],
      dataToSend: {
        errors: [],
        title: null,
        price: null,
        image: null,
      },
    };
  },
  methods: {
    checkForm: async function (e) {
      const newItems = await this.getNewItem();

      await axios
        .post("http://127.0.0.1:3333/api/products", {
          params: newItems,
        })
        .then((res) => (this.items = res.data))
        .catch((er) => console.error(er));

      e.preventDefault();
    },

    getNewItem() {
      return {
        title: this.dataToSend.title,
        price: this.dataToSend.price,
        image: this.dataToSend.image,
      };
    },
  },
};
</script>
</script>