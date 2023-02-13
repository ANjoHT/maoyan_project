import request from '@/utils/request'
import { IGetCity ,ICurrentRes } from './model/cityModel'

enum Api {
  getCityList = '/cities.json',
  getCurrentCity = '/city/latlng'
}
// 获取城市列表
export const getCityListApi = () => {
  return request.get<any,IGetCity>(Api.getCityList)
}
// 获取当前城市
export const getCurrentCityApi = (lat :number,lng : number) => {
  return request.get<any,ICurrentRes>(Api.getCurrentCity,{
    params:{
      lat,
      lng
    }
  })
}