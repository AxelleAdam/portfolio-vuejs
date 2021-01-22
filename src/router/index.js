import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
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
  },
  {
    path:'/design',
    name:'Design',
    component: () => import(/* webpackChunkName: "about" */ '../components/Design.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: 'portfolio-vuejs-2021',
  routes
})

export default router
