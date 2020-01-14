import axios from "axios"
import Auth from "./auth"
import store from "@/vuex/store"
import packageConfig from '../../package.json'

import {
  JWT_EXPIRES_CODE
} from "./constants"
import {
  TIMEOUT,
  BACKEND_DOMAIN
} from "@/utils/env"
const http = axios.create({
  baseURL: BACKEND_DOMAIN,
  timeout: TIMEOUT
});

// http.defaults.headers.common["Accept-Language"] = Lang.getLang();

http.interceptors.request.use(config => {
  // const jwt = Auth.getToken();
  // jwt && (config.headers["Authorization"] = jwt);
  return config;
}, error => {
  Promise.reject(error);
});

http.interceptors.response.use(response => {

  const code = response.data.code;

  if (response.data && !code) {
    return Promise.resolve(response);
  }

  if (JWT_EXPIRES_CODE.indexOf(code) > -1) {
    store.dispatch("Logout")
    return Promise.reject({
      source: "JWT",
      message: "登录过期,请重新登录!"
    })
  }

  if (code != 200) {
    return Promise.reject(response.data);
  }

  if (response.data) {
    return response.data;
  } else {
    return response;
  }
  //   return response.data;
}, error => {
  if (error.code === "ECONNABORTED") {
    return Promise.reject({
      message: "请求超时"
    })
  } else {
    return Promise.reject(error);
  }
});

export const get = http.get;
export const post = http.post;

export const del = http.delete;


export default http;
