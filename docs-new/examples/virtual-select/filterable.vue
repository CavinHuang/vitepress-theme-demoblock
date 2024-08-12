<template>
  <div class="flex">
    <i-virtual-select v-model="keyword" :data="list" filterable></i-virtual-select>
  </div>
  <div class="flex mt-5">
    <i-virtual-select
      v-model="keyword"
      :data="list2"
      :filter-method="handleFilter"
    ></i-virtual-select>
  </div>

  <div class="flex mt-5">
    <i-virtual-select
      v-model="keyword"
      :data="list2"
      filterable
      :filter-method="handleFilter"
    ></i-virtual-select>
  </div>

  <div class="flex mt-5">
    <i-virtual-select
      v-model="ids"
      :data="list2"
      filterable
      :filter-method="handleFilter"
      multiple
      tag-color="#b20e0e"
    ></i-virtual-select>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const keyword = ref('')
const ids = ref([])
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

list2.value = Array.from({ length: 1000 }, (_, i) => {
  _id = (i + 1) * Date.now() + `-${i}`
  return {
    id: _id,
    value: _id,
    label: `过滤方法-${i}`
  }
})

const handleFilter = item => {
  return !item.label.includes('4')
}
</script>
