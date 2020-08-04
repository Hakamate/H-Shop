<template>
  <v-app light>
    <NavBar />
    <v-main>
      <v-container>
        <notifications group="notification"  
               position="bottom right"/>
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