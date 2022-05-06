import $api from '@/handler/axios'
// import Vue from 'vue'

export const USER_REASON = 'USER_REASON'

const state ={
    leavereason:{}
}
const mutations={
    [USER_REASON](state,value){
        state.leavereason=value
    }
}
const actions = {
    leaveform(context, formdata){
        return new Promise((resolve, reject)=>{
            $api.get('/staff/staff-leave/',formdata).then(res=>{
                // console.log(res)
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    // dispatch this api to the table (get)
    leaveapply(){
        return new Promise((resolve, reject) => {
            $api.get(`/staff/staff-leave/`).then(res => {
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
    leavereason: state=> state.leavereason
};

export default {
    state,
    mutations,
    actions,
    getters
}
