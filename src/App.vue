<template>
  <div>
    <Header></Header>
    <router-view class="mt-80"></router-view>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
export default {
  name: "App",
};
</script>

<script lang="ts" setup>
import Header from "@/components/Header/index.vue"
import Footer from "@/components/Footer/index.vue"
</script>

<style lang="less" scoped>
.mt-80 {
  margin-top: 80px;
}
</style>
