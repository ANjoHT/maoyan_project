<template>
  <div class="subnav">
    <ul class="navbar">
      <li v-for="(item, index) in list" :key="index">
        <a @click="handle(index)" :class="[flag === index ? 'red' : '']">{{
          item.name
        }}</a>
      </li>
    </ul>
  </div>
  <div class="container">
    <div class="movies-channel">
      <div class="tags-panel">
        <ul class="tags-lines">
          <li class="tags-line tags-line-border">
            <div class="tags-title">类型:</div>
            <ul class="tags">
              <li
                v-for="(item, index) in typelist"
                :key="index"
                @click="handleclick1(index)"
                :class="num1 === index ? 'active' : ''"
              >
                <a>{{ item.name }}</a>
              </li>
            </ul>
          </li>
          <li class="tags-line tags-line-border">
            <div class="tags-title">区域 :</div>
            <ul class="tags">
              <li
                v-for="(region, index) in regionlist"
                @click="handleclick2(index)"
                :key="index"
                :class="[num2 === index ? 'active' : '']"
              >
                <a>{{ region.name }}</a>
              </li>
            </ul>
          </li>
          <li class="tags-line">
            <div class="tags-title">年代 :</div>
            <ul class="tags">
              <li
                v-for="(year, index) in yearslist"
                :key="index"
                @click="handleclick3(index)"
                :class="[num3 === index ? 'active' : '']"
              >
                <a>{{ year.name }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="movies-panel">
        <div class="movies-sorter">
          <div class="cat-sorter">
            <ul>
              <li v-for="(sort, index) in sortlist" :key="index">
                <span class="sort" @click="handlesort(index)">
                  <span
                    class="sort-control sort-radio"
                    :class="sortindex === index ? 'sort-active' : ''"
                  ></span>
                  <span>{{ sort.name }}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="movies-list">
          <dl class="movie-list">
            <dd v-for="film in filmlist" v-show="flag === 0">
              <a @click="movie(film.id)" class="box">
                <div>
                  <img :src="film.img" alt="" class="img" />
                </div>
                <div class="versionbox">
                  <i>{{ film.version }}</i>
                </div>
                <div class="shopbox">
                  <i>{{ film.showStateButton.content }}</i>
                </div>
                <div class="text name">{{ film.nm }}</div>
              </a>
              <div class="text score">{{ film.sc }}</div>
            </dd>
            <dd v-for="film in cominglist" v-show="flag === 1">
              <a @click="movie(film.id)" class="box">
                <div>
                  <img :src="film.img" alt="" class="img" />
                </div>
                <div class="versionbox">
                  <i>{{ film.version }}</i>
                </div>
                <div class="text name">{{ film.nm }}</div>
              </a>
              <div class="text score">{{ film.sc }}</div>
            </dd>
            <dd v-for="film in moreclassiclist" v-show="flag === 2">
              <a @click="movie(film.id)" class="box">
                <div>
                  <img :src="film.img" alt="" class="img" />
                </div>
                <div class="versionbox">
                  <i>{{ film.version }}</i>
                </div>
                <div class="shopbox">
                  <i>{{ film.showStateButton.content }}</i>
                </div>
                <div class="text name">{{ film.nm }}</div>
              </a>
              <div class="text score">{{ film.sc }}</div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
  <pagination :total="50" :currentPage="1" :pageSize="10"></pagination>
</template>

<script lang="ts">
export default {
  name: 'film',
}
</script>

<script lang="ts" setup>
import {
  getFilmList,
  getComingList,
  getMoreClassicList,
} from '../../api/film/film'
import { onMounted, ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import pagination from '../../components/Pagination/index.vue'

// 点击分页器跳转

// 跳转到影片详情
const router = useRouter()
const movie = (id: any) => {
  router.push({
    name: 'movieInfo',
    query: {
      id,
    },
  })
}
const sortindex = ref(0)
const num1 = ref(0)
const num2 = ref(0)
const num3 = ref(0)
const flag = ref(0)
const list = reactive([
  {
    name: '正在上映',
  },
  {
    name: '即将上映',
  },
  {
    name: '经典电影',
  },
])
const typelist = reactive([
  {
    name: '全部',
  },
  {
    name: '爱情',
  },
  {
    name: '喜剧',
  },
  {
    name: '动画',
  },
  {
    name: '剧情',
  },
  {
    name: '恐怖',
  },
  {
    name: '惊悚',
  },
  {
    name: '科幻',
  },
  {
    name: '动作',
  },
  {
    name: '悬疑',
  },
  {
    name: '犯罪',
  },
  {
    name: '冒险',
  },
  {
    name: '战争',
  },
  {
    name: '奇幻',
  },
  {
    name: '运动',
  },
  {
    name: '家庭',
  },
  {
    name: '古装',
  },
  {
    name: '武侠',
  },
  {
    name: '西部',
  },
  {
    name: '历史',
  },
  {
    name: '传记',
  },
  {
    name: '歌舞',
  },
  {
    name: '黑色电影',
  },
  {
    name: '短片',
  },
  {
    name: '纪录片',
  },
  {
    name: '戏曲',
  },
  {
    name: '音乐',
  },
  {
    name: '灾难',
  },
  {
    name: '青春',
  },
  {
    name: '儿童',
  },
  {
    name: '其他',
  },
])
const regionlist = reactive([
  {
    name: '全部',
  },
  {
    name: '大陆',
  },
  {
    name: '美国',
  },
  {
    name: '韩国',
  },
  {
    name: '日本',
  },
  {
    name: '中国香港',
  },
  {
    name: '中国台湾',
  },
  {
    name: '泰国',
  },
  {
    name: '印度',
  },
  {
    name: '法国',
  },
  {
    name: '英国',
  },
  {
    name: '俄罗斯',
  },
  {
    name: '战争',
  },
  {
    name: '意大利',
  },
  {
    name: '西班牙',
  },
  {
    name: '德国',
  },
  {
    name: '波兰',
  },
  {
    name: '澳大利亚',
  },
  {
    name: '伊朗',
  },
  {
    name: '其他',
  },
])
const yearslist = reactive([
  {
    name: '全部',
  },
  {
    name: '2023',
  },
  {
    name: '2022',
  },
  {
    name: '2021',
  },
  {
    name: '2020',
  },
  {
    name: '2019',
  },
  {
    name: '2018',
  },
  {
    name: '2017',
  },
  {
    name: '2016',
  },
  {
    name: '2015',
  },
  {
    name: '2014',
  },
  {
    name: '2013',
  },
  {
    name: '2012',
  },
  {
    name: '2011',
  },
  {
    name: '2000-2010',
  },
  {
    name: '90年代',
  },
  {
    name: '80年代',
  },
  {
    name: '70年代',
  },
  {
    name: '更早',
  },
])
const sortlist = reactive([
  {
    name: '按热门排序',
  },
  {
    name: '按时间排序',
  },
  {
    name: '按评价排序',
  },
])
const filmlist = ref<any>([])
const cominglist = ref<any>([])
const moreclassiclist = ref<any>([])
onMounted(async () => {
  const res = await getFilmList()
  // console.log(res)
  filmlist.value = res.movieList
  console.log(filmlist.value)
})
const handle = async (index: number) => {
  flag.value = index
  if (index === 0) {
    console.log(1)
  } else if (index === 1) {
    const res = await getComingList('1', 12)
    cominglist.value = res.coming
    console.log(res)
  } else if (index == 2) {
    const res = await getMoreClassicList(0)
    // console.log(res)
    moreclassiclist.value = res.movieList
  }
}
const handleclick1 = (index: number) => {
  num1.value = index
}
const handleclick2 = (index: number) => {
  num2.value = index
}
const handleclick3 = (index: number) => {
  num3.value = index
}
const handlesort = (index: number) => {
  sortindex.value = index
}
</script>

<style scoped>
.subnav {
  background-color: #47464a;
  height: 60px;
  width: 100%;
  min-width: 1200px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
}

.subnav .navbar li {
  float: left;
}
.subnav .navbar li a {
  color: #999;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
  height: 60px;
  display: block;
  line-height: 60px;
  /* text-align: center; */
  /* width: 144px; */
  padding: 0 40px;
}
/* .red {
  color: red !important; */
/* height: 60px !important; */
/* } */
.subnav .navbar li .red {
  color: red !important;
  position: relative;
}
.subnav .navbar li .red:before {
  content: '';
  position: absolute;
  border-bottom: 10px solid #fff;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  left: 60px;
  bottom: 0px;
}
.subnav .navbar li a:hover {
  color: #e5e5e5;
}

.container {
  width: 1200px;
  margin: 0 auto;
}
.movies-channel {
  margin: auto;
  width: 1120px;
}
.tags-panel {
  padding: 0 20px;
  border: 1px solid #e5e5e5;
  margin-top: 40px;
}

.tags-title {
  float: left;
  height: 24px;
  line-height: 24px;
  font-size: 14px;
  color: #999;
}
.tags {
  margin-left: 40px !important;
  margin-top: 10px;
  margin-bottom: 10px;
}
/* .tags-line {
  padding: 10 0px;
} */
.tags-line-border {
  border-bottom: 1px solid #e5e5e5;
}
.tags li {
  display: inline-block;
  padding: 3px 10px;
  margin-left: 12px;
}
.tags .active {
  background-color: #f34d41;
  border-radius: 14px;
}
.tags .active a {
  color: #fff !important;
}
.tags li a {
  font-size: 14px;
  font-weight: 400;
  color: #333;
  cursor: pointer;
}
.tags li a:hover {
  color: #f34d41;
}
.cat-sorter ul {
  display: flex;
}
.cat-sorter ul li {
  margin: 30px 10px 20px 10px;
}
.movies-list {
  width: 1200px;
  display: inline-block;
}
.movie-list {
  width: 1120px;
  margin-left: 10px;
  display: inline-block;
}

.movie-list dd {
  /* display: flex; */
  float: left;
}
.movie-list dd .box {
  position: relative;
}
.img {
  width: 160px;
  height: 220px;
  /* float: left; */
  cursor: pointer;
  margin: 10px;
  position: relative;
}
.img:hover {
  /* width: 200px;
  height: 250px; */
  transform: scale(1.2, 1.2);
  position: relative;
  vertical-align: left;
  z-index: 10;
}
.versionbox {
  width: 69px;
  height: 25px;
  background-color: #0084ff;
  position: absolute;
  top: 12px;
  left: 4px;
}
.versionbox i {
  display: block;
  color: #fff;
  text-align: center;
  line-height: 25px;
}
.shopbox {
  background-color: #f34d41;
  width: 30px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  position: absolute;
  bottom: 33px;
  right: 14px;
}
.shopbox i {
  color: #0084ff;
}
.text {
  text-align: center;
}
.name {
  font-size: 14px;
  cursor: pointer;
}
.score {
  font-size: 20px;
  color: #ffb400;
  margin-top: 10px;
  margin-bottom: 20px;
}
.sort {
  cursor: pointer;
  line-height: 16px;
}
.sort-radio {
  background: url(@/assets/circular-images/circular.png);
}
.sort-control {
  width: 16px;
  height: 16px;
  display: inline-block;
  margin-right: 3px;
  vertical-align: top;
}
.sort-active {
  background: url(@/assets/circular-images/circular-red.png);
}
</style>