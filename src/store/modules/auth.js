import $api from '@/handler/axios'
import Vue from 'vue'

export const CHECK_AUTH = 'CHECK_AUTH'
export const SET_USER = 'SET_USER'
export const SET_PROFILE = 'SET_PROFILE'

const state = {
    authenticated: false,
    user: null,
    profile: {},
}

const mutations = {
    [CHECK_AUTH] (state, value) {
        state.authenticated = value
    },

    [SET_USER] (state, value) {
        state.authenticated = true;
        state.user = value
    },

    [SET_PROFILE] (state, value) {
        state.profile = value
    },
}

const actions = {
    login (context, formdata) {
        return new Promise((resolve, reject) => {
            $api.post(`authuser/login`, formdata).then(res => {
                Vue.auth.setToken(res)
                if(res.token) {
                    context.commit('CHECK_AUTH', true);
                    context.commit('SET_USER', res);
                }
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },

    logout() {
        return new Promise((resolve, reject) => {
            $api.get(`authuser/logout/`).then(res => {
                Vue.auth.destroyToken()
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },

    getProfile(context) {
        return new Promise((resolve, reject) => {
            $api.get(`authuser/get-profile/`).then(res => {
                context.commit('SET_PROFILE', res)
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
    authenticated: state => state.authenticated,
    user: state => state.user,
    profile: state => state.profile,
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