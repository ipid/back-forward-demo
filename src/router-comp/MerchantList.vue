<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElCard, ElCheckbox } from 'element-plus';

const selectedNum = ref(0)

const merchants = reactive([
  {
    name: '肯德基',
    selected: false,
  },
  {
    name: '麦当劳',
    selected: false,
  },
  {
    name: '德克士',
    selected: false,
  },
  {
    name: '星巴克',
    selected: false,
  },
  {
    name: '必胜客',
    selected: false,
  },
  {
    name: '哈根达斯',
    selected: false,
  },
  {
    name: '三品王',
    selected: false,
  },
  {
    name: '米咖',
    selected: false,
  },
  {
    name: '张亮麻辣烫',
    selected: false,
  },
])

function handleCheckboxChange() {
  selectedNum.value = merchants.filter((m) => m.selected).length
}

function handleCardClicked(ev: MouseEvent) {
  const container = ev.currentTarget
  if (!(container instanceof HTMLElement)) {
    return
  }

  const target = ev.target
  if (!(target instanceof HTMLElement)) {
    return
  }

  const checkbox = container.querySelector('input[type="checkbox"]') as (HTMLInputElement | null)
  if (checkbox != null && target.closest('.merchant__card__checkbox') == null) {
    checkbox.click()
  }
}
</script>

<template>
  <div class="merchant__container">
    <div>已选中 {{ selectedNum }} 个商家</div>
    <br />
    <el-card class="merchant__card" v-for="(m, index) in merchants" :key="index" @click="handleCardClicked">
      <div class="merchant__card__checkbox">
        <el-checkbox v-model="m.selected" :label="m.name" @change="handleCheckboxChange" />
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.merchant__container {
  display: inline-block;
}

.merchant__card {
  margin-bottom: 20px;
}
</style>