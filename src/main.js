import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router'
import store from './store'
import api from '@/handler/axios'
import auth from '@/package/auth'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.use(auth)

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    let authentication = localStorage.getItem('token');
    if (authentication) {
      store.commit('SET_USER', JSON.parse(localStorage.getItem('user')));
      store.commit('CHECK_AUTH', true);
      next()

      if(to.name === 'LoginScreen') {
        next({path: "/"})
      }
    }
    
    else {
      next({
        path: "/login"
      })
    }
  } else {
    next()
    }
  })

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
