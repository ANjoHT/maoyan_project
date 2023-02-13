<template>
  <div>

    <div class="top">


    </div>

    <div class="banner">
      <div class="banner_title">
        <div class="info_left">
          <div class="avatar_shadow">
            <img :src="data.img" alt="" class="avatar">
          </div>
        </div>
        <div class="info_right">
          <div class="movie_brief">
            <h1 class="name">{{ data.nm }}</h1>
            <div class="ename">{{ data.enm }}</div>
            <ul>
              <li class="ellipsis">{{ data.cat }}</li>
              <li class="ellipsis">{{ data.src }} / {{ data.dur }}分钟</li>
              <li class="ellipsis">{{ data.pubDesc }}</li>
            </ul>
          </div>
          <div class="action_button">
            <div class="action_clearfix">
              <a href="#" class="wish">
                <div>
                  <i class="wish_icon"></i>
                  <span>想看</span>
                </div>
              </a>
              <a href="#" class="score">
                <div>
                  <i class="score_icon"></i>
                  <span>评分</span>
                </div>
              </a>
            </div>
            <a href="#" class="buy_btn">特惠购票</a>
          </div>
          <div class="movie_container">
            <div class="movie_index">
              <p class="movie_index_title">猫眼口碑</p>
              <div class="movie_index_content">
                <span class="index_left">
                  <span class="point">{{ data.sc }}</span>
                </span>
              </div>
              <div class="index_right">
                <div class="star_wrapper">
                  <div class="star-on" :style="{
                    width: data.sc * 10 + '%'
                  }"></div>
                </div>
                <span class="score_num">
                  <span class="stonefont">{{ data.snum }}</span>
                  人评分</span>
              </div>
            </div>
            <div class="movie_index">
              <p class="movie_index_title">累计票房</p>
              <div class="movie_index_content">
                <span class="stonefont">{{ data.sumBox }}</span>
                <span class="unit">万</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script lang="ts">
export default {
  name: 'BannerView'
}
</script>

<script lang="ts" setup>
import { getMovieInfoApi } from '@/api/movieinfo/movieinfo';
import { onMounted } from 'vue';

const props = defineProps(["data", "id"])
const data = props.data

</script>


<style scoped>
a:hover {
  color: #fff !important;
}

.movie_index_content .unit {
  font-size: 12px;
  padding-left: 4px;
}

.movie_index_content .stonefont {
  font-size: 30px;
}

.star-on {
  height: 12px;
  background-image: url("@/assets/banner/star1.png")
}

.star_wrapper {
  width: 60px;
  height: 12px;
  position: relative;
  background-image: url("@/assets/banner/star0.png");
  background-repeat: repeat-x;
  margin-bottom: 4px;
}

.index_right {
  margin-left: 54px;
  font-size: 12px;
}

.movie_index_title {
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 1;
  font-size: 12px;
  margin-bottom: 8px;
}

.point {
  font-size: 30px;
  color: #ffc600;
  height: 30px;
  line-height: 30px;
}

.index_left {
  float: left;
}

.movie_container {
  position: absolute;
  top: 158px;
  left: 342px;
}

.movie_container .movie_index {
  margin-bottom: 16px;
  color: #fff;
}

.action_button .buy_btn {
  margin-top: 10px;
  width: 250px;
  height: 40px;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  border-radius: 2px;
  padding: 0;
  background-color: #df2d2d;
}


.action_button .score_icon {
  display: inline-block;
  vertical-align: middle;
  margin-top: -2px;
  margin-right: 2px;
  width: 16px;
  height: 16px;
  background: url("@/assets/banner/score.png");
  margin-right: 5px;
}

.action_button .wish_icon {
  display: inline-block;
  vertical-align: middle;
  margin-top: -2px;
  margin-right: 2px;
  width: 16px;
  height: 16px;
  background: url("@/assets/banner/wish.png");
  margin-right: 5px;
}


.action_button a {
  cursor: pointer;
  float: left;
  display: block;
  width: 120px;
  height: 25px;
  background-color: #756189;
  margin-right: 10px;
  padding-top: 11px;
  text-align: center;
  font-size: 14px;
  line-height: 16px;
  color: #fff;
  border-radius: 2px;
}

.action_button {
  bottom: 20px;
  position: absolute;
}

.ellipsis {
  margin: 12px 0;
  line-height: 100%;
}

.ename {
  width: 340px;
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 14px;
}

.movie_brief .name {
  width: 900px;
  margin-top: 0;
  font-size: 26px;
  line-height: 32px;
  font-weight: 700;
  margin-bottom: 0;
  overflow: hidden;
  max-height: 64px;
}

.movie_brief {
  position: absolute;
  color: #fff;
  font-size: 14px;
  z-index: 1;
}

.info_right {
  position: relative;
  height: 300px;
  margin-right: 30px;
  margin-left: 300px;
  top: 70px;
  position: relative;
}


.banner {
  width: 100%;
  min-width: 1200px;
  background-image: url("@/assets/banner/banner_bg.f7fd103e3b8c16b6f449cce43fc57f45.png");
}

.banner_title {
  height: 376px;
  width: 1200px;
  margin: 0 auto;

}

.info_left {
  float: left;
  width: 300px;
  top: 70px;
  overflow: hidden;
  z-index: 9;
  position: relative;
}

.avatar_shadow {
  margin: 0 30px;
  width: 240px;
  height: 330px;
  padding-bottom: 0px;
  background-image: url("@/assets/banner/download.png");
}

.avatar {
  border: 4px solid #fff;
  height: 322px;
  width: 232px;
}


a:hover {
  text-decoration: none;
  color: #fff
}
</style>