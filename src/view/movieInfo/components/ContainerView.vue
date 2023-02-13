<template>
  <div class="container">
    <div class="container_main">
      <div class="main_content">
        <div class="crumb_nav">
          <a href="">猫眼电影</a> >
          <a href="">电影</a> >
          <span>{{ data.nm }}</span>
        </div>
        <div class="tab_title_container">
          <div :class="[backShow === index ? 'tab_title_active' : 'tab_title']"
            v-for="(item, index) in tabTitle" :key="index"
            @click="activeHandle(index, item.tag as string)">
            {{
              item.title
            }}
          </div>
          <div class="tab_title_disable"> 奖项</div>
          <div class="tab_title_disable"> 图集</div>
        </div>
        <div class="tab_content-container">
          <RouterView :data="data" :id="id"></RouterView>
        </div>
      </div>
    </div>
    <div class="related">
      <div class="tab_related_info">
        <div class="tab_related_title">
          <div class="tab_title_active">
            预告片
          </div>
          <div class="tab_title_disable">
            相关资讯
          </div>
        </div>
        <div class="tab_content_container">
          <div class="tab_content">
            <div class="module">
              <div class="mod_title">
                <h2>预告片</h2>
              </div>
              <div class="mod_content">
                <div class="preview-container">
                  <ul>
                    <li class="top_lists" v-for="item, index in feedVideos" :key="index">
                      <div class="top_info_thumb">
                        <a :href="item.video.url">
                          <img :src="item.video.imgUrl" alt="">
                          <i class="top_info_icon">{{ index + 1 }}</i>
                          <i class="play_icon"></i>
                        </a>
                      </div>
                      <div class="top_video_info">
                        <p class="one_line">
                          <a :href="item.video.url">{{ item.title }}</a>
                        </p>
                        <div class="video_view">
                          <span class="video_play_count">
                            <span class="icon"></span>
                            {{ parseInt(Math.random() * 100000 as any) }}
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="module">
              <div class="mod_title">
                <h2>相关电影</h2>
              </div>
              <div class="mod_content">
                <div class="related-movies">
                  <dl class="movie-list">
                    <dd v-for="item in relatedMovies" class="movie_list_item">
                      <div class="movie_item">
                        <a href="" @click="goInfo(item.id)">
                          <div class="movie_poster">
                            <img :src="item.img" alt="">
                          </div>
                        </a>
                      </div>
                      <div class="movie_item_title">
                        <a href="" @click="goInfo(item.id)">{{ item.title }}</a>
                      </div>
                      <div class="movie_detail">
                        {{ item.sc ? item.sc : "暂无评分" }}
                      </div>
                    </dd>
                  </dl>
                </div>
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
  name: 'ContainerView'
}
</script>

<script lang="ts" setup>

import { onMounted, ref, reactive, watch } from "vue";
import { useRouter, useRoute } from 'vue-router';
import { FeedVideosList, relatedMoviesList } from "@/api/movieinfo/model/movieinfoModel"
import { getFeedVideosApi } from "@/api/movieinfo/movieinfo";


const router = useRouter()
const route = useRoute()

const props = defineProps(['data', 'id'])
const data = props.data;
const id = route.query.id;


const feedVideos = ref<FeedVideosList>([])
const relatedMovies = ref<relatedMoviesList>([])

onMounted(() => {
  router.replace(`/movieinfo?id=${id}`);
  getFeedVideos(id as any)
})

const getFeedVideos = async (id: number) => {
  const res = await getFeedVideosApi(id)
  feedVideos.value = res.feedVideos.feeds;
  feedVideos.value.splice(3, feedVideos.value.length - 1);
  relatedMovies.value = res.relatedMovies;

}
watch(() => route.path, (newPath) => {

  if (newPath.slice(11)) {
    activeHandle(1, newPath.slice(11))
  } return

}
)

const goInfo = (id: number) => {
  router.push({
    path: `/movieinfo`,
    query: {
      id: id
    }
  })
}

const activeHandle = (index: number, tag: string) => {
  backShow.value = index;
  if (tag === "introduce") {
    router.replace({
      path: `/movieinfo`,
      query: {
        id: route.query.id
      }
    },)
  } else {
    router.replace({
      path: `/movieinfo/${tag}`,
      query: {
        id: route.query.id
      }
    })
  }

}

const backShow = ref(0);

const tabTitle = reactive([
  {
    title: "介绍",
    tag: "introduce",

  },
  {
    title: "演职人员",
    tag: "actor",

  },
])
</script>

<style scoped>
.movie_detail {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  font-size: 16px;
  color: #ffb400;
  margin-top: 10px;
}

.movie_item_title {
  width: 106px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  font-size: 14px;
  color: #333;
  margin-top: 10px;

}

.tab_content {
  width: 378px;
}

.movie_list {
  margin: -19px 0 20px -18px;
}

.movie_poster img {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.movie_poster {
  width: 106px;
  height: 145px;
  background-color: #fcfcfc;
  overflow: hidden;
  position: relative;
}

.movie_list_item {
  display: inline-block;
  vertical-align: top;
  position: relative;
  margin: 20px 0 0 20px;

}

.movie_item {
  position: relative;
  border: 1px solid #efefef;
  margin: -1px;
}

.module {
  margin-bottom: 60px;
}

.top_lists {
  margin-bottom: 20px;
}

.top_info_thumb img {
  width: 120px;
  height: 68px;
  vertical-align: bottom;
}


.top_video_info p a:hover {
  color: #ef4238;
}

.one_line {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.video_view .video_play_count .icon {
  content: "";
  display: inline-block;
  margin-right: 5px;
  width: 0;
  height: 0;
  border-width: 5px 0 5px 8px;
  border-style: solid;
  border-color: transparent transparent transparent #d8d8d8;
}

.video_view .video_play_count {
  color: #999;
  font-size: 12px;
}

.top_video_info p {
  margin: 14px 0 10px;
  font-size: 16px;
  color: #333;
}

.top_video_info {
  float: right;
  vertical-align: top;
  width: 224px;
}

.play_icon {
  position: absolute;
  right: 6px;
  bottom: 6px;
  width: 24px;
  height: 24px;
  background-size: 24px;
}

i {
  font-style: italic;
}

.top_info_icon {
  color: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: #f90;
  padding-left: 3px;
  width: 15px;
  height: 18px;
  font-size: 16px;
  display: inline-block;
  line-height: 20px;
}

.top_info_thumb {
  position: relative;
  margin-right: 16px;
  display: inline-block;
}

.top_list {
  margin-bottom: 20px;
}

.module .mod_content {
  color: #333;
  margin-top: 20px;
}

.mod_title {
  border-left: #ef4238 4px solid;
  padding-left: 6px;
}

.mod_title h2 {
  display: inline-block;
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 18px;
  color: #333;
  line-height: 18px;
}

.tab_title_active {
  cursor: pointer;
  float: left;
  margin-right: 30px;
  margin-bottom: -2px;
  padding-bottom: 10px;
  font-size: 18px;
  color: #333;
  line-height: 100%;
  border-bottom: 2px solid transparent;
  color: #ef4238;
  border-bottom: #ef4238 solid 2px;
}

.tab_title_disable {
  cursor: not-allowed;
  float: left;
  margin-right: 30px;
  margin-bottom: -2px;
  padding-bottom: 10px;
  font-size: 18px;
  color: #999;
  line-height: 100%;
  border-bottom: 2px solid transparent;
}

.tab_related_title {
  height: 30px;
  margin: 45px 0;
  border-bottom: 2px solid #eee;
}

.related {
  margin-left: 840px;
  width: 360px;
}

.tab_title_container .tab_title_disable {
  color: #999;
  border-bottom: 2px solid #eee;
  cursor: not-allowed;
  float: left;
  margin-right: 30px;
  margin-bottom: -2px;
  padding-bottom: 10px;
  font-size: 18px;
  z-index: 100;
  line-height: 100%;
}

.tab_title_container .tab_title_active {
  color: #ef4238;
  border-bottom: 2px solid #ef4238;
  cursor: pointer;
  float: left;
  margin-right: 30px;
  margin-bottom: -2px;
  padding-bottom: 10px;
  font-size: 18px;
  z-index: 100;
  line-height: 100%;
}

.tab_title {
  cursor: pointer;
  float: left;
  margin-right: 30px;
  margin-bottom: -2px;
  padding-bottom: 10px;
  font-size: 18px;
  color: #333;
  line-height: 100%;
  border-bottom: 2px solid #eee;
}


.tab_title_container {
  border-bottom: 2px solid #eee;
  clear: both;
  display: table;
  width: 100%;
}

a:hover {
  text-decoration: none;
}


.crumb_nav a {
  font-size: 16px;
  color: #333;
}

.crumb_nav {
  margin-bottom: 25px;
  color: #333;
  font-size: 16px;
}

.main_content {
  width: 730px;
  float: left;
}

.container {
  margin: 0 auto;
  width: 1200px;
}

.container_main {
  margin-top: 80px;
}
</style>