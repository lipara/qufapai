import http from "@/utils/http.js"

// 列表
export const list = data => {
  return http({
    method: "post",
    url: "/jgpt/user/search",
    data
  })
}

// 添加
export const add = data => {
  return http({
    method: "post",
    url: "/jgpt/user/add",
    data
  })
}

// 删除
export const remove = id => {
  return http({
    method: "delete",
    url: `/jgpt/user/delete/${id}`
  })
}

// 新增或修改
export const modify = data => {
  return http({
    method: "post",
    url: "/jgpt/user/modify",
    data
  })
}

// 禁用/启用
export const prohibit = params => {
  return http({
    method: "get",
    url: `/jgpt/user/prohibit`,
    params
  })
}
