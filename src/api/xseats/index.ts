import request from "@/utils/request";

const enum Api {
  Getseatdata = "cinema/seat.json",
}
/**
 * 获取首页数据
 * @returns any
 */
export const GetseatdataApi = () => {
  return request.get<any, any>(Api.Getseatdata);
};
