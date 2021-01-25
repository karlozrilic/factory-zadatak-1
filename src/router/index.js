import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'About',
    component: Category
  },
  {
    path: '/single',
    name: 'Single',
    component: Category
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
