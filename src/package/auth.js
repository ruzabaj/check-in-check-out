import store from '../store/index';
// import Router from '../router/index'

export default function (Vue) {
  Vue.auth = {
    async setToken(res) {
      await localStorage.setItem('user', JSON.stringify(res));
      await localStorage.setItem('token', res.token)
    },

    async setResetToken(res) {
      await localStorage.setItem('reset', res.token)
    },

    getToken() {
      let token = localStorage.getItem('token');
      if (!token) {
        return null
      }
      return token;
    },

    async setOTP(res) {
      await localStorage.setItem('otp', JSON.stringify(res));
    },

    getReset() {
      let reset = localStorage.getItem('reset');
      if (!reset) {
        return null
      }
      return reset;
    },

    destroyToken() {
      store.commit('CHECK_AUTH', false);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('reset');
    },

    isAuthenticated() {
      if (this.getToken()) {
        store.commit('CHECK_AUTH', true);
        return true;
      } else {
        return false;
      }
    }

  };

  Object.defineProperties(Vue.prototype, {
    $auth: {
      get: () => {
        return Vue.auth;
      }
    }
  })
}
