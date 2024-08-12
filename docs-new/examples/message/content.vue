<template>
  <div flex>
    <i-button @click="handleClick2">测试 Vnode</i-button>
  </div>
</template>

<script setup lang="ts">
import { IMessage } from 'icc-ui'
import { h } from 'vue'
const handleClick2 = () => {
  IMessage({
    content: () => h('div', { style: 'color: red' }, '这是一条消息')
  })
}
</script>
