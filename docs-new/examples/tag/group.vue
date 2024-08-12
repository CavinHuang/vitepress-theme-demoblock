<template>
  <div class="flex flex-column">
    <i-groups :data="tagList">
      <template #default="{ item }">
        <i-tag>{{ item.text }}</i-tag>
      </template>
    </i-groups>
  </div>

  <div class="flex flex-column mt-10">
    <i-groups :data="tagList" :limit="5">
      <template #default="{ item }">
        <i-tag>{{ item.text }}</i-tag>
      </template>
    </i-groups>
  </div>

  <div class="flex flex-column mt-10">
    <i-groups :data="tagList" :limit="3" orient="vertical">
      <template #default="{ item }">
        <i-tag>{{ item.text }}</i-tag>
      </template>
    </i-groups>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const tagList = ref<any[]>([])

tagList.value = Array.from({ length: 10 }, (_, i) => ({
  text: `我是标签-${i}`
}))
</script>
