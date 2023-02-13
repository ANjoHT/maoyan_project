<template>
  <div class="boardList">
    <div class="boardItem">
      <div class="board-item-img">
        <div class="num">1</div>
        <img src="@/assets/images/cinema_images/movie1.jpg" />
      </div>
      <div class="board-item-main">
        <div class="board-item-content">
          <div class="board-item-info">
            <p class="title">满江红</p>
            <p class="actor">主演：沈腾,易烊千玺,张译</p>
            <p class="time">上映时间：2023-01-22</p>
          </div>
          <div class="sc"><span class="big">9.</span>5</div>
        </div>
      </div>
    </div>
    <div class="boardItem">
      <div class="board-item-img">
        <div class="num">1</div>
        <img src="@/assets/images/cinema_images/movie1.jpg" />
      </div>
      <div class="board-item-main">
        <div class="board-item-content">
          <div class="board-item-info">
            <p class="title">满江红</p>
            <p class="actor">主演：沈腾,易烊千玺,张译</p>
            <p class="time">上映时间：2023-01-22</p>
          </div>
          <div class="sc"><span class="big">9.</span>5</div>
        </div>
      </div>
    </div>
    <div class="boardItem">
      <div class="board-item-img">
        <div class="num">1</div>
        <img src="@/assets/images/cinema_images/movie1.jpg" />
      </div>
      <div class="board-item-main">
        <div class="board-item-content">
          <div class="board-item-info">
            <p class="title">满江红</p>
            <p class="actor">主演：沈腾,易烊千玺,张译</p>
            <p class="time">上映时间：2023-01-22</p>
          </div>
          <div class="sc"><span class="big">9.</span>5</div>
        </div>
      </div>
    </div>
    <div class="boardItem">
      <div class="board-item-img">
        <div class="num">1</div>
        <img src="@/assets/images/cinema_images/movie1.jpg" />
      </div>
      <div class="board-item-main">
        <div class="board-item-content">
          <div class="board-item-info">
            <p class="title">满江红</p>
            <p class="actor">主演：沈腾,易烊千玺,张译</p>
            <p class="time">上映时间：2023-01-22</p>
          </div>
          <div class="sc"><span class="big">9.</span>5</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "boardList",
};
</script>

<script lang="ts" setup>
import {getBoardListApi} from '@/api/board/board'
import {onMounted ,ref} from 'vue'
const boardList = ref()
onMounted( async()=>{
 const res = await getBoardListApi()
//  console.log(res);

  boardList.value = res.movieList
})
</script>

<style scoped>
.boardList {
  margin-top: 50px;
  width: 100%;
}
.boardItem {
  width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  padding: 0px 130px;
  box-sizing: border-box;
  justify-content: space-between;
  margin-bottom: 30px;
}
.board-item-img {
  display: flex;
  align-items: center;
}
.num {
  width: 50px;
  height: 50px;
  background-color: #ffb400;
  color: #fff;
  margin-right: 30px;
  text-align: center;
  line-height: 50px;
  font-size: 18px;
  font-weight: 700;
}
.board-item-main {
  border-bottom: 1px #e5e5e5 solid;
  width: 680px;
  height: 235px;
  margin-left: 30px;
  /* position: relative; */
}
.board-item-content {
  padding-right: 10px;
  display: flex;
  justify-content: space-between;
  margin-top: 68px;
  /* position: absolute;
  margin: auto;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%; */
}
.board-item-info{
  width: 60%;
}
.title {
  color: #333;
  font-size: 26px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 680px;
}
.actor {
  margin: 20px 0 10px;
  font-size: 16px;
  color: #333;
}
.time {
  font-size: 16px;
  color: #999;
}
.sc {
  color: #ffb400;
  font-size: 26px;
  font-weight: 700;
}
.big {
  font-size: 56px;
  font-weight: 700;
}
</style>
