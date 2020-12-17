import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/gardens',
    name: 'Gardens',
    component: () => import(/* webpackChunkName: "gardens" */ '../views/Gardens.vue')
  },
  {
    path: '/location',
    name: 'Location',
    component: () => import(/* webpackChunkName: "location" */ '../views/Location.vue')
  },
  {
    path: '/door',
    name: 'Door',
    component: () => import('../views/Door.vue')
  },
  {
    path: '/copyright',
    name: 'Copyright',
    component: () => import('../views/Copyright.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
