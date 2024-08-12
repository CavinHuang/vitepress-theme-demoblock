<template>
  <div class="flex flex-column">
    <!-- 默认插槽 -->
    <i-groups>
      <i-material src="https://picsum.photos/50/50" height="50px" content="默认插槽" />
    </i-groups>
  </div>

  <!-- 默认水平 -->
  <div class="flex flex-column mt10">
    <i-groups :data="virtualList" :limit="3">
      <template #default="{ item }">
        <i-material :src="item.src" height="50px" />
      </template>
    </i-groups>
  </div>

  <!-- 默认垂直 -->
  <div class="flex flex-column mt10">
    <i-groups :data="virtualList" orient="vertical" :limit="3">
      <template #default="{ item }">
        <i-material :src="item.src" height="50px" />
      </template>
    </i-groups>
  </div>

  <!-- 默认全部 -->
  <div class="flex flex-column mt10">
    <i-groups :data="virtualList">
      <template #default="{ item }">
        <i-material :src="item.src" height="50px" />
      </template>
    </i-groups>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const virtualList = ref<any[]>([])

virtualList.value = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  src: `https://picsum.photos/50/50`
}))
</script>
