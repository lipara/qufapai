import http from "@/utils/http.js"

// 海关关区
export const clPortSelect = data => {
  return http({
    method: "get",
    url: "/jgpt/customs/searchNoPac",
    data
  })
}

//获取二维码核验详情  申报订单详情
export function clearanceOrderDetail(params) {
  return http({
    url: "/twoDimensionalCode/clearanceOrderDetail",
    method: "get",
    baseURL: "http://192.168.20.28:18011/",

    // baseURL:Z_BACKEND_DOMAIN,
    params
  })
}

// 口岸关区查询
export const portList = params => {
  return http({
    method: "get",
    url: "/jgpt/customs/search",
    params
  })
}

// 菜单查询
export const menuList = params => {
  return http({
    method: "get",
    url: "/jgpt/function/search",
    params
  })
}
