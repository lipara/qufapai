import http from "@/utils/http.js"

// 清关包裹数据日
export const reportFormDay = params => {
  return http({
    method: "get",
    url: "/report/reportFormDay",
    params
  })
}

// 月报
export const reportFormMonth = () => {
  return http({
    method: "get",
    url: "/report/reportFormMonth"
  })
}

// 年报
export const reportFormYear = () => {
  return http({
    method: "get",
    url: "/report/reportFormYear",
  })
}
