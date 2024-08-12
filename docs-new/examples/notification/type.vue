<template>
  <div flex>
    <i-button @click="handleClick('default')">default</i-button>
    <i-button @click="handleClick('success')">success</i-button>
    <i-button @click="handleClick('warning')">warning</i-button>
    <i-button @click="handleClick('info')">info</i-button>
    <i-button @click="handleClick('error')">error</i-button>
  </div>
</template>

<script setup lang="ts">
import type { NotificationType } from 'icc-ui'
import { showNotification } from 'icc-ui'
const handleClick = (type: NotificationType) => {
  showNotification({
    title: '标题',
    message: '这是一条消息',
    type,
    duration: 0
  })
}
</script>
