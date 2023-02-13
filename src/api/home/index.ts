import request from "@/utils/request";
import { IHotMoovieRes ,IComingMovieRes , ITopMovieRes} from './model/homeModel'

enum Api {
  getHotMoviesList = "index/movieOnInfoList",
  getComingList = 'index/comingList',
  getTopRatedMovies = 'index/topRatedMovies'
}
// 获取热映电影
export const getHotMoviesListApi = () => {
  return request.get<any, IHotMoovieRes>(Api.getHotMoviesList)
}
// 获取待映电影
export const getComingListApi = (ci:number , limit:number) => {
  return request.get<any , IComingMovieRes>(Api.getComingList, {
    params:{
      ci,
      limit
    }
  })
}

export const getTopRatedMoviesApi = () => {
  return request.get<any , ITopMovieRes>(Api.getTopRatedMovies)
}