
const prefixToken = "GVT_AUTH_TOKEN"
// import Cookies from "js-cookie"

class Auth {

  constructor() {}

  static setToken(token) {
    return localStorage.setItem(prefixToken, token);
  }

  static getToken() {
    return localStorage.getItem(prefixToken);
  }

  static removeToken() {
    return localStorage.removeItem(prefixToken);
  }

  static logOut() {
    this.removeToken()
    // Cookies.remove('GVT_AUTH_UID')
    // Cookies.remove('GVT_AUTH_TOKEN')
    // this.removeStorage('GVT_AUTH_UID')
    // this.removeStorage('GVT_USER_TYPE')
    window.location.href = "/"
  }

  static setStorage(key, val) {
    return localStorage.setItem(key, val);
  }

  static getStorage(key) {
    return localStorage.getItem(key);
  }

  static removeStorage(key) {
    return localStorage.removeItem(key);
  }
}

export default Auth;
