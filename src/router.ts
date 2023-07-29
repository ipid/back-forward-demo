import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import Empty from './router-comp/Empty.vue'
import Blacklist from './router-comp/Blacklist.vue'
import FoodList from './router-comp/FoodList.vue'
import MerchantList from './router-comp/MerchantList.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Empty,
  },

  {
    path: '/blacklist',
    component: Blacklist,
  },
  
  {
    path: '/food',
    component: FoodList,
  },
  {
    path: '/merchant',
    component: MerchantList,
  },
]

export const router = createRouter({
  // 为了易于部署，使用 hash 模式，可以修改。
  history: createWebHashHistory(),
  routes,
})
