<template>
  <div class="h-100">
    <i-virtual-list :data="list" is-paging :limit="20" @pull-up="handlePull">
      <template #default="{ item, index }">
        <span>{{ index + 1 }} - {{ item.name }}</span>
      </template>
    </i-virtual-list>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const list = ref<any[]>([])
const arr = Array.from({ length: 30 }, (_, i) => ({ name: `虚拟列表`, id: i + list.value.length }))
list.value = arr
// 分页
const handlePull = () => {
  list.value.push(...arr)
}
</script>
