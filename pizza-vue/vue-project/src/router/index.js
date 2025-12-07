import { createRouter, createWebHistory } from 'vue-router'
import PizzaList from '../components/PizzaList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PizzaList
    }
  ]
})

export default router