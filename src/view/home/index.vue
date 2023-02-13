<template>
  <div class="container">
    <div class="content">
      <!-- 主体内容 -->
      <div class="mian">
        <div class="panel">
          <div class="panel-header">
            <h2 class="panel-title">正在热映 ({{ hotTotal }}部)</h2>
            <span>
              <router-link to="/film">
                <span class="panel-more">全部</span>
              </router-link>
              <span class="iconfont icon-Right"></span>
            </span>
          </div>
          <div class="panel-content">
            <ul class="movie-list">
              <li v-for="movie in hotMovieList" :key="movie.id">
                <div class="movie-item">
                  <div class="movie-detail">
                    <router-link :to="{ name : 'movieInfo',query:{
                      id:movie.id
                    }}">
                      <img :src="movie.img" alt="" />
                      <div class="movie-overlay-bg">
                        <div class="movie-info">
                          <div class="movie-title">{{ movie.nm }}</div>
                          <div class="movie-score" v-if="movie.sc">
                            <i class="integer"  >
                              {{ movie.sc.toString().slice(0, 1) }}.
                              </i
                            >
                            <i class="fraction">{{
                              movie.sc.toString().slice(-1)
                            }}</i>
                          </div>
                        </div>
                      </div>
                    </router-link>
                  </div>
                  <div class="movie-ver">
                    <i :class="{ imx2d: movie.version === 'v2d imax' }"></i>
                  </div>
                  <div class="movie-sale">
                    <router-link :to="{name:'cinemas',query:{
                      id:movie.id
                    }}" class="sale-link">购 票</router-link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="panel">
          <div class="panel-header textcolor-blue">
            <h2 class="panel-title">即将上映 ({{ comingTotal }}部)</h2>
            <span>
              <router-link to="/film">
                <span class="panel-more textcolor-blue">全部</span>
              </router-link>
              <span class="iconfont icon-Right"></span>
            </span>
          </div>
          <div class="panel-content">
            <ul class="movie-list">
              <li v-for="movie in comingMovieList" :key="movie.id">
                <div class="movie-item">
                  <div class="movie-detail">
                    <router-link to="">
                      <img :src="movie.img" alt="" />
                      <div class="movie-overlay-bg">
                        <div class="movie-info">
                          <div class="movie-title">{{ movie.nm }}</div>
                        </div>
                      </div>
                    </router-link>
                  </div>
                  <div class="movie-wish movie-text-detail">
                    <i>{{ movie.wish }}想看</i>
                  </div>
                  <div class="movie-presale">
                    <div class="movie-presale-sep">预告片</div>
                    <div
                      class="movie-presale-dtl"
                      :class="{
                        'sale-hover': movie.showStateButton?.content === '预售',
                      }"
                      @click="goSale(movie.showStateButton?.content , movie.id)"
                    >
                      预售
                    </div>
                  </div>
                </div>
                <div class="movie-rt movie-text-detail">
                  <i>{{ movie.comingTitle.slice(0, -2) }}上映</i>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="panel">
          <div class="panel-header">
            <h2 class="panel-title">热播电影 (18部)</h2>
            <div class="panel-movies-link">
              <router-link to="/film" class="panel-m-l-item">爱情</router-link>
              <router-link to="/film" class="panel-m-l-item">喜剧</router-link>
              <router-link to="/film" class="panel-m-l-item">动作</router-link>
              <router-link to="/film" class="panel-m-l-item">恐怖</router-link>
              <router-link to="/film" class="panel-m-l-item">动画</router-link>
            </div>
            <span>
              <router-link to="/film">
                <span class="panel-more">全部</span>
              </router-link>
              <span class="iconfont icon-Right"></span>
            </span>
          </div>
          <div class="panel-content">
            <ul class="movie-list movie-reying-list">
              <li>
                <div class="movie-item">
                  <div class="movie-detail">
                    <router-link :to="{
                      name:'movieInfo',
                      query:{
                        id:247300
                      }
                    }">
                      <img src="@/assets/images/tangrenjie.jpg" alt="" />
                      <div class="movie-overlay-bg">
                        <div class="movie-info">
                          <div class="movie-title">唐人街探案</div>
                          <div class="movie-score">
                            <i class="integer">9.</i><i class="fraction">0</i>
                          </div>
                        </div>
                      </div>
                    </router-link>
                  </div>
                  <div class="movie-ver">
                    <i class="imx2d"></i>
                  </div>
                </div>
              </li>
              <li v-for="movie in topMovieList" :key="movie.movieId">
                <div class="movie-item">
                  <div class="movie-detail">
                    <router-link :to="{
                      name:'movieInfo',
                      query:{
                        id:movie.movieId
                      }
                    }">
                      <img :src="movie.poster" alt="" />
                      <div class="movie-overlay-bg">
                        <div class="movie-info">
                          <div class="movie-title">{{movie.name}}</div>
                          <div class="movie-score" v-if="movie.score">
                            <i class="integer">{{movie.score.toString().slice(0, 1)}}.</i><i class="fraction">{{movie.score.toString().slice(-1)}}</i>
                          </div>
                        </div>
                      </div>
                    </router-link>
                  </div>
                  <div class="movie-ver">
                    <i class="imx2d"></i>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 侧边内容 -->
      <div class="aside">
        <div class="ranking-wrapper">
          <div class="ranking-title">
            <h2 class="textcolor-red">今日票房</h2>
          </div>
          <div class="ranking-cotent">
            <ul class="ranking-list">
              <li class="ranking-item ranking-top aside-hover">
                <div class="ranking-top-left">
                  <img src="@/assets/images/manjianghong.jpg" alt="" />
                  <i class="ranking-top-icon"></i>
                </div>
                <div class="ranking-top-right">
                  <div class="ranking-t-r-main">
                    <span>满江红</span>
                    <p class="textcolor-red">1604.86万</p>
                  </div>
                </div>
              </li>
              <li class="ranking-item aside-hover">
                <router-link to="" class="text-d-none">
                  <div class="ranking-item-index">
                    <i>2</i>
                    <span class="ranking-movie-name movie-text-detail"
                      >流浪地球2</span
                    >
                    <span class="ranking-num-info textcolor-red"
                      >1234.45万</span
                    >
                  </div>
                </router-link>
              </li>
              <li class="ranking-item aside-hover">
                <router-link to="" class="text-d-none">
                  <div class="ranking-item-index">
                    <i>3</i>
                    <span class="ranking-movie-name movie-text-detail"
                      >熊出没•伴我 "熊芯"</span
                    >
                    <span class="ranking-num-info textcolor-red"
                      >1234.45万</span
                    >
                  </div>
                </router-link>
              </li>
              <li class="ranking-item aside-hover">
                <router-link to="" class="text-d-none">
                  <div class="ranking-item-index">
                    <i class="ranking-index">4</i>
                    <span class="ranking-movie-name movie-text-detail"
                      >无名</span
                    >
                    <span class="ranking-num-info textcolor-red"
                      >1234.45万</span
                    >
                  </div>
                </router-link>
              </li>
              <li class="ranking-item aside-hover">
                <router-link to="" class="text-d-none">
                  <div class="ranking-item-index textcolor-red">
                    <i class="ranking-index">5</i>
                    <span class="ranking-movie-name movie-text-detail"
                      >深海</span
                    >
                    <span class="ranking-num-info">1234.45万</span>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="box-total-wrapper">
          <h2>今日大盘</h2>
          <div>
            <p class="num">
              <span>2.04 <span>亿</span></span>
              <router-link to="/" class="textcolor-red">
                查看更多<span class="iconfont icon-Right textcolor-red"></span>
              </router-link>
            </p>
            <p class="meta-info">
              北京时间 18:32:54
              <span class="pull-right"> 猫眼专业版实时票房数据 </span>
            </p>
          </div>
        </div>
        <div class="billboard">
          <div class="billboard-header">
            <h2 class="billboard-title">最受期待</h2>
            <span>
              <router-link to="" class="billboard-more">
                <span>查看完整榜单</span>
              </router-link>
              <span class="iconfont icon-Right"></span>
            </span>
          </div>
          <div class="panel-content">
            <ul class="ranking-list">
              <li class="ranking-item ranking-top-one aside-hover">
                <div class="img-left">
                  <img src="@/assets/images/qianren.jpg" alt="" />
                  <i></i>
                </div>
                <div class="movie-info-right">
                  <h2>前任4: 英年早婚</h2>
                  <p>上映时间: 2023</p>
                  <span>522606人想看</span>
                </div>
              </li>
              <li class="ranking-item ranking-index-2 aside-hover">
                <img src="@/assets/images/heibao.jpg" alt="" />
                <i>2</i>
                <h2>黑豹2</h2>
                <span>272189人想看</span>
              </li>
              <li class="ranking-item ranking-index-2 rk-index-3 aside-hover">
                <img src="@/assets/images/yiren.jpeg" alt="" />
                <i>3</i>
                <h2>蚁人与黄蜂女：量子狂潮</h2>
                <span>123189人想看</span>
              </li>
              <li class="ranking-item aside-hover">
                <router-link to="" class="text-d-none">
                  <div class="ranking-item-index">
                    <i class="ranking-index">4</i>
                    <span class="ranking-movie-name movie-text-detail"
                      >中国乒乓之绝地反击</span
                    >
                    <span class="ranking-num-info textcolor-yellow"
                      >1234434人想看</span
                    >
                  </div>
                </router-link>
              </li>
              <li class="ranking-item aside-hover">
                <router-link to="" class="text-d-none">
                  <div class="ranking-item-index">
                    <i class="ranking-index">5</i>
                    <span class="ranking-movie-name movie-text-detail"
                      >风再起时</span
                    >
                    <span class="ranking-num-info textcolor-yellow"
                      >2134434人想看</span
                    >
                  </div>
                </router-link>
              </li>
              <li class="ranking-item aside-hover">
                <router-link to="" class="text-d-none">
                  <div class="ranking-item-index">
                    <i class="ranking-index">6</i>
                    <span class="ranking-movie-name movie-text-detail"
                      >长空之王</span
                    >
                    <span class="ranking-num-info textcolor-yellow"
                      >2134434人想看</span
                    >
                  </div>
                </router-link>
              </li>
              <li class="ranking-item aside-hover">
                <router-link to="" class="text-d-none">
                  <div class="ranking-item-index">
                    <i class="ranking-index">7</i>
                    <span class="ranking-movie-name movie-text-detail"
                      >人生路不熟</span
                    >
                    <span class="ranking-num-info textcolor-yellow"
                      >2334434人想看</span
                    >
                  </div>
                </router-link>
              </li>
              <li class="ranking-item aside-hover">
                <router-link to="" class="text-d-none">
                  <div class="ranking-item-index">
                    <i class="ranking-index">8</i>
                    <span class="ranking-movie-name movie-text-detail"
                      >回廊亭</span
                    >
                    <span class="ranking-num-info textcolor-yellow"
                      >15434434人想看</span
                    >
                  </div>
                </router-link>
              </li>
              <li class="ranking-item aside-hover">
                <router-link to="" class="text-d-none">
                  <div class="ranking-item-index">
                    <i class="ranking-index">9</i>
                    <span class="ranking-movie-name movie-text-detail"
                      >巨齿鲨2：深渊</span
                    >
                    <span class="ranking-num-info textcolor-yellow"
                      >2234434人想看</span
                    >
                  </div>
                </router-link>
              </li>
              <li class="ranking-item aside-hover">
                <router-link to="" class="text-d-none">
                  <div class="ranking-item-index">
                    <i class="ranking-index">10</i>
                    <span class="ranking-movie-name movie-text-detail"
                      >不能流泪的悲伤</span
                    >
                    <span class="ranking-num-info textcolor-yellow"
                      >1434434人想看</span
                    >
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="ranking-wrapper mt-100">
          <div class="billboard-header">
            <h2 class="billboard-title">TOP 100</h2>
            <span>
              <router-link to="" class="billboard-more">
                <span>查看完整榜单</span>
              </router-link>
              <span class="iconfont icon-Right"></span>
            </span>
          </div>
          <div class="ranking-cotent">
            <ul class="ranking-list">
              <li class="ranking-item ranking-top aside-hover">
                <div class="ranking-top-left">
                  <img src="@/assets/images/yaoshen.jpg" alt="" />
                  <i class="ranking-top-icon start"></i>
                </div>
                <div class="ranking-top-right">
                  <div class="ranking-t-r-main">
                    <span>我不是药神</span>
                    <p class="textcolor-yellow">9.6分</p>
                  </div>
                </div>
              </li>
              <li class="ranking-item aside-hover">
                <router-link to="" class="text-d-none">
                  <div class="ranking-item-index">
                    <i textcolor-yellow>2</i>
                    <span class="ranking-movie-name movie-text-detail"
                      >肖申克的救赎</span
                    >
                    <span class="ranking-num-info textcolor-yellow">9.5分</span>
                  </div>
                </router-link>
              </li>
              <li class="ranking-item aside-hover">
                <router-link to="" class="text-d-none">
                  <div class="ranking-item-index">
                    <i>3</i>
                    <span class="ranking-movie-name movie-text-detail"
                      >海上钢琴师</span
                    >
                    <span class="ranking-num-info textcolor-yellow">9.5分</span>
                  </div>
                </router-link>
              </li>
              <li class="ranking-item aside-hover">
                <router-link to="" class="text-d-none">
                  <div class="ranking-item-index">
                    <i class="ranking-index">4</i>
                    <span class="ranking-movie-name movie-text-detail"
                      >绿皮书</span
                    >
                    <span class="ranking-num-info textcolor-yellow">9.5分</span>
                  </div>
                </router-link>
              </li>
              <li class="ranking-item aside-hover">
                <router-link to="" class="text-d-none">
                  <div class="ranking-item-index textcolor-red">
                    <i class="ranking-index">5</i>
                    <span class="ranking-movie-name movie-text-detail"
                      >霸王别姬</span
                    >
                    <span class="ranking-num-info textcolor-yellow">9.5分</span>
                  </div>
                </router-link>
              </li>
              <li class="ranking-item aside-hover">
                <router-link to="" class="text-d-none">
                  <div class="ranking-item-index textcolor-red">
                    <i class="ranking-index">6</i>
                    <span class="ranking-movie-name movie-text-detail"
                      >美丽人生</span
                    >
                    <span class="ranking-num-info textcolor-yellow">9.5分</span>
                  </div>
                </router-link>
              </li>
              <li class="ranking-item aside-hover">
                <router-link to="" class="text-d-none">
                  <div class="ranking-item-index textcolor-red">
                    <i class="ranking-index">7</i>
                    <span class="ranking-movie-name movie-text-detail"
                      >小偷家族</span
                    >
                    <span class="ranking-num-info textcolor-yellow">9.5分</span>
                  </div>
                </router-link>
              </li>
              <li class="ranking-item aside-hover">
                <router-link to="" class="text-d-none">
                  <div class="ranking-item-index textcolor-red">
                    <i class="ranking-index">8</i>
                    <span class="ranking-movie-name movie-text-detail"
                      >这个杀手不太冷</span
                    >
                    <span class="ranking-num-info textcolor-yellow">9.5分</span>
                  </div>
                </router-link>
              </li>
              <li class="ranking-item aside-hover">
                <router-link to="" class="text-d-none">
                  <div class="ranking-item-index textcolor-red">
                    <i class="ranking-index">9</i>
                    <span class="ranking-movie-name movie-text-detail"
                      >哪吒之魔童降世</span
                    >
                    <span class="ranking-num-info textcolor-yellow">9.5分</span>
                  </div>
                </router-link>
              </li>
              <li class="ranking-item aside-hover">
                <router-link to="" class="text-d-none">
                  <div class="ranking-item-index textcolor-red">
                    <i class="ranking-index">10</i>
                    <span class="ranking-movie-name movie-text-detail"
                      >怦然心动</span
                    >
                    <span class="ranking-num-info textcolor-yellow">9.5分</span>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Home",
};
</script>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { getHotMoviesListApi, getComingListApi ,getTopRatedMoviesApi} from "@/api/home";
import { IMovieList, IComingMovieList , ITopMovieList} from "@/api/home/model/homeModel";
import { useCityStore } from "@/stores/useCity";
import { useRouter } from "vue-router";
const router = useRouter()

const goSale = (content : string , id : number) => {
  if(content === '预售') {
    router.push({
      name:'cinemas',
      query:{
        id
      }
    })
  }
}

const cityStore = useCityStore();

const hotMovieList = ref<IMovieList>([]);
const hotTotal = ref(0);

const comingMovieList = ref<IComingMovieList>([]);
const comingTotal = ref(0);

const topMovieList = ref<ITopMovieList>([])

onMounted(async () => {
  const res = await getHotMoviesListApi();
  hotTotal.value = res.total;
  hotMovieList.value = res.movieList.slice(0, 8);
});
onMounted(async () => {
  const res = await getComingListApi(cityStore.currentCity.id, 8);
  comingMovieList.value = res.coming;
  comingTotal.value = res.movieIds.length;
});
onMounted(async () => {
  const res  = await getTopRatedMoviesApi()
  // console.log(res);
  topMovieList.value = res.movieList.slice(6,12)
  
})
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  min-width: 1200px;
  margin-top: 80px;
  overflow: hidden;
}
.content {
  width: 1200px;
  margin: 62px auto 0;
  display: flex;
  justify-content: space-between;
}
.mian {
  width: 800px;
  padding: 0 18px;
}
.aside {
  width: 360px;
}
// 主体内容
.panel {
  margin-bottom: 62px;
  width: 750px;
}
.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: @primary-color;
  & > span {
    flex: 1;
    text-align: right;
    margin-right: 5px;
  }
}
.panel-movies-link {
  font-size: 14px;
  .panel-m-l-item {
    color: #333;
    margin-left: 15px;
    &:hover {
      color: #333;
    }
  }
}
.panel-title {
  font-size: 26px;
  font-weight: normal;
}
.panel-more {
  font-size: 14px;
  color: @primary-color;
  // line-height: 34px;
}
.panel-content {
  margin-top: 23px;
}
.movie-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 760px;
  margin: -29px 0 20px -25px;
  li {
    margin: 30px 0 0 30px;
  }
}
.movie-item {
  position: relative;
  width: 160px;
  &:hover {
    box-shadow: 2px 2px 10px #ddd;
  }
}
.movie-ver {
  position: absolute;
  left: -2px;
  top: 5px;
  i {
    display: block;
  }
}
.imx2d {
  width: 69px;
  height: 25px;
  background-image: url("@/assets/images/2D.png");
}
.movie-detail {
  width: 160px;
  height: 220px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
}
.textcolor-yellow {
  color: #ffb400 !important;
}
.movie-overlay-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: url("@/assets/images/moviebg.png") no-repeat bottom;
}
.movie-info {
  position: absolute;
  bottom: 10px;
  display: flex;
  justify-content: space-evenly;
  font-size: 16px;
  color: #fff;
}
.movie-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 22px;
  margin-left: 10px;
  width: 115px;
}
.movie-text-detail {
  height: 34px;
  line-height: 34px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #333;
}
.movie-score {
  color: #ffb400;
  i {
    font-style: italic;
  }
}
.integer {
  font-size: 18px;
}
.fraction {
  font-size: 15px;
}
.movie-sale {
  width: 160px;
  height: 39px;
  border: 1px solid #eee;
  border-top: none;
  box-sizing: border-box;
  text-align: center;
  line-height: 39px;
  font-size: 14px;
  .sale-link {
    color: @primary-color;
  }
  &:hover {
    background-color: @primary-color;
    border-color: @primary-color;
    .sale-link {
      color: #fff;
      text-decoration: none;
    }
  }
}
.textcolor-blue {
  color: #2d98f3 !important;
}
.textcolor-red {
  color: @primary-color !important;
}
.movie-wish {
  color: #ffb400;
  padding-left: 10px;
  height: 34px;
  font-size: 14px;
  background-color: #fbfbfb;
  text-align: left;
  border-left: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
}
.movie-presale {
  width: 160px;
  display: flex;
  height: 39px;
  text-align: center;
  line-height: 39px;
  font-size: 14px;
  color: #999;
  border: 1px solid #e5e5e5;
  border-top: none;
  box-sizing: border-box;
}
.movie-presale-sep {
  border-right: 1px dotted #e5e5e5;
  width: 50%;
  height: 100%;
}
.movie-presale-dtl {
  width: 50%;
  height: 100%;
}
.sale-hover {
  color: #2d98f3;
  cursor: pointer;
  &:hover {
    background-color: #2d98f3;
    color: #fff;
  }
}
.movie-rt {
  font-size: 14px;
  color: #999;
}
.movie-reying-list {
  li {
    &:first-child {
      width: 350px !important;
      img {
        width:350px !important;
      }
    }
  }
}

// 侧边
.ranking-title {
  h2 {
    font-size: 26px;
    font-weight: normal;
  }
}
.ranking-cotent {
  margin-top: 23px;
  width: 360px;
}
.ranking-item {
  width: 100%;
  height: 55px;
}
.ranking-top {
  display: flex;
  width: 100%;
  margin-bottom: 11px;
  height: 78px;
}
.ranking-top-left {
  width: 120px;
  height: 78px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
}
.ranking-top-icon {
  position: absolute;
  left: 0;
  top: 0;
  background: url("@/assets/images/top-icon.png");
  width: 22px;
  height: 25px;
}
.start {
  background: url("@/assets/images/start.png");
}
.ranking-top-right {
  padding-left: 10px;
  width: 230px;
  height: 77px;
  border: 1px solid #e5e5e5;
  border-left: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.ranking-t-r-main {
  span {
    font-size: 18px;
    color: #333;
  }
  p {
    font-size: 14px;
    margin-top: 12px;
  }
}
.aside-hover:hover {
  background-color: #f7f7f7;
}
.ranking-item-index {
  width: 100%;
  height: 55px;
  padding: 10px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  i {
    margin-right: 20px;
    font-style: italic;
    font-size: 18px;
    color: @primary-color;
  }
  .ranking-index {
    color: #999;
  }
}
.ranking-movie-name {
  flex: 1;
  text-align: left;
}
.text-d-none:hover {
  text-decoration: none;
}
.box-total-wrapper {
  display: flex;
  margin-top: 29px;
  padding-right: 15px;
  border: 1px solid #e5e5e5;
  h2 {
    width: 20px;
    height: 83px;
    padding: 10px;
    background-color: @primary-color;
    color: #fff;
    font-weight: normal;
  }
  & > div {
    margin-left: 10px;
    padding-top: 20px;
    width: 290px;
    font-size: 14px;
    .num {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      color: @primary-color;
      & > span {
        font-size: 30px;
        font-weight: 700;
        & > span {
          font-size: 14px;
          font-weight: normal;
        }
      }
    }
    .meta-info {
      color: #999;
      margin-top: 6px;
      span {
        margin-left: 10px;
      }
    }
  }
}
.mt-100 {
  margin-top: 100px;
}
.billboard {
  width: 360px;
  margin-top: 60px;
}
.billboard-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: #ffb400;
  .billboard-title {
    font-size: 26px;
    font-weight: normal;
  }
  .billboard-more {
    color: #ffb400;
    font-size: 14px;
  }
}
.ranking-top-one {
  width: 360px;
  height: 194px;
  display: flex;
  .img-left {
    width: 140px;
    height: 194px;
    position: relative;
    i {
      position: absolute;
      left: 0;
      top: 0;
      display: block;
      width: 20px;
      height: 20px;
      background: url("@/assets/images/hot.png");
    }
  }
  .movie-info-right {
    width: 220px;
    height: 194px;
    padding-left: 10px;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    h2 {
      font-size: 18px;
      font-weight: normal;
      margin-top: 50px;
    }
    p {
      margin-top: 12px;
      font-size: 16px;
    }
    span {
      display: block;
      color: #ffb400;
      font-size: 14px;
      margin-top: 12px;
    }
  }
}
.ranking-index-2 {
  margin: 20px 0;
  height: 176px;
  width: 170px;
  display: inline-block;
  padding-bottom: 8px;
  position: relative;
  border: 1px solid #e5e5e5;
  margin-right: 16px;
  i {
    display: block;
    width: 20px;
    height: 20px;
    background-color: #ffb400;
    color: #fff;
    font-size: 16px;
    position: absolute;
    left: 0;
    top: 0;
    text-align: center;
    line-height: 20px;
    font-style: italic;
  }
  h2 {
    margin: 8px 0 0 10px;
    font-size: 18px;
    font-weight: normal;
    width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  span {
    display: block;
    font-size: 14px;
    color: #ffb400;
    margin: 6px 0 0 10px;
  }
}
.rk-index-3 {
  margin-right: 0;
}
</style>
