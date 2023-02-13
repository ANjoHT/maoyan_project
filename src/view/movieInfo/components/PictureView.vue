<template>
  <div class="picture_tab">
    <ul class="picture_list">
      <li class="picture_item" v-for="item in pictureList">
        <img class="default_img" src="@/assets/picture/fce0b36338de00381b94c78cf1df8e9d78634.jpg"
          alt="">
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "PictureView",
}
</script>

<script lang="ts" setup>
import { reactive } from 'vue';


const pictureList = reactive([
  {
    img: ""
  },
  {
    img: ""
  },
  {
    img: ""
  },
  {
    img: ""
  },
  {
    img: ""
  },
  {
    img: ""
  },
  {
    img: ""
  },
  {
    img: ""
  },
  {
    img: ""
  },
  {
    img: ""
  },

])

</script>

<style scoped>
.picture_tab {
  margin-left: -20px;
}

.picture_item {
  float: left;
  margin-top: 20px;
  margin-left: 20px;
}

.default_img {
  cursor: pointer;
  width: 104px;
  height: 104px;
}

.picture_list {
  padding-left: 0;
  margin: 0;
}
</style>