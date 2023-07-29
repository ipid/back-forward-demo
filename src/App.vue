<script lang="ts" setup>
import { ElButton } from 'element-plus';
import { useRouter } from 'vue-router';

const router = useRouter()

function gotoPage(path: string) {
  router.push(`/${path}`)
}
</script>

<template>
  <div class="app__container">
    <div class="app__row">
      <el-button round size="large" type="primary">← 后退</el-button>&nbsp;
      <el-button round size="large" type="primary">前进 →</el-button>
    </div>

    <div class="app__row">
      <el-button round size="large" @click="gotoPage('merchant')">商家列表</el-button>&nbsp;
      <el-button round size="large" @click="gotoPage('food')">餐品列表</el-button>&nbsp;
      <el-button round size="large" @click="gotoPage('blacklist')">黑名单列表</el-button>&nbsp;
      <el-button round size="large" @click="gotoPage('empty')">空</el-button>
    </div>

    <div class="app__row">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app__row {
  text-align: center;
  padding: 10px 0;
}

* {
  user-select: none;
}
</style>
