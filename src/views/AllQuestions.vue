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
      imgSrc: '/img/allQ.jpg'
    }
  },
  computed: {
    processedQuestions: function () {
      const q = this.questions
      const sorted = q.sort((a, b) => 0.5 - Math.random())
      if (this.subcategory === 'order') {
        return q
      }
      if (this.subcategory === 'random') {
        return sorted
      }
      if (this.subcategory === 'ten') {
        return sorted.slice(0, 10)
      }
      if (this.subcategory === 'twenty') {
        return sorted.slice(0, 20)
      }
      return q
    }
  },
  props: {
    subcategory: {
      type: String,
      default: 'order'
    },
    questions: {
      type: Array,
      required: true
    }
  }
}
</script>
