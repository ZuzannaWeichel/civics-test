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
      imgSrc: '/img/americanHist.jpg'
    }
  },
  computed: {
    processedQuestions: function () {
      const q = this.questions
      const hist = q.filter(question => question.category === 'American History')
      const sorted = hist.sort((a, b) => 0.5 - Math.random())

      if (this.subcategory === 'all') {
        return sorted
      }
      if (this.subcategory === 'colonial') {
        return sorted.filter(question => question.subcategory === 'Colonial Period and Independence')
      }
      if (this.subcategory === '1800s') {
        return sorted.filter(question => question.subcategory === '1800s')
      }
      if (this.subcategory === 'recent') {
        return sorted.filter(question => question.subcategory === 'Recent American History and Other Important Historical Information')
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
