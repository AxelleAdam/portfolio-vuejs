<template>
  <div class="fullProject">
    <div class="project row d-flex">
      <v-card
        class="mx-auto"
        max-width="450"
        style="margin-top:10%;background:#fdfdfd7e;"
      >
        <v-img
          class="white--text align-end"
          height="200px"
          src="../assets/bet2invest.png"
        >
          <v-card-title>Bet2Invest</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">
          online sports betting
        </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>JavaScript, React.js, Node.js, Express.js, PassportJWT</div>
        </v-card-text>

        <v-card-actions>
          <v-btn text @click="wild()" class="button">
            Curious ?
          </v-btn>
        </v-card-actions>
      </v-card>

      <v-card
        class="mx-auto"
        max-width="450"
        style="margin-top:10%;background:#fdfdfd7e;"
      >
        <v-img
          class="white--text align-end"
          height="200px"
          src="../assets/leihia_accueil.png"
        >
          <v-card-title class="title">Leihia</v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0"
          >help to get back to work
        </v-card-subtitle>
        <v-card-text class="text--primary">
          <div>JavaScript, Vue.js, Quasar, Node.js</div>
        </v-card-text>

        <v-card-actions>
          <v-btn class="button" text @click="leihia()">
            Much wow !
          </v-btn>
        </v-card-actions>
      </v-card>

      <v-card
        class="mx-auto"
        max-width="450"
        style="margin-top:10%;background:#fdfdfd7e;"
      >
        <v-img
          class="white--text align-end"
          height="200px"
          src="../assets/dmc.png"
        >
          <v-card-title class="title">Designs</v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0">Immersive designs</v-card-subtitle>
        <v-card-text class="text--primary">
          <div>Photoshop CS6</div>
        </v-card-text>

        <v-card-actions>
          <v-btn text @click="design()" class="button">
            Click there !
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "project",
  methods: {
    leihia() {
      this.$router.push({ path: "/leihia" });
    },
    wild() {
      this.$router.push({ path: "/wild" });
    },
    design() {
      this.$router.push({ path: "/design" });
    },
  },
};
</script>
<style scoped lang="scss">
.title {
  font-family: $write;
  text-shadow: 0 1px 0 $shadow;
}
.fullProject {
  margin: 0;
  height: 101.6%;
  background: $gradient;
}
.v-btn {
  font-family: $write;
  background: $gradient;
  color: $title;
  transition: 1s all ease;
}

.v-btn:hover {
  background: $gradient_reverse;
  letter-spacing: 10px;
}
</style>
