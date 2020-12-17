import Vue from 'vue'
import VueRouter from 'vue-router'
import Day from '../views/day-view.vue'
// import Week from '../views/week-view.vue'
//import Month from '../views/month-view.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'day-view',
    component: Day
  },
  {
    path: '/week',
    name: 'day-view',    
    component: () => import(/* webpackChunkName: "about" */ '../views/week-view.vue')
  },
  {
    path:'/month',
    name:'month-view',
    component:()=>import('../views/month-view.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
