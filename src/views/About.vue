<template>
  <div class="about">
    <v-card>
      <v-toolbar
        style="background: linear-gradient(45deg, #dc143c, #dc143c, #9f59f3, #9f59f3);"
        dark
        flat
      >
        <template>
          <v-tabs
            v-model="tabs"
            centered
            prev-icon="mdi-arrow-left-bold-box-outline"
            next-icon="mdi-arrow-right-bold-box-outline"
          >
            <v-tab> who am i </v-tab>
            <v-tab>Parcours</v-tab>
            <v-tab>Languages</v-tab>
            <v-tab>Passions</v-tab>
            <v-tab>Disponibilities</v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model="tabs">
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <h1>Who am i ?</h1>
              <p>Hello there !</p>
              <p>
                I'm Axelle Adamkiewicz and i'm a web developer. I am fascinated
                by new tech and this portfolio was made to show you what i'm
                able to do.
              </p>
              <p>
                If i had to describe myself, i would refer to my picto, the
                bear. I'm introvert, I love being alone but i also can be very
                friendly with people who are truly kind, I have an unexpected
                strength.
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-title class="headline">
              Parcours
            </v-card-title>
            <v-card-text>
              <h2>Studies</h2>
              <h3>Montebello International High School - 2010/2013</h3>
              <h4>Litterature diploma.</h4>
              <p>I learnt Polish and Japanese and was in English Euro.</p>
              <h3>IFSA - 2013/2016</h3>
              <h4>
                Veterinary assistant, canine educator and wild animals
                specialisation
              </h4>
              <p>
                I learnt about the Wild and canine education and had my diploma
                with a Good appreciation (16,1/20). My favourite species to
                learn about was reptiles.
              </p>
              <h3>Wild Code School - 2019</h3>
              <h4>Fullstack web and mobile development</h4>
              <p>
                I learnt JavaScript, MySQL and Python. I worked with React.js,
                Node.js, Express.js, MySQL, PasswortJWT, Bootstrap, Reactstrap.
              </p>
              <h2>Works</h2>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-title class="headline"> Languages </v-card-title>
            <v-card-text>
              <h3>French</h3>
              <p><i>fun fact</i></p>
              <p>
                I'm a french person who lived almost her whole life in the North
                so i also speak "ch'ti" !
              </p>
              <h3>English</h3>
              <p>
                My english is far from perfect but i can hold a whole
                conversation in English, my travels helped me a lot for that,
                probably more than school. But I was very good in school and was
                in Euro English section and English Litterature.
              </p>
              <h3>German</h3>
              <p>
                Germany was one of my biggest heartstroke, i traveled in the
                whole country (or almost !) and i'd love to see more.
              </p>
              <h3>Polish</h3>
              <p>
                As you probably have seen, my name is Polish. My great parents
                are from Poland from both sides of my family but none wanted to
                teach us Polish. So when i was in High School, i jumped on the
                occasion. And the funny part was that i was very, very good at
                it.
              </p>
              <h3>Japanese</h3>
              <p>
                My third languages when i went to High School, I was very
                curious and I am very fascinated by Japan and history.
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <h1>Passions</h1>
            <v-card-text>
              <h5>Travels</h5>
              <p>
                If i had to present my biggest passion, it's probably traveling.
              </p>
              <h5>Video games</h5>
              <p>
                My father transmitted me his passion for video games and offers
                me at a very young age my first console.
              </p>
              <h5>History</h5>
              <p>I'm a big fan of history, mainly WWII.</p>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <h2>When ?</h2>
              <p>
                I'm available now.
              </p>
              <h2>Where ?</h2>
              <p>In Lille - France or Montreal - Canada.</p>
              <h2>What ?</h2>
              <p>
                I'm searching for a job as front-end web developer, with Vue.js
                or React.js, ideally. But I never refuse to learn new things, I
                love to learn. I'm also searching for a long term work.
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabs: null,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>
<style lang="scss" scoped>
h1 {
  font-family: limelight;
}
</style>
