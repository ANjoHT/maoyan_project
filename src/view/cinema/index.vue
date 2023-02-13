<template>
  <div>
    <div class="cinema">
      <div class="banner">
        <div class="banner_wrap">
          <div class="banner_left">
            <div class="banner_show">
              <img
                src="@/assets/images/cinema_images/banner_cinema.png"
                :alt="cinemaDetailInfo.nm"
                class="banner_image"
              />
            </div>
          </div>
          <div class="banner_main">
            <div class="banner_context">
              <h1 class="name text-ellipsis">{{ cinemaDetailInfo.nm }}</h1>
              <div class="address text-ellipsis">
                {{ cinemaDetailInfo.addr }}
              </div>
              <div class="telphone">{{ cinemaDetailInfo.tel }}</div>
              <div class="features-group">
                <p class="features-title">
                  影院服务
                  <span class="features-line"> ——————————————————————</span>
                </p>
                <div class="features-list">
                  <div
                    class="feature"
                    v-for="featureTag in cinemaDetailInfo.featureTags"
                  >
                    <div class="tag">{{ featureTag.tag }}</div>
                    <p class="desc text-ellipsis">
                      {{ featureTag.desc }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="banner_map">
              <span class="show-map" @click="showCloseMap = true"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="cinema-nav">
          <a>猫眼电影 </a> > <a>影院</a> >
          <span>{{ cName }}</span>
        </div>
        <CSwiper :bannerList="bannerList" />
        <CMovieList :bannerList="bannerList" />
        <div class="related-cinemas">
          <h3 class="related-cinemas-title">相关影院</h3>
          <a href="#">1983巨幕影城（杜比全景声南岭店）</a>
          <a href="#">CGV影城（卓悦中心 激光IMAX店）</a>
          <a href="#">CGV影城（壹方城IMAX店）</a>
          <a href="#"> CGV影城（红山6979 激光IMAX店）</a>
          <a href="#">CINESKY新天影院</a>
          <a href="#">双IMAX</a>
          <a href="#">CINESKY新天影院IMAX（万科广场店）</a>
          <a href="#">DY影城（地王大厦店）</a>
          <a href="#">GLC激光影城（莲塘口岸店）</a>
          <a href="#">IPIC电影中心（欢乐港湾店）</a>
          <a href="#">ONE影城（世纪广场店）</a>
        </div>
        <!-- 点击map放大 -->
        <div class="big-map-modal" v-if="showCloseMap">
          <div class="close-map" @click="showCloseMap = false"></div>
          <div class="big-map"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "cinema",
};
</script>

<script lang="ts" setup>
import CMovieList from "./components/movieList.vue";
import CSwiper from "./components/swiper.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getCinemaDetailApi, getMovieListApi } from "@/api/cinema/cinema";
import type {
  CinemaDetailInfo,
  MovieList,
} from "@/api/cinema/model/cinemaModel";
import {useCinemaStore} from '@/stores/modules/cinema';
// dayjs插件
import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear"; // 导入插件
import "dayjs/locale/zh-cn"; // 导入本地化语言
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(isLeapYear); // 使用插件
dayjs.locale("zh-cn"); // 使用本地化语言
dayjs.extend(relativeTime);
// 今天
const currentData = ref(dayjs(new Date()).format("YYYY-MM-DD"));
// dayjs('currentData').fromNow(); //3小时前
// dayjs('2020-09-26 10:22:32').toNow(); //1天内
// console.log(dayjs(currentData.value).toNow());

const cinemaStore = useCinemaStore()
// 关闭按钮
const showCloseMap = ref(false);

onMounted(() => {
  // 获取数据
  getCinemaDetail();
  getMovieList();

});
// 获取影院详情
const $route = useRoute();
const cinemaDetailInfo = ref<CinemaDetailInfo>({
  addr: "", //地址
  cinemaId: 0, //影院Id
  featureTags: [], //tag数据
  nm: "", //影院
  poiId: 0,
  tel: "", // 电话
});
const getCinemaDetail = async () => {
  const res = await getCinemaDetailApi($route.query.id);
  const { addr, cinemaId, featureTags, nm, poiId, tel } = res.data;
  cinemaDetailInfo.value = { addr, cinemaId, featureTags, nm, poiId, tel };
};
// 影院正在上映电影列表
const bannerList = ref<MovieList>([]);
const cName = ref("");
const getMovieList = async () => {
  const res = await getMovieListApi({
    cinemaId: 25591,
    ci: 1,
    channelId: 4,
  });
  console.log(res);
  const { movies, cinemaName } = res.data;
  bannerList.value = movies.map((movie) => {
    return {
      desc: movie.desc, //当前选择的电影名描述
      id: movie.id,
      img: movie.img, //当前选择的电影图片
      nm: movie.nm, //当前选择的电影名
      dur: movie.dur, //播放多少分钟
      sc: movie.sc, //评分
      wish:movie.wish,
      shows: movie.shows.map((item) => {
        return {
          showDate: item.showDate, //观影日期
          plist: item.plist.map((p) => {
            return {
              baseSellPrice: p.baseSellPrice, //价格
              dt: p.dt, //观影日期
              // dt:dayjs(p.dt).format('ddd M月D'),
              lang: p.lang, //语言
              th: p.th, // 放映厅
              tm: p.tm, //开始放映时间
              tp: p.tp, // 2D 3D
            };
          }), // 相关影院的放映列表
        };
      }).filter((item)=>{
        return dayjs(item.showDate).get('date') >= dayjs(currentData.value).get('date')
      }),
    };
  });
  cName.value = cinemaName;
  cinemaStore.movie = bannerList.value[0]
};
</script>

<style scoped>
.cinema {
  width: 100%;
}
.banner {
  width: 100%;
  height: 330px;
  background: #392f59 url("@/assets/images/cinema_images/banner_bg.png")
    no-repeat 50%;
}
.banner_wrap {
  display: flex;
  width: 1200px;
  box-sizing: border-box;
  margin: auto;
  padding-top: 50px;
}
.banner_left {
  width: 360px;
  height: 340px;
  overflow: hidden;
}
.banner_show {
  width: 300px;
  margin: auto;
}
.banner_image {
  border: 4px solid #fff;
}
.banner_main {
  display: flex;
  justify-content: space-between;
  width: 840px;
  margin-top: -16px;
  height: 340px;
}
.banner_context {
  color: #fff;
}
.name {
  font-size: 26px;
  font-weight: 400;
  margin-bottom: 9px;
}
.address {
  font-size: 14px;
  margin-bottom: 6px;
}
.telphone {
  font-size: 14px;
}
.text-ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.features-group {
  width: 410px;
  margin-top: 20px;
  /* overflow: hidden; */
}
.features-title {
  font-size: 14px;
  margin-bottom: 5px;
  overflow: hidden;
  width: 410px;
}
.features-line {
  margin-left: 15px;
}
.features-list {
  height: 168px;
  overflow: hidden;
}
.feature {
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 22px;
  min-height: 22px;
  transform: scale(0.8);
  margin-left: -45px;
  height: 22px;
  margin-bottom: 5px;
}
.tag {
  border: 1px solid hsla(0, 0%, 100%, 0.6);
  border-radius: 2px;
  min-width: 60px;
  font-size: 12px;
  text-align: center;
  height: 22px;
  line-height: 23px;
  display: inline-block;
}
.desc {
  display: inline-block;
  margin-left: 10px;
  line-height: 22px;
  height: 22px;
  max-width: 438px;
}
.banner_map {
  width: 200px;
  height: 200px;
  background-color: #fff;
  position: relative;
  bottom: -65px;
}
.show-map {
  position: absolute;
  bottom: 0;
  right: 0;
  display: block;
  width: 36px;
  height: 29px;
  background: url(@/assets/images/cinema_images/banner_map.png) no-repeat;
}

.container {
  width: 1200px;
  margin: 70px auto;
  box-sizing: border-box;
}
.cinema-nav {
  margin-bottom: 25px;
  font-size: 14px;
  color: #666;
  padding-top: -55px;
}
/* 相关影院 */
.related-cinemas {
  margin-top: 120px;
  margin-bottom: 50px;
}
.related-cinemas-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
.related-cinemas a {
  text-decoration: none;
  color: inherit;
  margin-right: 5px;
  font-size: 16px;
}
.big-map-modal {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.8);
}
.close-map {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 100px;
  right: 20px;
  background: url(@/assets/images/cinema_images/map_close.png) no-repeat;
  background-size: 40px;
}
.big-map {
  width: 500px;
  height: 500px;
  background-color: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
