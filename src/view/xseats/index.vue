<template>
  <div class="move_box">
    <div class="move_leftbox">
      <h4 class="s">
        <img
          src="../../assets/imges/可选座位.png"
        />可选座位&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
        <img
          src="../../assets/imges/已选座位.png"
        />已选座位&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<img
          src="../../assets/imges/已售座位.png"
        />已售座位&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
        <img src="../../assets/imges/情侣座位.png" />情侣座位
      </h4>
      <h4 style="text-align: center">银幕中央</h4>
      <div class="img_box">
        <div
          class="img_itembox"
          v-for="(m, i) in moves"
          :key="m.id"
          @click="selectDesk(i)"
        >
          <template v-if="m.state == 'true'">
            <div class="img_option move_img"></div>
          </template>

          <template v-else-if="m.state == 'false'">
            <img src="../assets/selected.png" alt="" class="move_img" />
          </template>

          <template v-else-if="m.state == 'on'">
            <img src="../../assets/imges/" alt="" class="move_img" />
          </template>
        </div>
      </div>
    </div>
    <div class="move_rightbox">
      <img src="../assets/jiongma.png" alt="" class="move_bigimg" />
      <div class="move_rightitem">
        <img
          src="../../assets/imges/电影背景.jpg"
          alt=""
          style="
            width: 120px;
            float: left;
            margin-right: 20px;
            margin-bottom: 10px;
          "
        />
        <div style="text-align: left">不能流泪的悲伤</div>
        <br />
        <div style="text-align: left">类型：爱情</div>
        <br />
        <div style="text-align: left">版本：国语2D</div>
        <br />
        <div style="text-align: left">时长97分钟</div>
        <br />
        <br />
        <div style="text-align: left">
          影院：<span style="font-weight: 600"
            >万众国际影城（CGS中国巨幕横岗店）</span
          >
        </div>
        <br />
        <div style="text-align: left">
          影厅：<span style="font-weight: 600"
            >7号激光厅-商场5小时免费停车</span
          >
        </div>
        <br />
        <div style="text-align: left">
          场次：<span style="font-weight: 600">周二 2月14 10:40</span>
        </div>
        <br />
        <div style="text-align: left">
          票价：<span style="font-weight: 600">￥43/张</span>
        </div>
        <br />
        <br />
        <div style="text-align: left">
          座位：<span style="font-weight: 600">一次最多选6个座位</span>
        </div>
        <br />
        <br />
        <div style="text-align: center">
          <span class="wd">
          请
            <p style="color: red">点击左侧</p>
            座位图选择座位
          </span>
        </div>
        <br />
        <a class="btn_box">确认选座</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { GetseatdataApi } from "../../api/xseats/index";
const moves = reactive(GetseatdataApi);

let info = ref(0);
let total = ref(0);
function selectDesk(i: string) {
  console.log("开始" + info.value);
  info.value++;
  if (moves[i].state == "on") {
    moves[i].state = "true";
    info.value--;
    info.value--;
    console.log("弃票", info.value);
  } else if (info.value > 5 && moves[i].state != "false") {
    alert("您最多只能一次性购买五张票卷！");
    moves[i].state = "true";
    info.value--;
    console.log(info.value);
  } else if (moves[i].state == "true") {
    moves[i].state = "on";
    total.value += 38;
  } else if (moves[i].state == "false") {
    info.value--;
    alert("当前座位已被购买！");
    console.log("选择已购的座位", info.value);
  }
}
</script>

<style lang="less" scoped>
.wd {
  white-space: nowrap;
}
* {
  margin: 0;
  padding: 0;
  font-size: 15px;
}

.move_box {
  width: 1200px;
  border: 1px #333 solid;
  border-radius: 5px;
  margin: 0 auto;
  display: flow-root;
  margin-top: 120px;
}

.move_rightitem {
  padding: 20px;
  height: 520px;
  background: rgb(3, 3, 3, 0.3);
}

.move_bigimg {
  width: 558px;
  height: 560px;
  object-fit: cover;
  filter: blur(4px);
  position: absolute;
  z-index: -1;
  right: 0;
}

.move_leftbox {
  width: 50%;
  padding: 30px 20px;
  float: left;
  height: 500px;
  border-right: 2px #333 solid;
  text-align: center;
}

.move_rightbox {
  width: 46.5%;
  float: right;
  height: 560px;
  position: relative;
  color: #fff;
}

.img_box {
  position: relative;
  margin: 10px;
}

.move_img {
  width: 30px;
  cursor: pointer;
  float: left;
  margin: 1px;
}

.img_option {
  background-image: url("../assets/optional.png");
  width: 30px;
  height: 30px;
  background-size: 100%;
  display: block;
}

.active {
  background-image: url("../assets/be_selected.png");
  width: 30px;
  height: 30px;
  background-size: 100%;
  display: block;
}

.move_img:hover {
  box-shadow: 0 0 10px 1px lightgrey;
  border-radius: 20%;
}

.btn_box {
  display: flex;
  margin: 0 auto;
  color: #fff;
  width: 160px;
  padding: 10px 10px;
  border-radius: 5px;
  cursor: pointer;
  background: rgb(9, 9, 9, 0.6);
}

.btn_box:hover {
  background: rgb(9, 9, 9, 1);
}
</style>
