<template>
  <div flex>
    <i-button @click="handleClick('top-right')">top-right</i-button>
    <i-button @click="handleClick('top-left')">top-left</i-button>
    <i-button @click="handleClick('bottom-right')">bottom-right</i-button>
    <i-button @click="handleClick('bottom-left')">bottom-left</i-button>
    <i-button @click="handleClick('top')">top</i-button>
    <i-button @click="handleClick('bottom')">bottom</i-button>
  </div>
</template>

<script setup lang="ts">
import type { NotificationPlacement } from 'icc-ui'
import { showNotification } from 'icc-ui'
const handleClick = (placement: NotificationPlacement) => {
  showNotification({
    title: '标题',
    message: '这是一条消息',
    placement,
    duration: 0
  })
}
</script>
