<template>
  <div class="container mt-80">
    <tabNav></tabNav>
    <cinemasList></cinemasList>
  </div>
</template>

<script lang="ts">
export default {
  name: "CinemasView",

}
</script>

<script lang="ts" setup>
import tabNav from './components/tabNav.vue';
import cinemasList from './components/cinemasList.vue';
</script>

<style scoped>
.container {
  width: 1200px;
  margin: 0 auto;
  margin-top: 120px;
}
</style>