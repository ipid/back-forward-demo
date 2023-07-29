import type { RouteConfig } from 'vue-router'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Empty from './router-comp/Empty.vue'
import Blacklist from './router-comp/Blacklist.vue'
import FoodList from './router-comp/FoodList.vue'
import MerchantList from './router-comp/MerchantList.vue'

const routes: RouteConfig[] = [
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

Vue.use(VueRouter)

export default new VueRouter({
  routes,
})
