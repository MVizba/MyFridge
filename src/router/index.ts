import { createRouter, createWebHistory } from 'vue-router'
import ListView from '../views/ListView.vue'
import ShoppingView from '../views/ShoppingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ShoppingView
    },
    {
      path: '/healthyFood',
      name: 'list',
      component: ListView
    },

    {
      path: '/:catchAll(.*)*',
      redirect: { name: 'home' }
    },
  ]
})

export default router
