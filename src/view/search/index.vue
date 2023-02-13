<template>
  <div class="search-container">
    <div class="search-box">
      <form class="search">
        <input
          type="text"
          placeholder="找影视剧、影人、影院"
          class="search-inp"
          v-model="kw"
        />
        <button class="search_btn" @click.prevent.enter="search">
          <span class="iconfont icon-search"></span>
        </button>
      </form>
    </div>
    <div class="subnav">
      <ul class="navbar">
        <li :class="{ active: type === 0 }" @click="swichType(0)">
          影视剧 ({{ moviesTotal }})
        </li>
        <li :class="{ active: type === 1 }" @click="swichType(1)">影人 (0)</li>
        <li :class="{ active: type === 2 }" @click="swichType(2)">
          影院 ({{ cinemasTotal }})
        </li>
      </ul>
    </div>
    <div class="search-result-box">
      <div class="empty-list" v-if="empty">
        <h3>很抱歉，没找到相关的内容</h3>
        <ul>
          <li>小喵建议您：</li>
          <li>1. 请检查输入的关键词是否有误</li>
          <li>2. 请缩短关键词</li>
        </ul>
      </div>
      <ul class="movie-list" v-if="type === 0 && moviesTotal !== 0">
        <li v-for="movie in moviesList" :key="movie.id">
          <div class="img-left">
            <img :src="movie.poster" alt="" @click="goMovieInfo(movie.id)"/>
          </div>
          <div class="info-right">
            <h2>{{ movie.name }}</h2>
            <div class="en-title">{{ movie.ename }}</div>
            <div v-if="movie.score">
              <span>{{ movie.score }}</span>
            </div>
            <div v-else-if="movie.wish">
              <span>{{ movie.wish }}</span
              >人想看
            </div>
            <div v-else><span>暂无评分</span></div>
            <p>{{ movie.catogary }}</p>
            <p>{{ movie.release }}</p>
          </div>
        </li>
      </ul>
      <ul class="cinema-list" v-else-if="type === 2 && cinemasTotal !== 0">
        <li v-for="cinema in cinemasList" :key="cinema.id">
          <div class="cinema-info">
            <h2 @click="goCinema(cinema.id)">{{ cinema.info.name }}</h2>
            <p>
              {{ cinema.info.address }}
            </p>
            <div class="item-detail-icons">
              <i
                class="icon-zuo"
                :class="{ 'icon-chi': tag === '小吃' }"
                v-for="(tag, index) in cinema.info.tags"
                :key="index"
                >{{ tag }}</i
              >
              <!-- <i class="icon-chi">小吃</i> -->
            </div>
          </div>
          <div class="cinema-price">
            <span>{{ cinema.info.price }}</span
            >元起
          </div>
        </li>
      </ul>
      <Pagination v-if="moviesTotal !== 0 || cinemasTotal !== 0" class="pagination" :total="type === 0 ? moviesTotal : cinemasTotal" :current-page="page"></Pagination>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Search",
};
</script>

<script lang="ts" setup>
import { ref, onMounted, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import Pagination from "@/components/Pagination/index.vue";
import { getCinemasApi, getMoviesApi, getSuggestApi } from "@/api/search";
import { ICinemasList, IMoviesList } from "@/api/search/model/searchModel";
import { useCityStore } from "@/stores/useCity";
const cityStore = useCityStore();
const route = useRoute();
const router = useRouter()

const page = ref(1);

const goMovieInfo = (id:number) => {
  router.push({
    name:'movieInfo',
    query:{
      id
    }
  })
}
const goCinema = (id:number) => {
  router.push({
    name:'cinema',
    query:{
      id
    }
  })
}
/**
 * 0 : 电影
 * 1 : 影人
 * 2 : 影院
 */
const type = ref(0);

const empty = computed(() => {
  if (type.value === 0 && moviesTotal.value === 0) {
    return true;
  }
  if (type.value === 1) {
    return true;
  }
  if (type.value === 2 && cinemasTotal.value === 0) {
    return true;
  }
  return false;
});

const moviesTotal = ref(0);
const cinemasTotal = ref(0);

const moviesList = ref<IMoviesList>([]);
const cinemasList = ref<ICinemasList>([]);

const kw = ref(route.query.kw);

const getSuggest = async (kw: string, ci: number) => {
  const res = await getSuggestApi(kw, ci);
  moviesTotal.value = res.movies?.total || 0;
  cinemasTotal.value = res.cinemas?.total || 0;
};
// 请求影院列表
const getCinemas = async (kw: string, ci: number, page: number) => {
  cinemasList.value = await getCinemasApi(kw, ci, page);
  console.log(cinemasList.value);
};
// 请求电影列表
const getMovies = async (kw: string, ci: number, page: number) => {
  moviesList.value = await getMoviesApi(kw, ci, page);
  // console.log(moviesList.value)
};

const swichType = (tp: number) => {
  if (tp === type.value) return;
  type.value = tp;
  if (tp === 0) {
    getMovies(kw.value as string, cityStore.currentCity.id, page.value);
  }
  if (tp === 1) {
  }
  if (tp === 2) {
    getCinemas(kw.value as string, cityStore.currentCity.id, page.value);
  }
};
const search = () => {
  getSuggest(kw.value as string, cityStore.currentCity.id);

  route.query.kw = kw.value;

  if (type.value === 0) {
    getMovies(kw.value as string, cityStore.currentCity.id, page.value);
  }
  if (type.value === 2) {
    getCinemas(kw.value as string, cityStore.currentCity.id, page.value);
  }
};
onMounted(() => {
  getSuggest(kw.value as string, cityStore.currentCity.id);
  getMovies(kw.value as string, cityStore.currentCity.id, page.value);
});
watch(route, () => {
  kw.value = route.query.kw;
  getSuggest(kw.value as string, cityStore.currentCity.id);
  if (type.value === 0) {
    getMovies(kw.value as string, cityStore.currentCity.id, page.value);
  } 
  else if(type.value === 2) {
    getCinemas(kw.value as string, cityStore.currentCity.id, page.value)
  }
});
</script>

<style lang="less" scoped>
.search-container {
  margin-top: 80px;
}
.search-box {
  width: 100%;
  min-width: 1200px;
  background-color: #47464a;
}
.search {
  width: 630px;
  margin: 0 auto;
  padding-top: 38px;
  padding-bottom: 8px;
  position: relative;
}
.search-inp {
  width: 100%;
  padding: 15px 20px;
  border: 1px solid #999;
  border-radius: 50px;
  line-height: 18px;
  box-sizing: border-box;
  font-size: 14px;
  outline: none;
}
.search_btn {
  width: 15px;
  height: 25px;
  padding: 1px 6px;
  position: absolute;
  right: 0;
  cursor: pointer;
  border: none;
  background-color: #fff;
  top: 45px;
  right: 35px;
  .icon-search {
    color: @primary-color;
    font-size: 30px;
  }
}
.subnav {
  width: 100%;
  min-width: 1200px;
  background-color: #47464a;
}
.navbar {
  margin: 0 auto;
  width: 500px;
  height: 60px;
  color: #999;
  display: flex;
  font-size: 16px;
  li {
    line-height: 60px;
    padding: 0 40px;
    cursor: pointer;
    &:hover {
      color: #fff;
    }
  }
  .active {
    color: @primary-color;
    cursor: default;
    position: relative;
    &:hover {
      color: @primary-color;
    }
    &::before {
      content: "";
      position: absolute;
      width: 1px;
      border: 8px solid transparent;
      border-bottom-color: #fff;
      bottom: 1px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
.search-result-box {
  width: 950px;
  margin: auto;
}
.empty-list {
  padding: 0 20px;
  h3 {
    font-size: 26px;
    font-weight: normal;
    margin: 98px 0 26px;
    color: #999;
  }
  ul {
    margin: 27px 0 16px;
    font-size: 16px;
    li {
      margin-top: 10px;
      &:nth-child(1) {
        color: @primary-color;
      }
    }
  }
}
.movie-list {
  display: flex;
  flex-wrap: wrap;
  li {
    width: 460px;
    height: 220px;
    margin-top: 40px;
    display: flex;
    padding-left: 10px;
    .img-left {
      width: 160px;
      height: 220px;
      border: 1px solid #e5e5e5;
      margin-right: 20px;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .info-right {
      width: 280px;
      height: 100%;
      border-bottom: 1px solid #e5e5e5;
      h2 {
        font-size: 26px;
        margin-top: 27px;
        padding-bottom: 1px;
        margin-bottom: -1px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: normal;
      }
      .en-title {
        font-size: 14px;
        line-height: 18px;
        color: #999;
        margin-top: 3px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding-bottom: 1px;
        margin-bottom: -1px;
      }
      div {
        width: 160px;
        height: 31px;
        margin: 10px 0 13px;
        font-size: 16px;
        color: #ffb400;
        span {
          font-size: 26px;
        }
      }
      & > p {
        font-size: 16px;
        width: 100%;
        margin-top: 5px;
        padding-bottom: 1px;
      }
    }
  }
}
.cinema-list {
  width: 950px;
  padding: 0 20px;
  li {
    border-bottom: 1px solid #e5e5e5;
    margin-top: 29px;
    padding-bottom: 23px;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    align-items: center;
    h2 {
      font-size: 26px;
      font-weight: normal;
      cursor: pointer;
    }
    p {
      color: #999;
      margin-top: 14px;
      padding-bottom: 1px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
.item-detail-icons {
  height: 46px;
  display: flex;
  i {
    border-radius: 3px;
    display: inline-block;
    padding: 0 7px;
    box-sizing: border-box;
    height: 32px;
    margin-right: 7px;
    line-height: 32px;
    font-style: normal;
    margin-top: 12px;
  }
}
.icon-zuo {
  border: 1px solid #80b6c5;
  color: #76b0bf;
}
.icon-chi {
  background: #87c4f5;
  color: #eef6fd;
}
.cinema-price {
  font-size: 16px;
  color: #999;
  span {
    color: @primary-color;
    font-size: 26px;
  }
}
.pagination {
  margin-top: 80px;
}
</style>
