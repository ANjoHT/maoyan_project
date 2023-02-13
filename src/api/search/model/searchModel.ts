export interface IMoviesItem {
  id: number;
  nm?: string;
  img?: string;
  catogary: string;
  ename: string;
  name: string;
  poster: string;
  release: string;
  score: string;
  version: string;
  wish: string;
}
export type IMoviesList = IMoviesItem[];

export interface ICinemasItem {
  id: number;
  nm?: string;
  distance: string;
  info: {
    address: string;
    name: string;
    price: string;
    tags: string[];
  };
}
export type ICinemasList = ICinemasItem[];

export interface ISuggestRes {
  movies: {
    total: number;
    list: [];
  };
  cinemas: {
    total: number;
    list: [];
  };
}
