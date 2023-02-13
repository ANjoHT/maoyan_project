import request from "@/utils/request";
import { ISuggestRes , ICinemasList , IMoviesList} from './model/searchModel'

enum Api {
  getSuggest = "search/suggest",
  getMovies = "search/movies",
  getCinemas = 'search/cinemas'
}

export const getSuggestApi = (kw: string, cityId: number) => {
  return request.get<any, ISuggestRes>(Api.getSuggest, {
    params: {
      kw,
      cityId,
    },
  });
};

export const getMoviesApi = (keyword : string, ci : number, offset:number) => {
  return request.get<any , IMoviesList>(Api.getMovies, {
    params: {
      keyword,
      ci,
      offset:0,
    },
  });
};

export const getCinemasApi = (keyword : string, ci : number, offset:number) => {
  return request.get<any , ICinemasList>(Api.getCinemas , {
    params:{
      keyword,
      ci,
      offset:0,
    }
  })
}