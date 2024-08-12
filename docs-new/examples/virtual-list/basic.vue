<template>
  <div class="h-100">
    <i-virtual-list :data="list" :limit="20">
      <template #default="{ item, index }">
        <span>{{ index + 1 }} - {{ item.name }}</span>
      </template>
    </i-virtual-list>
  </div>
</template>
<script setup lang="ts">
const list = Array.from({ length: 200 }, (_, i) => ({ name: `虚拟列表`, id: i }))
</script>
