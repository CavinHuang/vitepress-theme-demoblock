<template>
  <div class="flex">
    <i-input v-model="keyword" prefix-icon="i-search" @change="handleChange" />
  </div>
  <div class="flex mt-4">数据展示： {{ keyword }}</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const keyword = ref('基础用法')

const handleChange = () => {
  console.log('handleChange')
}
</script>
