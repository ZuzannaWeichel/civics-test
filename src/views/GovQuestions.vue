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

export default {
  components: {
    'show-question': Question
  },
  data () {
    return {
      imgSrc: '/img/americanGov.jpg'
    }
  },
  computed: {
    processedQuestions: function () {
      const q = this.questions
      const gov = q.filter(question => question.category === 'American Government')
      const sorted = gov.sort((a, b) => 0.5 - Math.random())

      if (this.subcategory === 'all') {
        return sorted
      }
      if (this.subcategory === 'principles') {
        return sorted.filter(question => question.subcategory === 'Principles of American Democracy')
      }
      if (this.subcategory === 'systems') {
        return sorted.filter(question => question.subcategory === 'System of Government')
      }
      if (this.subcategory === 'rights') {
        return sorted.filter(question => question.subcategory === 'Rights and Responsibilities')
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
