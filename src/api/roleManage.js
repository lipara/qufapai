import http from "@/utils/http.js"

// 列表
export const list = data => {
  return http({
    method: "post",
    url: "/jgpt/role/searchByPage",
    data
  })
}

// 列表
export const all = () => {
  return http({
    method: "get",
    url: "/jgpt/role/search"
  })
}

// 添加
export const add = data => {
  return http({
    method: "post",
    url: "/jgpt/role/add",
    data
  })
}

// 删除
export const remove = id => {
  return http({
    method: "delete",
    url: `/jgpt/role/delete/${id}`,
  })
}

// 新增或修改
export const modify = data => {
  return http({
    method: "post",
    url: "/jgpt/role/modify",
    data
  })
}
