<template>
  <div>
    <show-question
      v-bind:imgSrc="imgSrc"
      v-bind:questions="processedQuestions"
    ></show-question>
  </div>
</template>

<script>
import Question from '../components/Question.vue'
import { dates, names, numbers, questions } from '../data/questions_all'

export default {
  components: {
    'show-question': Question
  },
  data () {
    return {
      imgSrc: '/img/allQ.jpg'
    }
  },
  computed: {
    processedQuestions: function () {
      if (this.subcategory === 'order') {
        return questions
      }
      if (this.subcategory === 'random') {
        return questions.sort((a, b) => 0.5 - Math.random())
      }
      if (this.subcategory === 'ten') {
        return questions.sort((a, b) => 0.5 - Math.random()).slice(0, 10)
      }
      if (this.subcategory === 'numbers') {
        return numbers.sort((a, b) => 0.5 - Math.random())
      }
      if (this.subcategory === 'names') {
        return names.sort((a, b) => 0.5 - Math.random())
      }
      if (this.subcategory === 'dates') {
        return dates.sort((a, b) => 0.5 - Math.random())
      }
      return questions
    }
  },
  props: {
    subcategory: {
      type: String,
      default: 'order'
    }
  }
}
</script>
