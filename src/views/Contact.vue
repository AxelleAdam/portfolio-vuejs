<template>
  <div class="contactFull">
    <div class="contact row">
      <v-card class="mx-auto" max-width="400" flat style="margin-top:10%;">
        <v-card-text>
          <p class="display-1 text--primary">
            mail
          </p>
          <p>axelle.adamkiewicz@gmail.com</p>
          <div class="text--primary">
            I'm very fast to answer.
          </div>
        </v-card-text>
      </v-card>
      <v-card class="mx-auto" max-width="400" flat style="margin-top:10%;">
        <v-card-text>
          <p class="display-1 text--primary">
            Discord
          </p>
          <p>Elya#8132</p>
        </v-card-text>
      </v-card>
      <v-card class="mx-auto" max-width="400" flat style="margin-top:10%;">
        <v-card-text>
          <p class="display-1 text--primary">
            I also do some livecoding and stream on Twitch
          </p>
          <p>elya_berserker</p>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "contact",
};
</script>

<style scoped lang="scss">
.contactFull {
  background: $gradient;
  height: 85vh;
}
</style>
