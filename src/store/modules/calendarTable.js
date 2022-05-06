import $api from '@/handler/axios'
// import { reject, resolve } from 'core-js/fn/promise'
// import Vue from 'vue'
// import vueConfig from 'vue.config'

export const SET_STAFF_HOLIDAY = 'SET_STAFF_HOLIDAY'


const state = {
    staffholiday: {}
}

const mutations = {
    [SET_STAFF_HOLIDAY] (state, value) {
        state.staffholiday = value
    }
}

const actions = {
    // calendar bhitra context
    calendar(){
        return new Promise((resolve, reject) => {
            $api.get(`/staff/staff-holiday/`).then(res => {
                // Vue.auth.setToken(res)
                // console.log(res.token)
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }

}

/*
|--------------------------------------------------------------------------
| Getters
|--------------------------------------------------------------------------
*/
const getters = {
    staffholiday: state => state.staffholiday,
    // user: state => state.user,
    // profile: state => state.profile,
    // data: state =>state.data,
}



/*
|--------------------------------------------------------------------------
| Export the module
|--------------------------------------------------------------------------
*/
export default {
    state,
    mutations,
    actions,
    getters
}