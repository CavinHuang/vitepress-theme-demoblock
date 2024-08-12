<template>
  <div flex>
    <i-button @click="handleClick">测试</i-button>
  </div>
</template>

<script setup lang="ts">
import { IMessage } from 'icc-ui'
const handleClick = () => {
  IMessage({
    content: '这是一条消息'
  })
}
</script>
