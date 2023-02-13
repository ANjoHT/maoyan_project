
import request from "@/utils/request";
import { GetMovieInfoRes, FeedVideosList } from "./model/movieinfoModel"


enum Api {
  GetMovieInfo = `https://apis.netstart.cn/maoyan/movie/detail?movieId=`
}

export const getMovieInfoApi = (id: number) => {

  return request.get<any, GetMovieInfoRes>(Api.GetMovieInfo + id)
}
export const getMovieActorApi = (id: number) => {

  return request.get<any, any>(Api.GetMovieInfo + id)
}
export const getFeedVideosApi = (id: number) => {

  return request.get<any, any>(Api.GetMovieInfo + id)
}