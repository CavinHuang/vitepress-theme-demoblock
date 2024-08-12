<template>
  <div flex>
    <i-button @click="handleClick1()">title Vnode</i-button>
    <i-button @click="handleClick2()">message VNode</i-button>
    <i-button @click="handleClick3()">自定义footer</i-button>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { showNotification, IButton } from 'icc-ui'

const handleClick1 = () => {
  showNotification({
    title: ({ titleClass }) =>
      h('div', { class: titleClass, style: { color: 'red' } }, '我是一段VNode Title'),
    message: '这是一条消息',
    duration: 0
  })
}

const handleClick2 = () => {
  showNotification({
    title: '标题',
    message: () => h('div', { style: { fontSize: '18px' } }, '我是一段VNode Message'),
    duration: 0
  })
}

const handleClick3 = () => {
  const ins = showNotification({
    title: '标题',
    message: () => h('div', { style: { fontSize: '18px' } }, '我是一段VNode Message'),
    duration: 0,
    footer: ({ footerClass }) =>
      h('div', { class: ['flex justify-end', footerClass] }, [
        h(
          IButton,
          {
            type: 'delete',
            text: true,
            class: 'pl-0! pr-0! pt-0! pb-0! h-auto!',
            onClick: () => {
              ins.destroy()
            }
          },
          () => '删除'
        )
      ])
  })
}
</script>
