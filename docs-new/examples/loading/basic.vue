<template>
  <i-loading :loading="loading">
    <img src="https://picsum.photos/500/500" @load="handleLoad" />
  </i-loading>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const loading = ref(true)

const handleLoad = () => {
  setTimeout(() => {
    loading.value = false
  }, 5000)
}
</script>
