import { defineStore } from "pinia";
import { IUseCityList, ICurrentItem } from "@/api/city/model/cityModel";

import { getCityListApi, getCurrentCityApi } from "@/api/city/index";
export const useCityStore = defineStore("useCityStore", {
  state: (): {
    cityList: IUseCityList;
    currentCity: ICurrentItem;
  } => {
    return {
      currentCity:{
        id:30,
        city:'深圳'
      },
      cityList: [],
    };
  },
  actions: {
    async getCtiyList() {
      const res = await getCityListApi();
      const arr = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ];
      let cityList: IUseCityList = [];
      cityList = arr.map((item) => {
        return {
          [item]: [],
        };
      });
      res.cts.forEach((item) => {
        let f = item.py.slice(0, 1);
        const one = arr.findIndex((e) => e === f.toUpperCase());
        cityList[one][arr[one]].push(item);
      });
      const word = []
      cityList.forEach(item => {
        for (const key in item) {
          item.word = key
        }
      })
      this.cityList = cityList.filter(item => {
        return item[item.word].length !== 0
      })
    },
    async getCurrentCity() {
      const { id, city } = (await getCurrentCityApi(22.55, 114.05)).data;
      this.currentCity = { id, city };
      
    },
  },
});
