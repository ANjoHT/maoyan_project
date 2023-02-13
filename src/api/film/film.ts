import request from '../../utils/request'

const enum Api {
  getFilmList = 'https://apis.netstart.cn/maoyan/index/movieOnInfoList',
  getComingList = 'https://apis.netstart.cn/maoyan/index/comingList',
  // getMoreClassicList = 'https://apis.netstart.cn/maoyan/index/moreClassicList?sortId=1&showType=3&limit=10&offset=0',
  getMoreClassicList = 'https://apis.netstart.cn/maoyan/index/moreClassicList',
}
// 正在上映
export const getFilmList = () => {
  return request.get<any, any>(Api.getFilmList)
}
// 即将上映
export const getComingList = (ci: string, limit: number) => {
  return request.get<any, any>(Api.getComingList, {
    params: {
      ci,
      limit,
    },
  })
}
// 经典电影
export const getMoreClassicList = (offset: number) => {
  return request.get<any, any>(Api.getFilmList, {
    params: {
      offset,
    },
  })
}
