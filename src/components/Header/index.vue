<template>
  <div class="header">
    <div class="header-content">
      <h1>
        <router-link to="/" class="logo"></router-link>
      </h1>
      <div class="city-container">
        <div class="city-selsected">
          {{ cityStore.currentCity.city }}
          <span class="iconfont icon-xiaosanjiaodown"></span>
        </div>
        <div class="city-list">
          <div class="city-list-header">定位城市 : 深圳</div>
          <div class="city-list-header recent">近期定位 : 深圳</div>
          <ul>
            <li v-for="citys,index in cityStore.cityList" :key="index">
              <span><span>{{citys.word}}</span></span>
              <div>
                <span class="" v-for="city in citys[citys.word as string]" :key="city.id">{{city.nm}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="nav">
        <div>
          <router-link
            :class="{ active: ($route.name === 'home'), link: true }"
            to="/"
            >首页</router-link
          >
        </div>
        <div>
          <router-link :class="{ active: ($route.name === 'film'), link: true }" to="/film"
            >电影</router-link
          >
        </div>
        <div>
          <router-link :class="{ active: ($route.name === 'cinemas'), link: true }" to="/cinemas"
            >影院</router-link
          >
        </div>
        <div>
          <router-link :class="{link: true }" to="/"
            >演出</router-link
          >
        </div>
        <div>
          <router-link :class="{ active: ($route.name === 'board'), link: true }" to="/board"
            >榜单</router-link
          >
        </div>
        <div>
          <router-link :class="{ active: ($route.name === 'News'), link: true }" to="/news"
            >热点</router-link
          >
        </div>
        <div>
          <router-link :class="{ link: true }" to="/"
            >商城</router-link
          >
        </div>
      </div>
      <div class="app_download">
        <span class="iconfont icon-phone"></span>
        <span class="text">APP下载</span>
        <span class="iconfont icon-xiaosanjiaodown"></span>
        <div></div>
      </div>
      <form class="search">
        <input type="text" placeholder="找影视剧、影人、影院" v-model="kw"/>
        <button class="search_btn" @click.prevent.enter="goSearch(kw)">
          <span class="iconfont icon-search"></span>
        </button>
      </form>
      <div class="user-info">
        <img src="@/assets/images/user.png" alt="" />
        <span class="iconfont icon-xiaosanjiaodown user-icon"></span>
        <ul></ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Header",
};
</script>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useCityStore } from '@/stores/useCity/index'
import { useRoute, useRouter } from "vue-router";
const cityStore = useCityStore()
onMounted(cityStore.getCtiyList)
onMounted(cityStore.getCurrentCity)
const kw = ref('')
const router = useRouter()
// 搜索
const goSearch = (k:string) => {
  router.push({
    name:'search',
    query:{
      kw:k
    }
  })
  kw.value = ''
}
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  min-width: 100%;
  border-bottom: 1px solid #d8d8d8;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #fff;
  z-index: 200;
}
.header-content {
  width: 1200px;
  margin: 0 auto;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  h1 {
    width: 133px;
    height: 100%;
    background: url("@/assets/images/logo.png") no-repeat center center;
    .logo {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
}
.city-container {
  width: 86px;
  height: 100%;
  position: relative;
  &:hover {
    .city-selsected {
      border-color: #e5e5e5;
      border-bottom: 1px solid #fff;
      background-color: #fff;
      z-index: 100;
    }
    .city-list {
      display: block;
    }
  }
}
.city-selsected {
  width: 100%;
  height: 100%;
  padding: 0 10px;
  font-size: 16px;
  line-height: 80px;
  box-sizing: border-box;
  border: 1px solid transparent;
  border-width: 0 1px;
  position: absolute;
  left: 0;
  top: 1px;
}
.city-list {
  position: absolute;
  display: none;
  width: 478px;
  height: 330px;
  // bottom: -100%;
  top: 81px;
  left: 0;
  border: 1px solid #d8d8d8;
  border-top: none;
  background-color: #fff;
  z-index: 100;
  font-size: 16px;
  overflow-y: scroll;
  ul {
    li {
      display: flex;
      & > span {
        span {
          margin-left: 20px;
          background-color: #eee;
          text-align: center;
          line-height: 20px;
          font-weight: 700;
          padding: 0 5px;
          margin-top: 5px;
        }
      }
      div {
        span {
          display: inline-block;
          line-height: 24px;
          height: 24px;
          cursor: pointer;
          text-align: center;
          padding: 0 6px;
          margin-bottom: 3px;
          &:hover {
            background-color: @primary-color;
            color: #fff;
          }
        }
      }
    }
  }
}
.city-list-header {
  padding-left: 20px;
  line-height: 58px;
  border-bottom: 1px solid #e5e5e5;
}
.recent {
  line-height: 40px;
  margin-bottom: 10px;
}
.nav {
  // width: 530px;
  display: flex;
  height: 100%;
  div {
    width: 76px;
    height: 100%;
    text-align: center;
    line-height: 80px;
  }
}
.app_download {
  widows: 132px;
  font-size: 16px;
  margin-right: 10px;
  height: 100%;
  line-height: 80px;
  .text {
    margin: 0 3px;
  }
  .icon-phone {
    font-size: 20px;
    vertical-align: middle;
  }
}
.search {
  width: 220px;
  height: 40px;
  position: relative;
  input {
    width: 100%;
    height: 100%;
    padding: 0 40px 0 20px;
    box-sizing: border-box;
    font-size: 14px;
    background-color: #faf8fa;
    border-radius: 30px;
    border: 1px solid #d8d8d8;
    outline-style: none;
  }
}
.search_btn {
  position: absolute;
  right: 0;
  top: 0;
  height: 40px;
  width: 40px;
  background-color: @primary-color;
  border: none;
  border-radius: 50%;
  .icon-search {
    font-size: 20px;
    color: #fff;
  }
}
.user-info {
  position: relative;
  padding: 0 10px;
  width: 56px;
  img {
    width: 40px;
    height: 40px;
  }
  .user-icon {
    font-size: 20px;
    color: #888;
    position: absolute;
    top: 8px;
  }
}
.link:hover {
  text-decoration: none;
  color: @primary-color;
}
.active {
  display: block;
  background-color: @primary-color;
  width: 100%;
  height: 100%;
  color: #fff;
}
.active:hover {
  color: #fff;
}
a {
  color: #333;
}
</style>
