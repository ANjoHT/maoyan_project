<template>
  <div class="nav_container">
    <div class="warp">
      <div class="nav-warp">
        <a class="active">热映口碑榜</a>
        <a>最受期待榜</a>
        <a>国内票房榜</a>
        <a>北美票房榜</a>
        <a>TOP100榜</a>
      </div>
    </div>
    <div class="content-warp">
      <p>2023-02-03<span class="update_text">已更新</span></p>
      <p>
        榜单规则：将昨日国内热映的影片，按照评分从高到低排列取前10名，每天上午10点更新。相关数据来源于“猫眼专业版”及“猫眼电影库”。
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "boardNav",
};
</script>

<script lang="ts" setup></script>

<style scoped>
.nav_container {
  width: 100%;
}
.warp {
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-warp {
  position: relative;
  width: 1200px;
  height: 60px;
  line-height: 60px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  padding: 0 200px;
  justify-content: space-evenly;
}
.nav-warp a {
  color: #999;
  cursor: default;
  font-size: 16px;
  padding: 0 20px;
}
.nav-warp a:hover {
  color: #fff;
}
.nav-warp a.active {
  color: #ef4238;
}
.nav-warp a.active:before {
  content: "";
  width: 2px;
  height: 0;
  display: inline-block;
  position: absolute;
  left: 24%;
  margin-left: -5px;
  top: 54px;
  border-bottom: 7px solid #fff;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: none;
}
.content-warp {
  margin-top: 65px;
  text-align: center;
  font-size: 12px;
  color: #999;
}
.update_text {
  color: #ffb400;
  margin-left: 4px;
}
</style>
