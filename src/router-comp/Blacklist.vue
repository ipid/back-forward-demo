<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { Ref } from 'vue'

const blacklist: string[] = reactive([])
const inputElem = ref(null!) as Ref<HTMLInputElement>

function handleInputEnter() {
  const input = inputElem.value.value.trim()
  if (input.length === 0) {
    return
  }

  blacklist.push(input)
  inputElem.value.value = ''
}
</script>

<template>
  <div class="blacklist__container">
    <div class="blacklist__input-container">你要拉黑的用户：
      <input @keydown.enter="handleInputEnter" class="blacklist__input" ref="inputElem" />
    </div>
    <div>拉黑名单：</div>
    <ul>
      <li v-for="(item, index) in blacklist" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.blacklist__input-container {
  display: flex;
  width: 500px;
  margin: 0 auto;

  .blacklist__input {
    flex: 1 0 0;
    min-width: 0;
  }
}
</style>