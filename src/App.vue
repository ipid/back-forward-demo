<script lang="tsx" setup>
import Vue, { ref } from 'vue'
import { useRouter } from 'vue-router/composables';

const router = useRouter()
const useKeepAlive = ref(false)

function gotoPage(path: string) {
  router.push(`/${path}`)
}

const MyRouterView = Vue.extend({
  functional: true,

  render() {
    if (useKeepAlive.value) {
      return (
        <keep-alive>
          <router-view />
        </keep-alive>
      )
    }

    return <router-view />
  }
})
</script>

<template>
  <div class="app__container">
    <div class="app__row">
      <el-button round size="large" type="primary" @click="router.back()">← 后退</el-button>&nbsp;
      <el-button round size="large" type="primary" @click="router.forward()">前进 →</el-button>
    </div>

    <div class="app__row">
      <el-checkbox v-model="useKeepAlive" label="使用 <keep-alive> 包裹 <router-view>" />
    </div>

    <div class="app__row">
      <el-button round size="large" @click="gotoPage('merchant')">商家列表</el-button>&nbsp;
      <el-button round size="large" @click="gotoPage('food')">餐品列表</el-button>&nbsp;
      <el-button round size="large" @click="gotoPage('blacklist')">黑名单列表</el-button>&nbsp;
      <el-button round size="large" @click="gotoPage('empty')">空</el-button>
    </div>

    <div class="app__row">
      <MyRouterView />
    </div>

    <a href="https://github.com/ipid/back-forward-demo/tree/demo-v1" target="_blank" class="app__github-button">
      <el-button type="danger" size="small">
        <i class="el-icon-view" /> GitHub 源码
      </el-button>
    </a>
  </div>
</template>

<style lang="scss" scoped>
* {
  user-select: none;
}

.app__row {
  text-align: center;
  padding: 10px 0;
}

.app__github-button {
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>
