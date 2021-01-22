<template>
  <div class="aboutFull">
    <div class="about">
      <v-card>
        <v-toolbar class="toolbar" dark flat>
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
            <v-card flat style="background:#fdfdfd7e">
              <v-card-text>
                <p>Hello there !</p>
                <p>
                  I'm Axelle Adamkiewicz and i'm a web developer. I am
                  fascinated by new tech and this portfolio was made to show you
                  what i'm able to do.
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
                  I learnt about the Wild and canine education and had my
                  diploma with a Good appreciation (16,1/20). My favourite
                  species to learn about was reptiles.
                </p>
                <h3>Wild Code School - 2019</h3>
                <h4>Fullstack web and mobile development</h4>
                <p>
                  I learnt JavaScript, MySQL and Python. I worked with React.js,
                  Node.js, Express.js, MySQL, PasswortJWT, Bootstrap,
                  Reactstrap.
                </p>
                <h2>Works</h2>
                <h3>Web developer fullstack - 2019</h3>
                <h4>Bet2Invest</h4>
                <p>
                  I worked mostly in front-end with React.js (and reactstrap),
                  but also Node.js.
                </p>
                <h3>Digital animator - 2018/2019</h3>
                <h4>
                  Pôle Emploi
                </h4>
                <p>
                  I was initially there to help people to find a work with Pôle
                  Emploi material but after two weeks I've decided to organize
                  animations to help people in needs to learn how to use a
                  computer and internet, i also made animations to help them
                  doing their CV.
                </p>
                <h3>Veterinary assistant - 2016</h3>
                <h4>Clinique du coeur joyeux</h4>
                <p>
                  I worked as veterinary assistant, i helped in surgery. I also
                  confirmed my canine trainer diploma.
                </p>
                <h3>Administrative Officer - 2013/2014</h3>
                <h4>
                  <b>Humanis</b> - provident insurance | litigation then annual
                  salary declarations
                </h4>
                <p>
                  I worked at Humanis with two hats, in litigation and annual
                  salary declarations. That was very helpful for me, to learn
                  how to talk on the phone correctly but also to learn how to be
                  organize and quick in my work.
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <h3>French</h3>
                <p><i>fun fact</i></p>
                <p>
                  I'm a french person who lived almost her whole life in the
                  North so i also speak "ch'ti" !
                </p>
                <h3>English</h3>
                <p>
                  My english is far from perfect but i can hold a whole
                  conversation in English, my travels helped me a lot for that,
                  probably more than school. But I was very good in school and
                  was in Euro English section and English Litterature.
                </p>
                <h3>German</h3>
                <p>
                  Germany was one of my biggest heartstroke, i traveled in the
                  whole country (or almost !) and i'd love to see more.
                </p>
                <h3>Polish</h3>
                <p>
                  As you probably have seen, my name is Polish. My great parents
                  are from Poland from both sides of my family but none wanted
                  to teach us Polish. So when i was in High School, i jumped on
                  the occasion. And the funny part was that i was very, very
                  good at it.
                </p>
                <h3>Japanese</h3>
                <p>
                  My third languages when i was in High School, I was very
                  curious and I am very fascinated by Japan and history.
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item style="background:#fdfdfd7e">
            <v-card flat>
              <v-card-text>
                <h3>Travels</h3>
                <p>
                  If i had to present my biggest passion, it's probably
                  traveling. My faves are probably Germany and Wales.
                </p>
                <h3>Video games</h3>
                <p>
                  My father transmitted me his passion for video games and
                  offers me at a very young age my first console. My favourite
                  game of the moment is Witcher 3, i'm fond of Fable II and III
                  and Batman Arkhams (especially Asylum who is my fav) games.
                </p>
                <h3>History</h3>
                <p>
                  I'm a big fan of history, mainly WWII. I'm fascinated by 40's.
                </p>
                <h3>Music</h3>
                <p>
                  Jazz, Glam, Rock'n'Roll, Heavy Metal, Pop, i love a lot of
                  things. My favourite bands are Queen, Aerosmith, Mötley Crüe,
                  Little Big, Paramore, Black Sabbath, Frog Lep, Postmodern
                  Jukebox, Tenacious D, but i also love David Bowie, Alice
                  Cooper, Lady Gaga, Frank Sinatra, Prince, Michael Jackson,
                  Ella Fitzgerald, Louis Armstrong.
                </p>
                <h3>Writing</h3>
                <p>
                  I'm full of imagination and i love to write, to imagine long
                  or short stories. I'm not into poem but i love to write
                  novels, my favourite thing to write is history, i love to
                  imagine random people and how they lived in certain era.
                </p>
                <h3>Last but not the least : coding !</h3>
                <p>
                  I'm coding on my own since 2013, i had no choice for my
                  writing passion if i wanted a beautiful space for me and
                  readers.
                </p>
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
                <p>
                  If i have to move out far from my town, i'd like it to be in
                  my dream land.
                </p>
                <h2>What ?</h2>
                <p>
                  I'm searching for a job as
                  <span class="point">front-end web developer</span>, with
                  <i>Vue.js or React.js</i>, ideally. But I never refuse to
                  learn new things, I love to learn and i need to learn, i'm
                  quickly getting bored. I'm also searching for a long term
                  work, I'm not into Freelance anymore.
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </div>
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
h3,
h2 {
  font-family: $write;
}
h2 {
  color: #006466;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  width: 50%;
  margin: auto;
}
.toolbar {
  background: $gradient;
}
.aboutFull {
  background: $gradient;
  height: 91.5vh;
}

.point {
  font-weight: bolder;
}
</style>
