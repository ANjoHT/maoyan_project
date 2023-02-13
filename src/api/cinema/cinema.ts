import request from "@/utils/request";
import type {
  GetCinemaDetailApiResponse,
  GetMovieListApiResponse,
} from "./model/cinemaModel";
enum Api {
  getCinemaDetail = "/cinema/detail",
  getMovieList = "/cinema/shows",
}

/**
 * 获取影院详情
 * @param cinemaId 影院Id
 * @returns CinemaDetailInfo
 */
export const getCinemaDetailApi = (cinemaId: number) => {
  return request.get<any, GetCinemaDetailApiResponse>(Api.getCinemaDetail, {
    params: {
      cinemaId,
    },
  });
};

/**
 * 影院正在上映电影列表
 * @param cinemaId  影院id
 * @param channelId 城市id
 * channelId 4
 * @returns GetMovieListApiResponse
 */
export const getMovieListApi = ({
  cinemaId,
  ci,
  channelId,
}: {
  cinemaId: number;
  ci: number;
  channelId: number;
}) => {
  return request.get<any, GetMovieListApiResponse>(Api.getMovieList, {
    params: {
      cinemaId,
      ci,
      channelId: 4,
    },
  });
};
