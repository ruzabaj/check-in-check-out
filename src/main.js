import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router'
import checkin from './assets/js/checkin'
import store from './store'
import api from '@/handler/axios'
import auth from '@/package/auth'
import { ClientTable} from 'vue-tables-2'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.use(auth)

//shows only 5 events of a calendar
Vue.use(ClientTable, {
  perPage: 5
}, false);


export default{
  components: {
  }
}  


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
  checkin,
  render: h => h(App),
}).$mount('#app')
