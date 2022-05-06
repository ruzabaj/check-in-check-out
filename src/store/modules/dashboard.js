import $api from '@/handler/axios'
// import { reject, resolve } from 'core-js/fn/promise'
// import Vue from 'vue'
// import vueConfig from 'vue.config'

export const SET_USER_DATA = 'SET_USER_DATA';


const state = {
    userdata:{}
};

const mutations = {
    [SET_USER_DATA](state, value){
        state.userdata=value
    }
};

const actions = {
    // dashuser bhitra context
    dashuser(){
        return new Promise((resolve, reject) => {
            $api.get(`/staff/staff-dashboard/`).then(res => {
                // Vue.auth.setToken(res)
                // console.log(res.token)
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }


};

const getters = {
    data: state=> state.data
};


export default {
    state,
    mutations,
    actions,
    getters
}