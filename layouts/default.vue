<template>
  <v-app light>
    <client-only><notifications group="notification" position="bottom right"></notifications></client-only> 
    <NavBar />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "~/components/NavBar";

export default {
  components: {
    NavBar,
  },
};
</script>
<style>
::-webkit-scrollbar{
  width: 10px;
}
::-webkit-scrollbar-thumb{
  background: rgb(177, 177, 177);
}
</style>