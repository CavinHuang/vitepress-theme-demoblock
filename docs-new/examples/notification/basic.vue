<template>
  <div flex>
    <i-button @click="handleClick">测试</i-button>
  </div>
</template>

<script setup lang="ts">
import { showNotification } from 'icc-ui'
const handleClick = () => {
  showNotification({
    title: '标题',
    message: '这是一条消息'
  })
}
</script>
