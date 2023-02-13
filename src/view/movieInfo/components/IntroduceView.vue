<template>
  <div class="tab_desc">
    <div class="module">
      <div class="mod_title">
        <h2>剧情简介</h2>
      </div>
      <div class="mod_content">
        <span class="dra">
          {{ data.dra }}
        </span>
      </div>
    </div>
  </div>
  <div class="module">
    <div class="mod_title">
      <h2>演职人员</h2>
      <a href="#" class="more" @click="goActor">全部</a>
    </div>
    <div class="mod_content">
      <div class="celebrity_container">
        <div class="celebrity_group">
          <div class="celebrity_type">导演</div>
          <ul class="celebrity_list">
            <li class="celebrity">
              <a href="#">
                <img :src="imgSrc" alt="">
              </a>
              <div class="info">
                <a href="" class="name">{{ directorName }} </a>
              </div>
            </li>
          </ul>
        </div>
        <div class="celebrity_group" style="margin-left: 30px;">
          <div class="celebrity_type">演员</div>
          <ul class="celebrity_list">
            <li class="celebrity" v-for="item in actorInfo">
              <a href="#">
                <img :src="item.avatar" alt="">
              </a>
              <div class="info">
                <a href="" class="name">{{ item.cnm }} </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
  <div class="module">
    <div class="mod_title">
      <h2>图集 </h2>
    </div>
    <a href="" class="more">全部</a>
  </div>
  <div class="mod_content">
    <div class="album">
      <div class="img1">
        <img :src="photos[0]" alt="" class="default_img">
      </div>
      <div class="img2" v-for="item in photos">
        <img :src="item" alt="" class="default_img">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "IntroduceView"
}
</script>
<script lang="ts" setup>
import { onMounted, ref, reactive } from 'vue';
import { getMovieActorApi, getMovieInfoApi } from "@/api/movieinfo/movieinfo"
import { CelebritiesList, movie } from "@/api/movieinfo/model/movieinfoModel"
import router from '@/router';


const props = defineProps(["data", "id"])
const data = props.data;
const id = props.id;
const imgSrc = ref("")
const directorName = ref("")
const actorInfo = ref<any>([])
const movieInfo = reactive<movie>({
  cat: "",
  dir: "",
  dra: "",
  dur: 0,
  enm: "",
  filmAlias: "",
  fra: "",
  id: 0,
  imdbScore: 0,
  img: "",
  nm: "",
  oriLang: "",
  sc: 0,
  snum: 0,
  pubDesc: '',
  sumBox: 0,
  src: "",
})
const photos = ref<any>([])

onMounted(() => {
  getMovieActorList(id as any)
  getMovieInfo(id as any)
})
const actorList = ref<CelebritiesList>([])
const directorList = ref<any>([])

const getMovieActorList = async (id: number) => {
  const res = await getMovieActorApi(id)
  actorList.value = res.celebrities
  directorList.value = actorList.value.filter(item => item.cr === 2)
  actorList.value = actorList.value.filter(item => item.cr === 1)
  imgSrc.value = directorList.value[0].avatar
  directorName.value = directorList.value[0].cnm
  for (let count = 0; count <= 3; count++) {
    for (let j = 0; j <= count; j++) {
      actorInfo.value[count] = actorList.value[count]
    }
  }

}
const goActor = () => {
  router.push({
    path: '/movieinfo/actor',
    query: {
      id: props.id
    }
  })
}

const getMovieInfo = async (id: number) => {
  const res = await getMovieInfoApi(id);
  movieInfo.cat = res.movie.cat;
  movieInfo.dir = res.movie.dir;
  movieInfo.dra = res.movie.dra;
  movieInfo.dur = res.movie.dur;
  movieInfo.enm = res.movie.enm;
  movieInfo.filmAlias = res.movie.filmAlias;
  movieInfo.fra = res.movie.fra;
  movieInfo.id = res.movie.id;
  movieInfo.imdbScore = res.movie.imdbScore;
  movieInfo.img = res.movie.img;
  movieInfo.nm = res.movie.nm;
  movieInfo.oriLang = res.movie.oriLang;
  movieInfo.snum = res.movie.snum;
  movieInfo.sc = res.movie.sc;
  movieInfo.pubDesc = res.movie.pubDesc;
  movieInfo.sumBox = res.mbox.mbox.sumBox;
  movieInfo.src = res.movie.src;
}


</script>

<style scoped>
.album>div img {
  cursor: pointer;
}

.img1 {
  width: 465px;
  height: 258px;
}

.album>div {
  float: left;
  width: 126px;
  height: 126px;
  overflow: hidden;
}

.album {
  color: #333;
}

.celebrity_actor {
  float: left;
  width: 128px;
  margin-left: 20px;
  margin-bottom: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.name {
  margin-top: 8px;
  line-height: 1.2;
  color: #333;
  display: inline-block;
  width: 128px;
  text-align: center;
  padding-bottom: 1px;
  margin-bottom: -1px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.celebrity img {
  width: 128px;
  height: 170px;
}

.celebrity_type {
  margin-bottom: 16px;
}

.celebrity {
  margin-bottom: 0;
  float: left;
  width: 128px;
  margin-left: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.celebrity_list {
  margin: 0;
  padding-left: 0;
  margin-left: -20px;

}

.celebrity_group {
  float: left;
  margin-left: 0;
}

.celebrity_container {
  font-size: 16px;
  color: #333;
}

.mod_title {
  width: 730px;
}

a:hover {
  text-decoration: none;
  color: #999 !important;
}

.more {
  float: right;
  cursor: pointer;
  display: flex;
  justify-content: center;
  color: #999;
  font-size: 14px;
  padding-right: 18px;
  align-items: center;
  background: url("@/assets/picture/download.png") no-repeat 100%;
}

.dra {
  font-size: 14px;
  line-height: 26px;
}

.mod_content {
  margin-top: 20px;
}

.mod_title h2 {
  display: inline-block;
  width: 600px !important;
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 18px;
  color: #333;
  line-height: 18px;
  display: inline-block;
  width: 730px;
  height: 18px;
  margin-right: 6px;
  border-left: 4px solid #ef4238;
  padding-left: 10px;
}

.tab_desc {
  margin-top: 40px;
}

.module {
  position: relative;
  margin-bottom: 60px;

}
</style>