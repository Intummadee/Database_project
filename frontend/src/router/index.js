import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/earn/login.vue')
  },
  {
    path: '/Subject',
    name: 'Subject',
    component: () => import('../views/earn/subjects.vue')
  },
  {
    path: '/enroll',
    name: 'enroll',
    component: () => import('../views/earn/mySubject.vue')
  },
  
]

const router = new VueRouter({ routes })

export default router
