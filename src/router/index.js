import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Ausbildungsnachweise')
    },
    {
      path: '/dienstplan',
      name: 'Dienstplan',
      component: () => import('../views/Dienstplan')
    },
    {
      path: '/stundenplan',
      name: 'Stundenplan',
      component: () => import('../views/Stundenplan')
    },
    {
      path: '/versetzungsplan',
      name: 'Versetzungsplan',
      component: () => import('../views/Versetzungsplan')
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
