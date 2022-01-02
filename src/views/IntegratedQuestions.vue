<template>
  <div>
    <show-question
      v-bind:imgSrc="imgSrc"
      v-bind:questions="questions"
    ></show-question>
  </div>
</template>

<script>
import Question from '../components/Question.vue'

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
      const q = this.questions
      const civics = q.filter(question => question.category === 'Integrated Civics')
      const sorted = civics.sort((a, b) => 0.5 - Math.random())

      if (this.subcategory === 'all') {
        return sorted
      }
      if (this.subcategory === 'geography') {
        return civics.filter(question => question.subcategory === 'Geography')
      }
      if (this.subcategory === 'symbols') {
        return civics.filter(question => question.subcategory === 'Symbols')
      }
      if (this.subcategory === 'holidays') {
        return civics.filter(question => question.subcategory === 'Holidays')
      }
      return q
    }
  },
  props: {
    subcategory: {
      type: String,
      default: 'all'
    },
    questions: {
      type: Array,
      required: true
    }
  }
}
</script>
