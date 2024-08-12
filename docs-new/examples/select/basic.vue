<template>
  <div class="flex">
    <i-select v-model="keyword" :data="list"></i-select>
  </div>
  <div class="mt-2">选中的值是:{{ keyword }}</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const keyword = ref(2)
const list = ref<any[]>([])

list.value = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  value: i,
  label: `测试数据-${i}`
}))
</script>
