import type { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path:"/",
    name:'home',
    component:() => import('@/view/home/index.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/view/error/404.vue'),
  },
  {
    path:"/search",
    name:'search',
    component:() => import('@/view/search/index.vue')
  },
  {
    path: '/movieinfo',
    name: 'movieInfo',
    component: () => import("@/view/movieInfo/index.vue"),
    children: [
      {
        path: '/movieinfo',
        name: 'introduce',
        component: () => import("@/view/movieInfo/components/IntroduceView.vue"),
      },
      {
        path: '/movieinfo/actor',
        name: 'actor',
        component: () => import("@/view/movieInfo/components/ActorView.vue"),
      },
      {
        path: '/movieinfo/prize',
        name: 'prize',
        component: () => import("@/view/movieInfo/components/PrizeView.vue"),
      },
      {
        path: '/movieinfo/picture',
        name: 'picture',
        component: () => import("@/view/movieInfo/components/PictureView.vue"),
      },
    ]
  },
  {
    path: "/cinemas",
    name: 'cinemas',
    component: () => import("@/view/cinemas/index.vue")
  },  
  {
    path: '/film',
    name: 'film',
    component: () => import('@/view/film/film.vue'),
  },
  {
    path: '/movie',
    name: 'movie',
    component: () => import('@/view/film/movie.vue'),
  },
  {
    path: "/cinema",
    name: "cinema",
    component: () => import("@/view/cinema/index.vue"),
  },
  {
    path: "/board",
    name: "board",
    component: () => import("@/view/board/index.vue"),
  },
  {
    path: "/homepage",
    name: "Homepage",
    component: () => import("@/view/news/components/homepage/index.vue"),
    meta: {
      title: "选座位",
    },
  },
  {
    path: "/xseats",
    name: "Seat",
    component: () => import("@/view/xseats/index.vue"),
    meta: {
      title: "选座位",
    },
  },
  {
    path: "/news",
    name: "News",
    component: () => import("../view/news/index.vue"),
    meta: {
      title: "热点电影",
    },
  },
  {
    path: "/:pathMatch(.*)",
    name: "Any",
    redirect: "/404",
  },

];
/**
 * 定义动态路由
 */
export const allAsyncRoutes: Array<RouteRecordRaw> = [];
