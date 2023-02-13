
export interface GetMovieInfoRes {
  movie: movie
  celebrities: CelebritiesList,

}
export interface movie {
  pubDesc: string,
  cat: string,
  dir: string,
  dra: string,
  dur: number,
  enm: string,
  filmAlias: string,
  fra: string,
  id: number,
  imdbScore: number,
  img: string,
  nm: string,
  oriLang: string,
  sc: number,
  snum: number,
  sumBox: number,
  src: string,

}

export interface Celebrities {
  avatar: string,
  cnm: string,
  cr: number,
  desc: string,
  enm: string,
  id: number,
  ocr: number,
  roles: string,
  showAvatarDetail: boolean,
  still: string
}

export interface FeedVideos {
  id: number,
  title: string,
  video: Videos
  imgCount: number
}
export interface Videos {

  id: number,
  imgUrl: string,
  url: string
}
export type FeedVideosList = FeedVideos[]

export type CelebritiesList = Celebrities[]

export interface relatedMovies {
  img: string,
  sc: number,
  title: string,
  id: number
}

export type relatedMoviesList = relatedMovies[]