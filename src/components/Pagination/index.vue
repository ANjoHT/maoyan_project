<template>
    <div class="pagination">
    <button
      class="pagination__btn"
      :disabled="myCurrentPage === 1"
      @click="prev"
    >
      上一页
    </button>
    <ul class="pagination__ul">
      <li
        class="pagination__page"
        :class="{ active: myCurrentPage === 1 }"
        @click="toPage(1)"
      >
        1
      </li>
      <li
        class="pagination__page hide-forward"
        v-if="totalPages >= 7 && myCurrentPage > 4"
      >
        <span>...</span>
      </li>
      <li
        class="pagination__page"
        :class="{ active: myCurrentPage === middleNum.start + index }"
        v-for="(pageNum, index) in middleNum.end - middleNum.start + 1"
        @click="toPage(middleNum.start + index)"
        :key="middleNum.start + index"
      >
        {{ middleNum.start + index }}
      </li>
      <li
        class="pagination__page hide-forward"
        v-if="totalPages >= 7 && myCurrentPage < totalPages - 3"
      >
        <span>...</span>
      </li>
      <li
        v-if="totalPages >= 2"
        class="pagination__page"
        :class="{ active: myCurrentPage === totalPages }"
        @click="toPage(totalPages)"
      >
        {{ totalPages }}
      </li>
    </ul>
    <button
      class="pagination__btn"
      :disabled="myCurrentPage === totalPages"
      @click="next"
    >
      下一页
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: "",
};
</script>

<script lang="ts" setup>
  import { ref , computed ,watch} from 'vue'
  const props = defineProps({
    total: {
      type: Number,
      default: 0,
    },
    pageSize: {
      type: Number,
      default: 5,
    },
    currentPage: {
      type: Number,
      default: 1,
    }
  })
  const myCurrentPage = ref(props.currentPage)
  const myPageSize = ref(props.pageSize)

  const totalPages = computed(()=>{
    return Math.ceil(props.total / myPageSize.value);
  })
  const middleNum = computed(()=>{
          // 分两种情况
      // 总的页码小于7
      if (totalPages.value <= 7 && totalPages.value > 2) {
        return { start: 2, end: totalPages.value - 1 };
      } else if (totalPages.value <= 2) {
        return { start: 1, end: 0 };
      }

      // 总的页码大于7
      let start = myCurrentPage.value - 2;
      let end = start + 4;

      if (start <= 2) {
        start = 2;
        end = start + 4;
      }
      if (end >= totalPages.value - 1) {
        end = totalPages.value - 1;
        start = end - 4;
      }
      // console.log(start ,end);
      return {
        start,
        end,
      };
  })
  const emit = defineEmits(['current-change'])

  watch(myCurrentPage,(myCurrentPage)=>{
    emit('current-change',myCurrentPage)
  })
  const prev = () => {
    myCurrentPage.value -- 
  }
  const next = () => {
    myCurrentPage.value ++
  }
  const toPage = (page:number) => {
    myCurrentPage.value = page
  }
</script>

<style lang="less" scoped>
.pagination {
  display: flex;
  justify-content: center;
  // height: 30px;
  padding: 10px 0;
  font-size: 14px;
}
.pagination__ul {
  display: flex;
  justify-content: center;
  line-height: 32px;
  align-items: center;
  margin: 0 5px 0 10px;
}
.pagination__page {
  width: 40px;
  height: 30px;
  background-color: #fff;
  border: 1px solid #ccc;
  margin: 0 5px 0 0;
  text-align: center;
  cursor: pointer;
  border-radius: 3px;
}
.hide-forward:hover {
  .icon-doubleleft:before {
    content: "\eb1c";
  }
  .icon-doubleright:before {
    content: "\eb1d";
  }
}
.pagination__page:hover {
  border: 1px solid @primary-color;
}
.pagination__btn {
  width: 60px;
  height: 30px;
  border: 1px solid #ccc;
  cursor: pointer;
  border-radius: 3px;
  box-sizing: content-box;
  background-color: #fff;
  &:hover {
    border: 1px solid @primary-color;
  }
  &:disabled {
    color: #c0c4cc;
    background-color: #fff;
    cursor: not-allowed;
    border: 1px solid #ccc;

  }
}
.pagination__pageSizes {
  margin: 0 15px;
  outline: none;
  cursor: pointer;
}
.pagination__total {
  line-height: 30px;
  font-size: 14px;
  font-weight: 600;
}
.active {
  background-color: @primary-color !important;
  color: #fff;
  border:1px solid transparent;
}
</style>