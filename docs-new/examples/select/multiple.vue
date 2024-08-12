<template>
  <div class="flex">
    <i-select v-model="keyword" :data="list" multiple></i-select>
  </div>
  <div class="mt-2">选中的值是:{{ keyword }}</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const keyword = ref([2, 6])
const list = ref<any[]>([])

let _id: string = ''

list.value = Array.from({ length: 10 }, (_, i) => {
  _id = (i + 1) * Date.now() + `-${i}`
  return {
    id: i,
    value: _id,
    label: `测试数据-${i}`
  }
})
</script>
