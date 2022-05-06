import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../View/Dashboard'
import Login from '../View/Auth/Login'
import Leave from '../View/Leave'
// import api from '../handler/axios'
// import store from '../store/index'

import check from '../View/testforcheck'
// import CheckinDescription from '../View/CheckinDescription'
import CheckinSuccess from '../View/CheckinSuccess.vue'
import PausePage from '../View/PausePage.vue'
import ResumePage from '../View/ResumePage.vue'
import CheckoutDescription from '../View/CheckoutDescription.vue'
import CheckoutSuccess from '../View/CheckoutSuccess.vue'
import leaveApply from '../modals/LeaveApplyModal'
import holidayCalendar from '../View/Holidaycalendar'
// import CheckoutPage from '.../View/CheckoutPage.vue'
// import { CHECK_AUTH } from '@/store/modules/auth'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashBoard',
    component: Home,
    meta: {
      auth: true
    }
  },
  {
    path:'/Check',
    name: 'testC',
    component: check,
    meta: {
      auth: true
    }
  },
//   {
//     name: 'CheckinDescriptionl',
//     component: CheckinDescription,
//     path: '/checkin-description'
// },
{
    name: 'CheckinSuccess',
    component: CheckinSuccess,
    path: '/checkin-success'
},
{
    name: 'PausePage',
    component: PausePage,
    path: '/checkin-pause'
},
{
    name: 'ResumePage',
    component: ResumePage,
    path: '/checkin-resume'
},
// {
//     name: 'CheckoutPage',
//     component: CheckoutPage,
//     path: '/checkout'
// },
{
    name: 'CheckoutDescription',
    component: CheckoutDescription,
    path: '/checkout-description'
},
{
    name: 'CheckoutSuccess',
    component: CheckoutSuccess,
    path: '/checkout-success'
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
    path: '/leave-apply',
    name: leaveApply,
    component: leaveApply
  },
  {
    path:'/Calendar',
    name: 'Holidaycalendar',
    component: holidayCalendar,
    meta:{
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
        next({path:'/ '})
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
