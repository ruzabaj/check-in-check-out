import Vue from 'vue'
import Vuex from 'vuex'

import Auth from './modules/auth'
import Staffholiday from './modules/calendarTable.js'
import dashuser from './modules/dashboard.js'
import leaveapply from './modules/leaveform.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Auth,
    Staffholiday,
    dashuser,
    leaveapply
  }
})
