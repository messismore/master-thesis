import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Thesis from '../views/Thesis.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Thesis },
  { path: '/Prezo', component: () => import('../views/Prezo.vue') },
  { path: '/Playground', component: () => import('../views/Playground.vue') },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
