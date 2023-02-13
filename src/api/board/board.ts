import request from "@/utils/request";
import type{GetBoardListApiResponse} from './model/boardModel'
enum Api {
  getBoardList = "/index/movieOnInfoList",
}
/**
 * 榜单获取电影列表
 * @returns 
 */
export const getBoardListApi = () => {
  return request.get<any, GetBoardListApiResponse>(Api.getBoardList);
};
