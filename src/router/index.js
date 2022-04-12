import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../View/Dashboard'
import Login from '../View/Auth/Login'
import Leave from '../View/Leave'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DashBoard',
    component: Home,
    meta: {
      auth: false
    }
  },
  {
    path: '/leave',
    name: 'Leave',
    component : Leave,
    meta: {
      auth: false
    }
  },

  {
    path: '/login',
    name: 'LoginScreen',
    component: Login,
    meta: {
      auth: false
    },
    beforeEnter: (to, from, next) => {
      if(localStorage.getItem('token')) {
        next({path:'/'})
      }
      else {
        next()
      }
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
