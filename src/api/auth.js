import http from "@/utils/http"
import {
  ENV,
} from "@/utils/env"

/**
 * 用户登录
 * 
 * @param {object} data 
 * 
 * {username, password}
 */
export function login(data = {}) {
  return http({
    method: "post",
    url: "/common/login",
    // baseURL: "http://192.168.20.28:18011/",
    data
  })
}

/**
 * 根据 域名 拉取用户数据
 */
export function fetchUserByUrl() {
  return http({
    method: "post",
    url: "/common/getMenus",
    // baseURL: "http://192.168.20.28:18011/",
  })
}


/** 
 * 修改密码
 */
export function changePassword(data) {
  return http({
    method: "post",
    url: "/user/update/password",
    data,
  })
}


