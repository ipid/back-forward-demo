import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'

// 确保 .env.development 中的所有变量都被加载进来了
if (import.meta.env.VITE_ENV_ALL_LOADED !== 'FullyLoaded-Do-Not-Modify-Or-Delete') {
  throw new Error('.env.development 文件中的环境变量未加载，请检查 .env.* 文件是否存在或者是否配置正确')
}

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
