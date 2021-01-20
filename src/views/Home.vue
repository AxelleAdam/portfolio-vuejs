<template>
  <div class="home v-pa-xs">
    <div class="homeText">
      <h1>Hello stranger ! Welcome here !</h1>
      <h2>I hope you're having a good day.</h2>
      <h3>
        I am <span class="name">Axelle Adamkiewicz</span> and you are on my
        portfolio.
      </h3>
      <h3>Everything here is made with Vue.js and my hands.</h3>
    </div>
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
  height: 90vh;
  background: linear-gradient(45deg, #dc143c, #dc143c, #9f59f3, #9f59f3);
  overflow: hidden;
}
.homeText {
  text-align: center;
  margin: auto;
  padding-top: 2.5%;
  margin-top: 10%;
  width: 50%;
  height: 30%;
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
