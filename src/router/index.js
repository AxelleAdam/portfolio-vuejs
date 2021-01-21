import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/project',
    name: 'My project',
    component: () => import(/* webpackChunkName: "about" */ '../views/Project.vue')
  },
  {
    path: '/contact',
    name: 'Contact me',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/wild',
    name: 'Bet2Invest',
    component: () => import(/* webpackChunkName: "about" */ '../components/Wild.vue')
  },
  {
    path: '/leihia',
    name: 'Leihia',
    component: () => import(/* webpackChunkName: "about" */ '../components/Leihia.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
