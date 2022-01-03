<template>

    <div id="mainMenu">
        <v-layout>
        <v-flex xs12 sm10 offset-sm1>
        <v-card id="mainCard">

        <v-img>
        <v-carousel id="mainCarousel">
            <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            :href="item.href"
            ><h1 style="padding: 3%; color:white">{{item.title}}</h1></v-carousel-item>
        </v-carousel>
        </v-img>
        <div>
           <h3 id="mainText">
                Naturalization study materials.
                <br />This app contains 2008 Civics Test version,
                <br />100 questions and answers updated for Ohio 2021.
            </h3>
        </div>
        </v-card>
        </v-flex>
        </v-layout>
    </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: '/img/americanGov.jpg',
          href: '/government/all',
          title: 'American Government'
        },
        {
          src: '/img/americanHist.jpg',
          href: '/history/all',
          title: 'American History'

        },
        {
          src: '/img/integratedCiv.jpg',
          href: '/integrated/all',
          title: 'Integrated Civics'

        },
        {
          src: '/img/allQ.jpg',
          href: 'all/order',
          title: 'All Questions'

        }
      ]
    }
  }
}
</script>

<style>
#mainMenu{
    display: flex;
    justify-content: center;
    height: auto;
}
#mainCarousel{
    height: 55vh !important;
}
#mainCard{
    height: auto;
    background-color: #e9e0d8;
    margin-top: 3vh;
}
#mainText{
    height: auto;
    margin: 2vh;
    padding: 2vh;
    font-family: 'Roboto', sans-serif
}
</style>
