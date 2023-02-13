export interface MovieItem {
  id: number; // 电影Id
  img: string; // 电影图片
  nm: string; // 电影名
  sc: number; // 电影评分
  wish: number; // 电影期待值
  star: string; // 电影明星
  rt: string; // 电影时间
}
export type MovieList = MovieItem[];
export interface GetBoardListApiResponse {
  movieList: MovieList;
}
