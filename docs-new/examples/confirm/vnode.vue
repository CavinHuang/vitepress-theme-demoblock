<template>
  <div flex>
    <i-button @click="handleClick">测试</i-button>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { showConfirm, IButton } from 'icc-ui'

const handleClick = () => {
  showConfirm({
    title: ({ titleClass }) => h('div', { style: { color: 'green' }, class: titleClass }, '提示'),
    message: '11111',
    footer: ({ footerClass }) =>
      h('div', { class: footerClass }, [
        h(IButton, { type: 'delete', ghost: true }, () => 'cancel'),
        h(IButton, {}, () => 'ok')
      ])
  }).then(() => {
    alert('点击了确定')
  })
}
</script>
