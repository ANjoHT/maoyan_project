<template>
  <div class="movie-list-container swiper" ref="swiperRef">
    <div class="movie-list swiper-wrapper">
      <div
        class="movie swiper-slide"
        v-for="(movie, index) in bannerList"
        :class="{ active: currentIndex === index }"
        @click="handleUpdate(movie,index)"
        
      >
        <img :src="movie.img" :alt="movie.desc" class="movie-img" />
      </div>
      <span class="pointer"></span>
    </div>
    <span class="scroll-btn swiper-button-prev"></span>
    <span class="scroll-btn swiper-button-next"></span>
  </div>
</template>

<script lang="ts">
export default {
  name: "Swiper",
};
</script>

<script lang="ts" setup>
import Swiper, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import type { MovieList } from "@/api/cinema/model/cinemaModel";
import { onMounted ,ref,watch,nextTick} from "vue";
import type { MovieItem } from "@/api/cinema/model/cinemaModel";
import {useCinemaStore} from '@/stores/modules/cinema';
const cinemaStore = useCinemaStore()
const props = defineProps<{
  bannerList: MovieList;
}>();
const currentIndex = ref(0)
const handleUpdate = (movie:MovieItem,index:number) => {
  // console.log(movie);
  currentIndex.value = index
  // 更新pinia数据
  cinemaStore.movie = movie 
};
const swiperRef = ref()
watch(()=>props.bannerList,()=>{
  nextTick(()=>{
      // 轮播图
  const swiper = new Swiper('.swiper', {
    modules: [Navigation],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // 一页显示几张轮播图
    slidesPerView: 7,
    // // 几张轮播图为一组（轮播一组一组的轮播）
    slidesPerGroup: 7,
    // 循环幻灯片
    loopedSlides: 7,
    // 中心滑块
    // centeredSlides:true,
    // centeredSlidesBounds: true,
    // 按组跳过幻灯片
    // slidesPerGroupSkip:7,
  })
  });
},{immediate:true})

onMounted(() => {
  // cinemaStore.movie =  props.bannerList[0]

});
</script>

<style scoped>
/* .movie-list-container {
  height: 280px;
  background-color: #ededed;
  overflow: hidden;
  padding: 22px 5px;
  box-sizing: border-box;
  box-shadow: inset 0 0 100px 80px #ededed;
  position: relative;
} */
/* 轮播 */
.swiper {
  width: 1200px;
  height: 280px;
  background-color: #ededed;
  overflow: hidden;
  padding: 22px 5px;
  box-sizing: border-box;
  box-shadow: inset 0 0 100px 80px #ededed;
  position: relative;
}
.movie-list {
  white-space: nowrap;
  position: relative;
  left: 0;
}
.pointer {
  position: absolute;
  display: block;
  content: "";
  bottom: -23px;
  left: 71px;
  border-style: solid;
  border-width: 11px 14px;
  border-color: transparent transparent #fff;
}
.movie {
  width: 162px !important;
  height: 227px;
  border: 4px solid #fff;
  box-shadow: 0 1px 3px 0 hsl(0deg 0% 66% / 50%);
  transform: scale(0.82);
  display: inline-block;
}
.movie-img {
  width: 100%;
  height: 100%;
}
.movie.active {
  transform: scale(1);
  border-color: #f24030;
}
.scroll-btn {
  display: inline-block;
  position: absolute;
  width: 30px;
  height: 100%;
  box-shadow: #333;
  font-weight: bold;
  top: 50%;
  z-index: 10;
}

.swiper-button-prev {
  left: 0;
  color: #ffff;
  opacity: 1;
  /* background: url(@/assets/images/cinema_images/banner_prev.png) no-repeat 50%; */
}
.swiper-button-next {
  right: 0;
  color: #ffff;
  opacity: 1;
  /* background: url(@/assets/images/cinema_images/banner_next.png) no-repeat 50%; */
}
</style>
