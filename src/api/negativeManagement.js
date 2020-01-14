import http from "@/utils/http.js"
// import { Z_BACKEND_DOMAIN } from "@/utils/env"

// 负面清单列表查询
export const list = data => {
  return http({
    method: "post",
    url: "/negativeList/list",
    baseURL: Z_BACKEND_DOMAIN,
    data
  })
}

// 商品归类查询
export const classify = data => {
  return http({
    method: "post",
    url: "/negativeList/findAllGoodsTaxRate",
    //baseURL: Z_BACKEND_DOMAIN,
    data
  })
}

// 根据id查询
export const find = data => {
  return http({
    method: "post",
    url: `/negativeList/find/${data.id}`,
    //baseURL: Z_BACKEND_DOMAIN
  })
}

// 删除
export const remove = data => {
  return http({
    method: "post",
    url: `/negativeList/delete/${data.id}`,
   // baseURL: Z_BACKEND_DOMAIN
  })
}

// 新增或修改
export const modify = data => {
  return http({
    method: "post",
    url: "/negativeList/modify",
    //baseURL: Z_BACKEND_DOMAIN,
    data
  })
}
