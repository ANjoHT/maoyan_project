export interface IMovieItem {
  id: number;
  nm: string;
  sc: number;
  img: string;
  version: string;
}
export type IMovieList = IMovieItem[];
// 热映电影
export interface IHotMoovieRes {
  total: number;
  movieList: IMovieList;
}

// 即将上映
export interface IComingMovieItem {
  id: number;
  nm: string;
  img: string;
  wish: number;
  showInfo: string;
  comingTitle: string;
  showStateButton?: {
    content: string;
  };
}
export type IComingMovieList = IComingMovieItem[];
export interface IComingMovieRes {
  coming: IComingMovieList;
  movieIds: string[];
}

export interface ITopMovieItem {
  movieId: number;
  name: string;
  poster: string;
  score: string;
}
export type ITopMovieList = ITopMovieItem[];
export interface ITopMovieRes {
  movieList: ITopMovieList;
}
