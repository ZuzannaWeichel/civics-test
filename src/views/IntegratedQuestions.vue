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
import { questions } from '../data/questions_all'

export default {
  components: {
    'show-question': Question
  },
  data () {
    return {
      imgSrc: '/img/integratedCiv.jpg'
    }
  },
  computed: {
    processedQuestions: function () {
      const civics = questions.filter(question => question.category === 'Integrated Civics')
      const sorted = civics.sort((a, b) => 0.5 - Math.random())

      if (this.subcategory === 'all') {
        return sorted
      }
      if (this.subcategory === 'geography') {
        return sorted.filter(question => question.subcategory === 'Geography')
      }
      if (this.subcategory === 'symbols') {
        return sorted.filter(question => question.subcategory === 'Symbols')
      }
      if (this.subcategory === 'holidays') {
        return sorted.filter(question => question.subcategory === 'Holidays')
      }
      return civics
    }
  },
  props: {
    subcategory: {
      type: String,
      default: 'all'
    }
  }
}
</script>
