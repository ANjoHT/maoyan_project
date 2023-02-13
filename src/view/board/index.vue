<template>
  <div class="board">
    <CBoardNav />
    <CBoardList />
  </div>
</template>

<script lang="ts">
export default {
  name: "board",
};
</script>

<script lang="ts" setup>
import CBoardNav from './components/boardNav.vue';

import CBoardList from './components/boardList.vue';
</script>

<style scoped></style>