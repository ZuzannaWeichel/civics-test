import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AllQuestions from '../views/AllQuestions.vue'
import HistoryQuestions from '../views/HistoryQuestions.vue'
import GovQuestions from '../views/GovQuestions.vue'
import IntegratedQuestions from '../views/IntegratedQuestions.vue'

Vue.use(VueRouter)

function dynamicPropsFn (route) {
  return {
    subcategory: route.params.subcategory
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/all/:subcategory',
    name: 'all-questions',
    component: AllQuestions,
    props: dynamicPropsFn
  },
  {
    path: '/history/:subcategory',
    name: 'history-questions',
    component: HistoryQuestions,
    props: dynamicPropsFn

  },
  {
    path: '/government/:subcategory',
    name: 'gov-questions',
    component: GovQuestions,
    props: dynamicPropsFn
  },
  {
    path: '/integrated/:subcategory',
    name: 'integrated-questions',
    component: IntegratedQuestions,
    props: dynamicPropsFn
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
