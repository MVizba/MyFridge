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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ListView
    }
  ]
})

export default router
