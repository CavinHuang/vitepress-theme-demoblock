<template>
  <div flex>
    <i-button @click="handleClick('success')">success</i-button>
    <i-button @click="handleClick('warning')">warning</i-button>
    <i-button @click="handleClick('info')">info</i-button>
    <i-button @click="handleClick('error')">error</i-button>
  </div>
</template>

<script setup lang="ts">
import type { MessageType } from 'icc-ui'
import { IMessage } from 'icc-ui'
const handleClick = (type: MessageType) => {
  IMessage({
    content: `这是一条${type}信息`,
    type,
    duration: 0
  })
}
</script>
