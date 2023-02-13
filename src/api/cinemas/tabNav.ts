import request from "@/utils/request";
import { CinemasRes } from "./model/navModel"


enum Api {
  getTabNav = `https://apis.netstart.cn/maoyan/index/filterCinemas?ci=`
}

export const getTabNavApi = (id: number) => {
  return request.get<any, CinemasRes>(Api.getTabNav + id)
}