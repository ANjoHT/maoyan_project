<template>
  <div class="show-list">
    <div class="movie-info">
      <div class="movie-info-top">
        <h2 class="movie-name">{{ cinemaStore.movie.nm }}</h2>

        <div class="score sc" v-if="cinemaStore.movie.sc === '0.0'">
          {{ cinemaStore.movie.wish }}<span class="feng">人想看</span>
        </div>
        <div class="score sc" v-else>
          {{ cinemaStore.movie.sc }}<span class="feng">分</span>
        </div>
      </div>
      <div class="movie-desc">
        <div>
          <span class="key">时长 : </span>
          <span class="value">{{ cinemaStore.movie.dur }}分钟</span>
        </div>
        <div class="key_value">
          <span class="key">类型 : </span>
          <span class="value">{{ cinemaStore.movie.desc.split("|")[1] }}</span>
        </div>
        <div class="key_value">
          <span class="key">主演 :</span>
          <span
            class="value"
            v-for="name in cinemaStore.movie.desc.split('|')[2]?.split(',')"
          >
            {{ name }}</span
          >
        </div>
      </div>
    </div>
    <div class="show-date">
      <span>观影时间 :</span>
      <span
        class="date-item"
        v-for="(show, index) in cinemaStore.movie.shows"
        :class="{ active: currentDataIndex === index }"
        @click="getShowDate(show, index)"
      >
        {{
          currentData === show.showDate
            ? dayjs(show.showDate).format("今天 M月D")
            : dayjs(currentData).get("date") + 1 ===
              dayjs(show.showDate).get("date")
            ? dayjs(show.showDate).format("明天 M月D")
            : dayjs(show.showDate).format("ddd M月D")
        }}
       </span>
    </div>
    <div class="plist-container">
      <table class="plist">
        <thead>
          <tr>
            <th>放映时间</th>
            <th>语言版本</th>
            <th>放映厅</th>
            <th>售价（元）</th>
            <th>选座购票</th>
          </tr>
        </thead>
        <div v-if="showInfo?.length === 0" class="noShow">暂无放映...</div>
        <tbody v-else>
          <tr
            v-for="(show, index) in showInfo"
            :class="{ even: index % 2 === 1 }"
          >
            <td>
              <span class="begin-time">{{ show.tm }}</span>
              <br />
              <span class="end-time">{{dayjs(dayjs(show.dt + show.tm).valueOf() + 159 *60* 1000).format(' HH:mm')}}散场</span>
            </td>
            <td>
              <span class="lang">{{ show.lang }}{{ show.tp }}</span>
            </td>
            <td>
              <span class="hall">{{ show.th }}</span>
            </td>
            <td>
              <span class="sell-price"
                ><span class="yuan">￥</span>{{ show.baseSellPrice }}</span
              >
            </td>
            <td><a class="buy-btn normal" @click="goXseats">选座购票</a></td>
          </tr>
        </tbody>
       
      </table>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "MovieList",
};
</script>

<script lang="ts" setup>
import { useCinemaStore } from "@/stores/modules/cinema";
import { onMounted, watch, reactive, ref } from "vue";

import type {
  MovieList,
  MovieItem,
  ShowItem,
  PList,
} from "@/api/cinema/model/cinemaModel";
// dayjs插件
import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear"; // 导入插件
import "dayjs/locale/zh-cn"; // 导入本地化语言
import { useRouter } from "vue-router";
const router = useRouter()

const goXseats = () => {
  router.push({
    name:'Seat'
  })
}
dayjs.extend(isLeapYear); // 使用插件
dayjs.locale("zh-cn"); // 使用本地化语言
const cinemaStore = useCinemaStore();
const props = defineProps<{
  bannerList: MovieList; 
}>();
// 今天
const currentData = ref(dayjs(new Date()).format("YYYY-MM-DD"));
// 观影数据
const currentDataIndex = ref(0);
const showInfo = ref<PList>(props.bannerList[0]?.shows[0]?.plist);
const getShowDate = (show: ShowItem, index: number) => {
  currentDataIndex.value = index;
  // console.log(show);
  showInfo.value = show.plist;
};
watch(
  () => cinemaStore.movie,
  (movie) => {
    // console.log(movie);
    if (!movie) return;
    showInfo.value = movie.shows[0]?.plist;
  },
  { immediate: true }
);
</script>

<style scoped>
.show-list {
  margin-top: 30px;
}
.movie-info-top {
  display: flex;
  margin-bottom: 20px;
}
.movie-name {
  font-size: 26px;
  font-weight: 400;
  color: #333;
  margin-right: 20px;
}
.score {
  font-size: 24px;
  color: #faaf00;
}
.feng {
  font-size: 12px;
}
.movie-desc {
  display: flex;
  font-size: 14px;
  padding-bottom: 30px;
  border-bottom: 1px solid #e5e5e5;
}
.key_value {
  margin-left: 40px;
}
.key {
  color: #999;
}
.value {
  color: #151515;
  margin-left: 10px;
}
.show-date {
  padding: 30px 0;
  font-size: 14px;
  color: #999;
}
.date-item {
  margin-left: 30px;
  color: #333;
}
.date-item.active {
  padding: 2px 8px;
  border-radius: 10px;
  color: #fff;
  background-color: #f03d37;
}

.plist {
  width: 100%;
  border: none;
}
.plist thead {
  color: #333;
  font-size: 16px;
  background-color: #f7f7f7;
  height: 60px;
  line-height: 60px;
}
.plist tbody tr {
  height: 82px;
}
.plist tbody td {
  text-align: center;
  width: 20%;
}
.even {
  background-color: #f9f9f9;
}
.begin-time {
  font-size: 18px;
  color: #333;
  font-weight: 700;
}
.end-time {
  font-size: 12px;
  color: #999;
}
.lang,
.hall {
  font-size: 14px;
  color: #333;
}
.sell-price {
  font-size: 18px;
  color: #f03d37;
  font-weight: 700;
}

.sell-price .yuan {
  font-size: 12px;
}
.buy-btn {
  border-radius: 14px;
  padding: 3px 12px;
  color: #fff;
  width: 80px;
  height: 30px;
  background-color: #f03d37;
  font-size: 14px;
  line-height: 30px;
  /* border-radius: 100px; */
  text-align: center;
}
.buy-btn.normal {
  box-shadow: 0 2px 10px -2px #f03d37;
}
.noShow{
  font-size: 36px;
  color: #333;
  text-align: center;
  margin: 100px auto;
}
</style>
