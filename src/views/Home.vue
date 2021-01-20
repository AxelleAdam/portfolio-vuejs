<template>
  <div class="home">
    <h1>Hello stranger ! Welcome here !</h1>
    <h2>I hope you're having a good day.</h2>
    <h3>
      I am <i>Axelle Adamkiewicz</i> and you are on my portfolio. Everything
      here is made with Vue.js.
    </h3>
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
  text-align: center;
  height: 85vh;
}
h1 {
  font-family: "limelight", sans-serif;
  color: #dc143c;
  text-shadow: 0 1px 0 #252525;
}
</style>
