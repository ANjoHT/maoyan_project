<template>
  <div class="prize_tab">
    <ul class="prize_list">
      <li class="prize_item" v-for="item in prizeList">
        <div>
          <div class="portrait">
            <img src="@/assets/prize/ae0de4faa2366f9c23405c361387fe6f4358.jpg" alt="">
          </div>
          {{ item.title }}
        </div>
        <div class="context">
          <div>
            {{ item.portrait }}
          </div>
          <div>
            {{ item.context }}
          </div>
        </div>
      </li>
    </ul>
  </div>

</template>

<script lang="ts">
export default {
  name: "PrizeView"
}
</script>

<script lang="ts" setup>
import { reactive } from 'vue';



const prizeList = reactive([
  {
    title: "第70届奥斯卡金像奖",
    img: "@/assets/prize/ae0de4faa2366f9c23405c361387fe6f4358.jpg",
    portrait: "获奖：最佳影片 / 最佳导演 / 最佳摄影 / 最佳服装设计 / 最佳艺术指导 / 最佳音响 / 最佳剪辑 / 最佳音效剪辑 / 最佳视觉效果 / 最佳原创歌曲 / 剧情片最佳原创配乐",
    context: "提名：最佳女主角 / 最佳女配角 / 最佳化妆"
  }
])

</script> 

<style scoped>
.prize_item .context {
  font-size: 14px;
}

.prize_item .portrait {
  display: inline-block;
  border-radius: 50%;
  overflow: hidden;
  vertical-align: middle;
  margin-right: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 50px;
  height: 50px;
}

.prize_item {
  padding-bottom: 20px;
  border-bottom: 1px dashed #ccc;
  font-size: 17px;
}

.prize_list {
  margin: 0;
  padding-left: 0;
}
</style>