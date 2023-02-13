import request from "@/utils/request";

enum Api {
  getCinemasList = " https://apis.netstart.cn/maoyan/index/moreCinemas?day=2021-11-12&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item&updateShowDay=true&reqId=1636710166221&cityId=1&lat=23.135636443326355&lng=11"
}

export const getCinemasListApi = () => {
  return request.get<any, any>(Api.getCinemasList)
}