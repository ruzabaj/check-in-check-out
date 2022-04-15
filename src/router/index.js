import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../View/Dashboard'
import Login from '../View/Auth/Login'
import Leave from '../View/Leave'
import logout from '../View/logout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Home,
    meta: {
      auth: true
    }
  },
  {
    path: '/logout',
    name: 'logOut',
    component : logout,
    meta: {
      auth: true
    }
  },
  {
    path: '/leave',
    name: 'Leave',
    component : Leave,
    meta: {
      auth: true
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
  },

  
]

const router = new VueRouter({
  routes
})

export default router
