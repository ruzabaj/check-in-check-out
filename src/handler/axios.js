import axios from "axios";
import store from "../store/index"

const api = {
  setHeaders() {
    const instance = axios.create({
      baseURL: `http://localhost:8000/api/`,
      // baseURL: `http://4239-103-163-182-236.ngrok.io`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
        Authorization: store.getters.user !== null ? `Token ${store.getters.user.token}` : null,
      },
    });
    return instance;
  },
  
  async get(target) {
    try {
      let instance = await this.setHeaders();
      let response = await instance.get(target);
      // console.log(response.data)
      return response.data;
    } catch (e) {
      // console.log(store.getters.user.token)
      this.handlerError(e.response.status, e.response.data.errors);
      throw e;
    }
  },

  async getWithPayload(target, payload) {
    try {
      let instance = await this.setHeaders();
      let response = await instance.get(target, { params: payload });
      return response.data;
    } catch (e) {
      this.handlerError(e.response.status, e.response.data.errors);
      throw e;
    }
  },

  async post(target, payload) {
    try {
      let instance = await this.setHeaders();
      let response = await instance.post(target, payload);
      return response.data;
    } catch (e) {
      let response = e.response
      this.handlerError(response.status, response.data);
      throw e;
    }
  },

  async postGoogle(target, payload) {
    try {
      let instance = await this.setHeadersG();
      let response = await instance.post(target, payload);
      return response.data;
    } catch (e) {
      let response = e.response
      this.handlerError(response.status, response.data);
      throw e;
    }
  },

  async put(target, payload) {
    try {
      let instance = await this.setHeaders();
      let response = await instance.put(target, payload);
      return response.data;
    } catch (e) {
      let response = e.response
      this.handlerError(response.status, response.data);
      throw e;
    }
  },

  async patch(target, payload) {
    try {
      let instance = await this.setHeaders();
      let response = await instance.patch(target, payload);
      return response.data;
    } catch (e) {
      let response = e.response
      this.handlerError(response.status, response.data);
      throw e;
    }
  },

  async handlerError(statusCode, message) {
    if (statusCode === 404) {
        // this.$router.push('/404');
        return statusCode
    }
    if (statusCode === 422 ) {
        console.log(message.message)
    }
    else {
      return message;
    }
  },
};

export default api;
