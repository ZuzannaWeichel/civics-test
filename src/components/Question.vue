<template>
  <div>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card class="question-card">
          <v-progress-linear id="progress" v-model="bar" color="indigo" height="20"
          ></v-progress-linear>

          <v-img
          v-bind:src=imgSrc
          aspect-ratio="3.2"
          ></v-img>
          <div class="counter-container">
            <h5 id="questionNumber">Question {{counter}}/{{questions.length}}</h5>
            <div class="score-chips">
              <v-chip color="green" text-color="white" style="margin-right: 5px">
                {{correct}}
                <v-icon right>check_circle_outline</v-icon>
              </v-chip>
              <v-chip color="red" text-color="white">
                {{incorrect}}
                <v-icon right>highlight_off</v-icon>
              </v-chip>
            </div>
          </div>

          <v-card-title class="title-height" v-show="!alertOn" style="word-break: break-word">
              <h3>{{questions[counter-1].question}}</h3>
          </v-card-title>

          <v-alert
              id="alert-bar"
              v-model="alertOn"
              :type="alertType"
          >
              <h3 v-if="score>=60">Congratulations!</h3>
              <h3 v-else>Sorry! </h3>
              <h4>Your score is {{score}}%</h4>
              <v-chip v-on:click="reload" color="indigo" text-color="white" style="margin-right: 5px; margin-top: 15px">
                <v-icon>autorenew</v-icon>
              </v-chip>
              <router-link to="/" style="text-decoration: none">
                <v-chip color="indigo" text-color="white" style="margin-top: 15px">
                  <v-icon>home</v-icon>
                </v-chip>
              </router-link>
          </v-alert>

          <v-card-actions v-show="!hideButtons" class="spaced">
              <v-btn v-on:click="scoreAndIncrement" text color="green">I know</v-btn>
              <v-btn v-on:click="scoreAndShowAnswer" text color="red">I don't know</v-btn>
          </v-card-actions>

          <v-card-actions v-show="!alertOn" class="to-the-right">
                <v-btn fab dark color="indigo" v-on:click="showAnswer">
                  <v-icon dark>explore</v-icon>
              </v-btn>
          </v-card-actions>

        </v-card>
        <v-card v-show="showAns" class="answer-card">

          <v-card-title style="word-break: break-word">
              <h4><ul v-html="formatAnswer(questions[counter-1].answer)"></ul></h4>
          </v-card-title>

          <v-card-actions class="to-the-right">
              <v-btn fab dark color="indigo" v-on:click="increment">
                  <v-icon dark>arrow_right_alt</v-icon>
              </v-btn>
          </v-card-actions>

        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true
    },
    questions: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      counter: 1,
      hideButtons: false,
      showAns: false,
      bar: 0,
      correct: 0,
      incorrect: 0,
      score: 0,
      alertOn: false
    }
  },
  computed: {
    alertType: function () {
      return this.score >= 60 ? 'success' : 'warning'
    },
    fillUnit: function () {
      return 100.0 / this.questions.length
    }
  },
  methods: {
    increment: function () {
      if (this.counter < this.questions.length) {
        this.bar = this.bar + this.fillUnit
        this.counter++
        this.hideButtons = false
        this.showAns = false
      } else {
        this.bar = this.bar + this.fillUnit
        this.alertOn = true
        this.hideButtons = true
        this.showAns = false
        this.score = Math.round(this.correct * 100 / this.questions.length)
      }
    },
    showAnswer: function () {
      this.hideButtons = true
      this.showAns = true
    },
    formatAnswer: function (string) {
      var arr = string.split('|')
      var ans = ''
      for (var i = 0; i < arr.length; i++) {
        ans += '<li>' + arr[i] + '</li>'
      }
      return ans
    },
    scoreAndIncrement: function () {
      this.correct++
      this.increment()
    },
    scoreAndShowAnswer: function () {
      this.showAnswer()
      this.incorrect++
    },
    reload: function () {
      location.reload(true)
    }
  }
}
</script>

<style>
#progress{
    margin: 0;
    text-align: center;
    color: white;
}
.question-card{
    margin: 5% 0 5% 0;
    padding: 20px;
}
.title-height{
    height: 22vh;
}
.spaced{
    display: flex;
    justify-content: space-evenly;
}
.to-the-right{
    display: flex;
    justify-content: flex-end;
}
.score-chips {
    display: flex;
    justify-content: flex-end;
    padding-top: 10px;
}
.answer-card {
    margin-bottom: 3%;
    font-size: calc(0.3vh + 0.5vw) ;
    padding: 20px;
}
#alert-bar{
    height: 100%;
    font-size: 2vh;
    font-weight: 400;
    text-align: center;
    margin-top: 15px;
}
.headline {
  font-size: calc(1vh + 1vw) !important;
}
#questionNumber {
  padding: 10px;
  font-weight: 500;
}
.counter-container {
  display: flex;
  justify-content: space-between;
}
</style>
