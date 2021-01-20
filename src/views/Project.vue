<template>
  <div class="project">
    <v-card class="mx-auto" max-width="400">
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>Bet2Invest</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">
        Wild Code School
      </v-card-subtitle>

      <v-card-text class="text--primary">
        <div>Paris sportifs en ligne</div>

        <div>JavaScript, React.js, Node.js, Express.js, PassportJWT</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text @click="wild()">
          Explore
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card class="mx-auto" max-width="400">
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>Top 10 Australian beaches</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">
        Number 10
      </v-card-subtitle>

      <v-card-text class="text--primary">
        <div>Whitehaven Beach</div>

        <div>Whitsunday Island, Whitsunday Islands</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text @click="leihia()">
          Explore
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "project",
  methods: {
    leihia() {
      window.open({ path: "/leihia" });
    },
    wild() {
      window.open({ path: "/wild" });
    },
  },
};
</script>
