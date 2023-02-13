import { defineStore } from "pinia";
import type { MovieItem } from "@/api/cinema/model/cinemaModel";

// defineStore(id, options) 定义pinia模块
// id 模块名称（唯一），会在开发者调试工具中显示这个名称
export const useCinemaStore = defineStore("cinema", {
  state: ():{movie : MovieItem} => {
    // state是一个函数 必须返回一个对象
    return {
      movie: {
        desc: "", //当前选择的电影名描述
        id: 0,
        img: "", //当前选择的电影图片
        nm: "", //当前选择的电影名
        sc: "", //评分
        shows: [], // 当前电影的放映列表
        dur: 159, //播放多少分钟
        wish:0,
      },
    };
  },
  getters: {
    // 只读计算属性数据
  },

  // 没有mutations
  // 之前在mutations中完成的操作，都在actions中完成
  // actions即需要发送请求，又需要更新数据
  actions: {
    // actions 接收多个参数
    // 组件触发action函数传递的参数，就是action函数的参数
    // increment(num:number,...res:number[]){
    //   this.count += num
    //   console.log(num,res);
    // }
  },
});
