<script lang="ts" setup>
import { ComputedRef, Ref, computed, ref } from 'vue'

const selectedNum = ref(0)

interface Food {
  name: string
  keyword: string
  selected: boolean
}

const foods = ref<Food[]>([
  {
    name: '鸡腿堡',
    keyword: '鸡腿堡|jituibao|jtb',
    selected: false,
  },
  {
    name: '牛肉煲',
    keyword: '牛肉煲|niuroubao|nrb',
    selected: false,
  },
  {
    name: '农家小炒肉',
    keyword: '农家小炒肉|nongjiaxiaochaorou|njxcr',
    selected: false,
  },
  {
    name: '港式叉烧饭',
    keyword: '港式叉烧饭|gangshichashaofan|gscsf',
    selected: false,
  },
  {
    name: '上海蟹黄包',
    keyword: '上海蟹黄包|shanghaixiehuangbao|shxhb',
    selected: false,
  },
  {
    name: '广州虾饺皇',
    keyword: '广州虾饺皇|guangzhouxiajiaohuang|gzxjh|广东虾饺皇',
    selected: false,
  },
  {
    name: '桂林米粉',
    keyword: '桂林米粉|guilinmifen|glmf',
    selected: false,
  },
  {
    name: '拿铁咖啡',
    keyword: '拿铁咖啡|natiekafei|ntkf|latiekafei|ltkf',
    selected: false,
  },
]) as Ref<Food[]>

const filterText = ref('')
const displayFoods = computed(() => {
  const text = filterText.value.trim()
  if (text.length === 0) {
    return foods.value
  }

  return foods.value.filter((f) => f.keyword.includes(text))
})

function handleCheckboxChange() {
  selectedNum.value = foods.value.filter((m) => m.selected).length
}
</script>

<template>
  <div class="food__container">
    <div>已选中 {{ selectedNum }} 个餐品</div>
    <br />
    <el-card class="food__card" v-for="(m, index) in displayFoods" :key="index">
      <div class="food__card__checkbox">
        <el-checkbox v-model="m.selected" :label="m.name" @change="handleCheckboxChange" />
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.food__container {
  display: inline-block;
}

.food__card {
  margin-bottom: 20px;
}
</style>