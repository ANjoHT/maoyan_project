<template>
  <div class="celebrity_container">
    <div class="celebrity_group">
      <div class="celebrity_type">
        导演
        <span>({{ directorList.length }})</span>
      </div>
      <ul class="celebrity_list" v-for="item in directorList">
        <li class="celebrity">
          <a href=""> <img :src="item.avatar" alt=""></a>
          <div class="info">
            <a href="#" class="name">{{ item.cnm }}</a>
          </div>
        </li>
      </ul>
    </div>
    <div class="celebrity_group">
      <div class="celebrity_type">
        演员
        <span>({{ actorList.length }})</span>
      </div>
      <ul class="celebrity_list" v-for="item in actorList">
        <li class="celebrity">
          <a href=""> <img :src="item.avatar" alt=""></a>
          <div class="info">
            <a href="#" class="name">{{ item.cnm }}</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ActorView',
}
</script>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { getMovieActorApi } from "@/api/movieinfo/movieinfo"
import { CelebritiesList } from "@/api/movieinfo/model/movieinfoModel"
onMounted(() => {
  getMovieActorList(id as any)
})
const actorList = ref<CelebritiesList>([])
const directorList = ref<any>([])
const props = defineProps(["id"])
const id = props.id;


const getMovieActorList = async (id: number) => {
  const res = await getMovieActorApi(id)
  actorList.value = res.celebrities
  directorList.value = actorList.value.filter(item => item.cr === 2)
  actorList.value = actorList.value.filter(item => item.cr === 1)

}



</script>

<style scoped>
.celebrity_list .celebrity img {
  width: 128px;
  height: 170px;
}

.name {
  display: inline-block;
  width: 128px;
  text-align: center;
  padding-bottom: 1px;
  margin-bottom: -1px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.celebrity_list .celebrity {
  float: left;
  width: 128px;
  margin-left: 20px;
  margin-bottom: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

a:hover {
  text-decoration: none;
  color: #666 !important;
}

.celebrity_list {
  margin-left: -20px;
  font-size: 16px;
  color: #333;
  padding-left: 0;
  margin: 0;
}



.celebrity_type {
  margin-bottom: 16px;
  font-size: 16px;
  color: #333;
}

.celebrity_group {
  margin-bottom: 30px;
  float: left;
  width: 730px;
}

.celebrity_container {
  margin-top: 40px;
}
</style>