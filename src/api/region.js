import http from "@/utils/http"
export function fetchRegion() {
  return http({
    method: "get",
    url: "/region/all/",
  })
}

export function getRegionChildren(parentId = 0) {
  return http({
    method: "get",
    url: "/region/getRegionChildren",
    params: { parentId }
  })
}