<template>
  <div class="cinemas-list">
    <h2 class="cinemas-list-header">
      <span>影院列表</span>
    </h2>
  </div>
  <div class="cinema-cell" v-for="item in cinemaList">
    <div class="cinema-info">
      <a href="" class="cinema-name">{{ item.title }}</a>
      <p class="cinema-address">{{
        item.location
      }}</p>
      <div class="cinema-tags">
        <span class="cinema-tags-item" v-for="ser in item.services">{{ ser.text }}</span>
      </div>
    </div>
    <div class="buy-btn">
      <a href="">选座购票</a>
    </div>
    <div class="price">
      <span class="rmb">￥</span>
      <span class="price-num">
        <span class="stonefont">{{ item.price.n }}</span>
      </span>
      <span>{{ item.price.q }}</span>
      <span class="cinema-distance">{{ item.distance }}
      </span>
    </div>

  </div>
</template>

<script lang="ts">
export default {
  name: "CinemasList"
}
</script>

<script lang="ts" setup>
import { getCinemasListApi } from "@/api/cinemas/cinemasList"
import { onMounted, ref } from "vue";

onMounted(() => {
  getCinemasList()
})

const cinemaList = ref<any>([])

const getCinemasList = async () => {
  const res = await getCinemasListApi()
  cinemaList.value = res
  console.log(cinemaList.value);


}
</script>

<style scoped>
.cinema-distance {
  display: block;
  height: 17px;
  line-height: 17px;
  margin-top: -8px;
  font-size: 12px;
  color: #999;
  letter-spacing: 0;
  text-align: right;
}

.price-num {
  font-size: 16px;
  margin-right: -3px;
  font-weight: 700;
  color: #f03d37;
  ;
}


.rmb {
  color: #f03d37;
  margin-right: -4px;
}

.price {
  float: right;
  font-size: 12px;
  color: #999;
  height: 45px;
  line-height: 45px;
}


a:hover {
  text-decoration: none !important;
}

.buy-btn a {
  display: inline-block;
  width: 100%;
  height: 30px;
  color: #fff;
  background-color: #f03d37;
  font-size: 14px;
  line-height: 30px;
  border-radius: 100px;
  text-align: center;
  -webkit-box-shadow: 0 2px 10px -2px #f03d37;
  box-shadow: 0 2px 10px -2px #f03d37;
}

.buy-btn {
  float: right;
  width: 80px;
  height: 45px;
  line-height: 45px;
  margin-left: 36px;
  margin-right: 20px;
}

.cinema-tags {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #509fc9;
  line-height: 18px;
}

.cinema-tags-item {
  display: inline-block;
  border: 0.7px solid #509fc9;
  border-radius: 3px;
  padding: 0 2px;
  margin-right: 8px;
}


.cinema-name {
  display: inline-block;
  font-size: 16px;
  line-height: 18px;
  color: #333;
  margin-bottom: 10px;
}

.cinema-address {
  font-size: 14px;
  line-height: 14px;
  color: #999;
}

.cinema-info {
  display: inline-block;
  max-width: 80%;
}

.cinema-cell {
  display: block;
  padding: 20px 0;
  border-bottom: 1px dashed #e5e5e5;
}

.cinemas-list-header {
  font-size: 18px;
  color: #333;
  border-left: 4px solid #f03d37;
  padding-left: 6px;
  line-height: 18px;
  margin: 0;
  position: relative;
}
</style>