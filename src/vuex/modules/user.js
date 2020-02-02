import {
  fetchUser,
  fetchUserByUrl
} from "@/api/auth"
import Auth from "@/utils/auth"
var envs = require("@/utils/env")

const user = {
  state: {
    // 账号
    userName: "",
    viewLoad: true
  },

  mutations: {
    SET_USERNAME: (state, userName) => {
      state.userName = userName
    },
    SET_VIEWLOAD: (state, viewLoad) => {
      state.viewLoad = viewLoad
    },
    LOGOUT_USER: (state) => {
      state.userName = "";
      Auth.logOut();
    },
  },

  actions: {

    FetchUserData({
      commit
    }) {
      return new Promise((resolve, reject) => {
        fetchUserByUrl().then(response => {
          const userinfo = response.data;
          /**
           * 此刻不做任何校验, 因此将其设置为 true.
           */
          let appFound = true;

          /**
           * 来判断是否进行用户信息的拉取
           *
           * 因此, 你必须要在 appFound 完成初始化"后", 且不为空对象"时"
           *
           *  ----- 才可更新其他的 state -----
           */
          if (appFound) {
            // mutation 账户
            commit("SET_USERNAME", userinfo.userName);

          } else {
            reject({
              source: "action",
              redirect: 403
            })
          }
          // resolve apps
          resolve(userinfo.menus);
        }).catch(error => {
          reject(error)
        })
      })
    },

    Logout({
      commit
    }) {
      commit("LOGOUT_USER");
    }
  }
}

export default user
