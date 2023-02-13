<template>
  <div class="tags_panel">
    <ul class="tags_lines">
      <li class="tags_line">
        <div class="tags_title">{{ brand.name }}</div>
        <ul class="tags">
          <li class="" v-for="item in brand.subItems">
            <a href="">{{ item.name }}</a>
          </li>
        </ul>

      </li>
      <li class="tags_line_border" v-for="item in data">
        <div class="tags_title">{{ item.name }}</div>
        <ul class="tags">
          <li class="" v-for="sub in item.subItems">
            <a href="">{{ sub.name }}</a>
          </li>
        </ul>

      </li>
    </ul>
  </div>

</template>

<script lang="ts">
</script>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue';
import { getTabNavApi } from "@/api/cinemas/tabNav"


onMounted(() => {
  getTabNav(1)
})
const brand = reactive<any>({})
const district = reactive<any>({})
const hallType = reactive<any>({})
const service = reactive<any>({})
const data = [district, hallType, service];


const getTabNav = async (id: number) => {
  const res = await getTabNavApi(id)
  brand.name = res.brand.name;
  brand.subItems = res.brand.subItems;
  district.name = res.district.name;
  district.subItems = res.district.subItems;
  hallType.name = res.hallType.name;
  hallType.subItems = res.hallType.subItems;
  service.name = res.service.name;
  service.subItems = res.service.subItems;
}

</script>

<style scoped>
.tags_line_border {
  border-top: 1px dashed #e5e5e5;
  padding: 10px 0 !important;
}

a:hover {
  text-decoration: none !important;
  color: #f34d41;
}

.tags li a {
  font-size: 14px;
}

.tags li.active {
  background: #f34d41;
  color: #fff;
}

.tags li {
  border-radius: 14px;
  padding: 3px 9px;
  display: inline-block;
  margin-left: 12px;
}

.tags {
  margin-left: 40px !important;
  margin: 0;
  padding: 0;
}

.tags_title {
  height: 24px;
  line-height: 24px;
  float: left;
  color: #999;
  font-size: 14px;
}

.tags_panel {
  border: 1px solid #e5e5e5;
  padding: 0 20px;
  margin: 40px 0;
  position: relative;
}

.tags_lines {
  margin: 0;
  padding: 0;
}

.tags_line {
  padding: 10px 0 !important;
}
</style>