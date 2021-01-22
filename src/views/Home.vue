<template>
  <div class="home">
    <!-- <div class="homeText"></div> -->
    <v-container>
      <v-card class="hello" style="">
        <h1>Hello stranger ! Welcome here !</h1>

        <br />
        <p>I hope you're having a good day.</p>
        <p>
          I am <span class="name">Axelle Adamkiewicz</span> and you are on my
          portfolio.
        </p>
        <p>Everything here is made with Vue.js and my hands.</p>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>
<style scoped lang="scss">
.home {
  position: absolute;
  width: 100vw;
  height: 100%;
  background: $gradient;
}
.hello {
  text-align: center;
  margin: auto;
  margin-top: 10%;
  margin-bottom: 15%;
  padding: 2.5%;
  //
  // width: 50%;
  // height: 30%;
  background: #fdfdfd7e;
}
h1 {
  font-family: "limelight", sans-serif;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-image: ($gradient_reverse) !important;
}
.name {
  color: #e2e0e6;
  text-shadow: 1px 1.5px 0 #4d194d;
  font-family: poppins;
}
</style>
