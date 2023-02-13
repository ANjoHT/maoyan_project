<template>

  <div>
    <BannerView :data="movieInfo" :id="id"></BannerView>
    <ContainerView :data="movieInfo" :id="id"></ContainerView>

  </div>
</template>
<script lang="ts">
export default {
  name: "MoviesInfo "
};

</script>


<script lang="ts" setup>

import BannerView from "./components/BannerView.vue";
import ContainerView from "./components/ContainerView.vue";
import { getMovieInfoApi } from "@/api/movieinfo/movieinfo"
import { onMounted, reactive, ref } from "vue";
import { CelebritiesList, movie } from "@/api/movieinfo/model/movieinfoModel";
import { useRoute } from 'vue-router'

const route = useRoute()

const id = route.query.id

onMounted(() => {
  getMovieInfo(id as any)
})
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

<style>

</style>