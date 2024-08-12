<template>
  <div class="flex">
    <i-select v-model="keyword" :data="list" disabled></i-select>
  </div>
  <div class="flex mt-5">
    <i-select v-model="keyword" :data="list2" :disabled-method="handleDisabled"></i-select>
  </div>
  <div class="flex mt-5">
    <i-select v-model="keyword" :data="list"></i-select>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const keyword = ref('')
const list = ref<any[]>([])
const list2 = ref<any[]>([])

let _id: string = ''

list.value = Array.from({ length: 10 }, (_, i) => {
  _id = (i + 1) * Date.now() + `-${i}`
  return {
    id: _id,
    value: _id,
    disabled: Math.random() > 0.5,
    label: `测试数据-${i}`
  }
})

list2.value = Array.from({ length: 10 }, (_, i) => {
  _id = (i + 1) * Date.now() + `-${i}`
  return {
    id: _id,
    value: _id,
    label: `禁用方法-${i}`
  }
})

const handleDisabled = item => {
  return item.id === list2.value[3].id
}
</script>
