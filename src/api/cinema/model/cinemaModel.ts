import { getMovieListApi } from "./../cinema";
/*
{
  addr: "金山区枫泾镇新泾路300弄35号",
  buyoutInfo: null,
  callboardInfo: {
  desc: "",
  url: ""
  },
  cinemaCouponPackInfo: {
  desc: "超低折扣，限量专属",
  hasProm: 0,
  icon: "",
  superScript: "4折起",
  title: "影院券包",
  url: "https://store-m.maoyan.com/mmall/goods/list/virtual-goods?cinemaId=17166"
  },
  cinemaId: 17166,
  cinemaLicenseInfo: {
  desc: "",
  licenseList: [ ],
  title: "营业资质"
  },
  couponInfo: null,
  endorseInfo: null,
  fansMeetingInfo: null,
  featureTags: [
  {
  color: "#7CB342",
  desc: "未取票用户放映前60分钟可退票",
  icon: "",
  tag: "退",
  type: 0,
  url: "http://m.maoyan.com/order/refundinfo?time=60&cinemaId=17166&userId=0"
  },
  {
  color: "#7CB342",
  desc: "未取票用户放映前60分钟可改签",
  icon: "",
  tag: "改签",
  type: 0,
  url: "http://m.maoyan.com/order/endorseinfo?_v_=yes&time=60&cinemaId=17166&userId=0"
  },
  {
  color: "#ff9900",
  desc: "免押金",
  icon: "",
  tag: "3D眼镜",
  type: 0,
  url: ""
  },
  {
  color: "#ff9900",
  desc: "1.3米（含）以下观看2D3D电影免票，无座，有儿童3D眼镜",
  icon: "",
  tag: "儿童优惠",
  type: 0,
  url: ""
  }
  ],
  follow: 0,
  headImg: "http://p0.meituan.net/ugcpic/2c2e32340414a2b842ed775ab7342d3f",
  lat: 30.8892,
  lng: 121.01282,
  mallInfo: null,
  nm: "上海枫泾天娱影城",
  notice: "",
  poiId: 152392289,
  refundInfo: null,
  roadLeading: "",
  s: 0,
  s1: 0,
  s2: 0,
  s3: 0,
  saleInfo: null,
  sell: true,
  shopId: 79293213,
  shopUuid: "l1Ihhvf7KdUH2R6Q",
  snum: 0,
  stringPoiId: "152392289",
  stringShopId: "79293213",
  tel: "021-67354200",
  vipInfo: {
  desc: "开卡享优惠",
  icon: "http://p1.meituan.net/movie/889d5aaca9316ddcec5831a095ac6a8b1145.png",
  superScript: "",
  title: "影城卡",
  type: 0,
  url: "imeituan://www.meituan.com/web/?url=https%3A%2F%2Fm.maoyan.com%2Fmultiplecard%2Fdetail%2F1249789%3F_v_%3Dyes%26version%3D4%26channelId%3D3%26cinemaId%3D17166%26originType%3D3%26fromShow%3D1"
  }
},
*/

/*
 {
  cinemaId: 17166,
  cinemaName: "上海枫泾天娱影城",
  cityCardInfo: [ ],
  modeSwitchThreshold: 5,
  movies: [],
  poiId: 152392289,
  selectedMovieSeq: 2,
  sell: true,
  stringPoiId: "152392289",
  tips: "",
  vipInfo: [
  {
  isCardSales: 0,
  process: "9.9元起开卡",
  tag: "影城卡",
  title: "开卡享优惠",
  url: "https://m.maoyan.com/multiplecard/detail/1249789?_v_=yes&version=4&channelId=4&cinemaId=17166&originType=4&fromShow=1"
  }
  ],
  stoneData: {
  base64: { },
  resultCode: 0,
  resultMessage: "success",
  cssSource: "@font-face{font-family: "mtsi-font";src:url("//s3plus.meituan.net/v1/mss_73a511b8f91f43d0bdae92584ea6330b/font/1a736ed2.eot");src:url("//s3plus.meituan.net/v1/mss_73a511b8f91f43d0bdae92584ea6330b/font/1a736ed2.eot?#iefix") format("embedded-opentype"),url("//s3plus.meituan.net/v1/mss_73a511b8f91f43d0bdae92584ea6330b/font/1a736ed2.woff");}",
  unicodeMap: null,
  __isset_bit_vector: [
  1
  ],
  optionals: [
  "RESULT_CODE",
  "RESULT_MESSAGE",
  "CSS_SOURCE",
  "UNICODE_MAP"
  ]
  }
},

*/
export interface FeatureTagsItem {
  desc: string;
  tag: string;
}
export type FeatureTagsList = FeatureTagsItem[];
export interface CinemaDetailInfo {
  addr: string; //地址
  cinemaId: number; //影院Id
  featureTags: FeatureTagsList; //tag数据
  nm: string; //影院
  poiId: number;
  tel: string; // 电话
}
export interface GetCinemaDetailApiResponse {
  data: CinemaDetailInfo;
}


export interface PItem {
  baseSellPrice: string; //价格
  dt: string; //观影日期
  lang: string; //语言
  th: string; // 放映厅
  tm: string; //开始放映时间
  tp: string; // 2D 3D
}
export type PList = PItem[];
export interface ShowItem {
  plist: PList; // 相关影院的放映列表
  showDate: string; //观影日期
}
export type ShowList = ShowItem[];
export interface MovieItem {
  desc: string; //当前选择的电影名描述
  id: number;
  img: string; //当前选择的电影图片
  nm: string; //当前选择的电影名
  sc: string; //评分
  shows: ShowList; // 当前电影的放映列表
  dur: 159; //播放多少分钟

  wish: number; //期望值
  // showCount: 9;
}
export type MovieList = MovieItem[];
export interface MovieListInfo {
  movies: MovieList;//影院播放的电影列表
  
  cinemaId: number;//影院Id
  cinemaName:string,//影院名
  poiId: number;
  // 应该没用上的数据
  // modeSwitchThreshold: number;
  // selectedMovieSeq: number;
  // stringPoiId: String;
}
export interface GetMovieListApiResponse {
  data: MovieListInfo;
}
