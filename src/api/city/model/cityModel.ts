export interface IGetCityItem {
  id: number;
  nm: string;
  py: string;
}

export type IGetCityList = IGetCityItem[];

export interface IGetCity {
  cts: IGetCityList;
  hot: string[];
}
export interface IUseCityItem {
  word?:string
  A?:IGetCityList
  B?:IGetCityList
  C?:IGetCityList
  D?:IGetCityList
  E?:IGetCityList
  F?:IGetCityList
  G?:IGetCityList
  H?:IGetCityList
  I?:IGetCityList
  J?:IGetCityList
  K?:IGetCityList
  L?:IGetCityList
  M?:IGetCityList
  N?:IGetCityList
  O?:IGetCityList
  P?:IGetCityList
  Q?:IGetCityList
  R?:IGetCityList
  S?:IGetCityList
  T?:IGetCityList
  U?:IGetCityList
  V?:IGetCityList
  W?:IGetCityList
  X?:IGetCityList
  Y?:IGetCityList
  Z?:IGetCityList
}
export type IUseCityList = IUseCityItem[];

export interface ICurrentItem {
  id:number
  city:string
}

export interface ICurrentRes {
  data:ICurrentItem
}