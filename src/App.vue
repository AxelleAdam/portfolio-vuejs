<template>
  <v-app>
    <v-app-bar app class="navbar" flat>
      <div class="justify-space-between d-flex align-center navbar2">
        <div class="bear hide-mobile desktop-only">
          <v-img src="./store/bear.svg" />
        </div>
        <router-link to="/" class="home">Home</router-link>
        <router-link to="/project">My projects</router-link>
        <router-link to="/about">About me</router-link>
        <router-link to="/contact">Contact me</router-link>
      </div>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer dark padless>
      <v-card
        flat
        tile
        class="text-center"
        style="background:#c2bfc0;color:#0c0c0c"
      >
        <v-card-text> </v-card-text>

        <v-card-text class="black--text pt-0">
          This portfolio was made with Vue.js and Vuetify. This portfolio has
          seen the light of the day on 01.20.2021, after two months learning
          vue.js. I personnaly thank everyone clicking here and seeing the
          evolution of my portfolio. As i love to say
          <q><i>we will never know everything, but we always can learn</i></q
          ><br />Thanks to Erica Grau from the Noun Project for the bear picto.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Axelle Adamkiewicz</strong>
        </v-card-text>
      </v-card>
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
  // background: linear-gradient(45deg, #93c087, rgb(218, 164, 209));
  background: #c2bfc0;
  color: white;
  width: 100%;

  .navbar2 {
    width: 95%;
  }
  a {
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    padding: 1px;
    font-size: 100%;
    font-family: "vt323", sans-serif;
    margin-right: 5%;
    text-align: center;
    a:hover {
      color: #fdfdfd !important;
    }
  }
  .bear {
    width: 4vw;
    margin-top: 15px;
  }
}
h2 {
  font-family: Limelight;
}
</style>
