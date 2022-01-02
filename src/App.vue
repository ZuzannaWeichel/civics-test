<template>
  <v-app id="app">
    <v-app-bar
      dark
      color="indigo"
      elevation=6
      prominent
      max-height=150
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <a href="/" id="homeLink"><span>USCIS </span>
        <span class="font-weight-light" >CIVICS QUIZ</span></a>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://www.uscis.gov/citizenship/learners/apply-citizenship"
        target="_blank"
        id="link"
      >
        <span>USCIS Website</span>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        absolute
        bottom
        temporary
    >
    <v-list>
      <v-list-group
        v-for="(item, i) in items"
        :key="i"
        :value="false"
        :prepend-icon="item.icon"
        color="indigo"
      >
          <template v-slot:activator>
            <v-list-item-title>{{item.text}}</v-list-item-title>
          </template>

            <v-list-item
              v-for="(subitem, num) in item.list"
              :key="num"
              :href="subitem.href"
            >
              <v-list-item-title v-text="subitem.text"></v-list-item-title>
            </v-list-item>
      </v-list-group>
    </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view :questions=this.questions></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      drawer: false,
      questions: [],
      items: [
        {
          icon: 'grade',
          text: 'All Questions',
          list: [
            {
              text: 'Ordered',
              href: '/all/order'
            },
            {
              text: 'Randomized',
              href: '/all/random'
            }
          ]
        },
        {
          icon: 'flag',
          text: 'Government',
          list: [
            {
              text: 'All government',
              href: '/government/all'
            },
            {
              text: 'Principles of American Democracy',
              href: '/government/principles'
            },
            {
              text: 'System of Government',
              href: '/government/systems'
            },
            {
              text: 'Rights and Responsibilities',
              href: '/government/rights'
            }
          ]
        },
        {
          icon: 'import_contacts',
          text: 'History',
          list: [
            {
              text: 'All history',
              href: '/history/all'
            },
            {
              text: 'Colonial Period and Independence',
              href: '/history/colonial'
            },
            {
              text: '1800`s',
              href: '/history/1800s'
            },
            {
              text: 'Recent American History',
              href: '/history/recent'
            }
          ]
        },
        {
          icon: 'public',
          text: 'Integrated Civics',
          list: [
            {
              text: 'All Civics',
              href: '/integrated/all'
            },
            {
              text: 'Geography',
              href: '/integrated/geography'
            },
            {
              text: 'Symbols',
              href: '/integrated/symbols'
            },
            {
              text: 'Holidays',
              href: '/integrated/holidays'
            }
          ]
        },
        {
          icon: 'mode',
          text: 'Practice test',
          list: [
            {
              text: '10 questions',
              href: '/all/ten'
            },
            {
              text: '20 questions',
              href: '/all/twenty'
            }
          ]
        }
      ]
    }
  },
  created () {
    this.$http
      .get('https://civics-quiz-api-default-rtdb.firebaseio.com/.json')
      .then(function (data) {
        this.questions = data.body
      })
  }
}

</script>

<style>

#app{
  overflow: hidden;
  height: auto;
  background-image: url('/img/background/hip-square.png');
}
#homeLink{
  color: white;
  text-decoration-line: none
}
#link{
  padding-top: 12px;
}

</style>
