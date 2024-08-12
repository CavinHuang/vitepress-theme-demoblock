<template>
  <div flex>
    <i-button @click="handleClick">测试 icon</i-button>
    <i-button @click="handleClick2">测试 icon Vnode</i-button>
  </div>
</template>

<script setup lang="ts">
import { IMessage, IIcon } from 'icc-ui'
import { h } from 'vue'
const handleClick = () => {
  IMessage({
    content: '这是一条消息',
    icon: 'i-activity'
  })
}

const handleClick2 = () => {
  IMessage({
    content: '这是一条消息',
    duration: 0,
    icon: () => {
      return h(IIcon, { name: 'i-shouquan' })
    }
  })
}
</script>
