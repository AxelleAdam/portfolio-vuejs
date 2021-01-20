<template>
  <v-app>
    <v-app-bar app class="navbar" flat>
      <div class="d-flex align-center">
        <h2>Welcome !</h2>
      </div>
      <router-link to="/">Home</router-link>
      <router-link to="/project">My projects</router-link>
      <router-link to="/about">About me</router-link>
      <router-link to="/contact">Contact me</router-link>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style lang="scss" scoped>
body {
  font-family: open sans;
}
.navbar {
  background: linear-gradient(45deg, #ca9cc6, #82d39a);
  text-align: center;
  color: white;
  a {
    color: #fdfdfd;
    text-decoration: none;
    text-transform: uppercase;
    padding: 5px;
    text-align: center;
    font-family: elsie;
  }
}
</style>
