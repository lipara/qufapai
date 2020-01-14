import http from "@/utils/http.js"

export function declarationSearch(data = {}) {
  return http({
      url: "/declarationApply/search",
      method: "post",
      data,
      baseURL:"http://192.168.20.28:18011/"
  })
}