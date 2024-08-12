<template>
  <div class="flex">
    <i-virtual-select v-model="keyword" :data="list"></i-virtual-select>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { uuid } from 'icc-ui'
const keyword = ref('')
const list = ref<any[]>([])

const data = Array.from({ length: 100 }, (_, i) => ({
  id: uuid(),
  value: i,
  label: `测试数据-${i}`
}))

list.value = data
</script>
