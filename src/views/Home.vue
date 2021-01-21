<template>
  <div class="home">
    <!-- <div class="homeText"></div> -->
    <v-container>
      <div class="homeText">
        <h1>Hello stranger ! Welcome here !</h1>

        <br />
        <p>I hope you're having a good day.</p>
        <p>
          I am <span class="name">Axelle Adamkiewicz</span> and you are on my
          portfolio.
        </p>
        <p>Everything here is made with Vue.js and my hands.</p>
      </div>
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
  background: linear-gradient(45deg, #dc143c, #dc143c, #9f59f3, #9f59f3);
  overflow: hidden;
}
.homeText {
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
  background-image: -webkit-linear-gradient(
    120deg,
    #dc143c,
    #9f59f3
  ) !important;
}
.name {
  color: #fdfdfdd5;
  text-shadow: 1px 1.5px 0 #dc143c;
  font-family: poppins;
}
</style>
