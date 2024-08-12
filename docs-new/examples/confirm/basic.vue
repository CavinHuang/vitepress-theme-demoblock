<template>
  <div flex>
    <i-button @click="handleClick">测试</i-button>
  </div>
</template>

<script setup lang="ts">
import { showConfirm } from 'icc-ui'

const handleClick = () => {
  showConfirm({
    title: '提示',
    message: '这是一个测试弹窗2222'
  }).then(() => {
    alert('点击了确定')
  })
}
</script>
