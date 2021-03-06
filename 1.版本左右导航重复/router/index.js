import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RightShow from '../pages/RightShow/RightShow.vue'
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
    path: '/rightshow/:value',
    name: 'rightshow',
    component: RightShow,
    props:(route) =>({value:route.params.value })
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
