<template>
  <v-app>
    <v-app-bar app class="navbar" flat>
      <div class="justify-space-between d-flex align-center navbar2">
        <div class="bear .d-lg-none .d-xl-flex">
          <v-img src="./assets/bear.svg" />
        </div>
        <router-link to="/" class="home">Home</router-link>
        <router-link to="/project">My projects</router-link>
        <router-link to="/about">About me</router-link>
        <router-link to="/contact">Contact me</router-link>
      </div>
    </v-app-bar>

    <v-main>
      <!-- If using vue-router -->
      <router-view></router-view>
    </v-main>

    <v-footer dark padless>
      <!-- <footer/> -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
<style lang="scss" scoped>
body {
  font-family: open sans;
}
.navbar {
  // background: linear-gradient(45deg, #dc143c, #dc143c, #9f59f3, #9f59f3);
  background: $light-background;
  color: $title;
  width: 100%;

  .navbar2 {
    width: 95%;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    padding: 1px;
    font-size: 2.5vw;
    font-family: $write;
    margin-right: 5%;
    text-align: center;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    background-image: ($gradient_reverse) !important;
  }
  .bear {
    width: 4vw;
    margin-top: 15px;
  }
}
h2 {
  font-family: $write;
}
</style>
