<template>
  <div flex>
    <i-button @click="handleClick">测试</i-button>
  </div>
</template>
<script setup lang="ts">
import { h } from 'vue'
import { showConfirm } from 'icc-ui'

const handleClick = () => {
  showConfirm({
    title: '提示',
    message: () =>
      h('div', {}, [
        '这是一个窗2222',
        h(
          'p',
          {
            style: {
              color: 'red',
              fontSize: '20px'
            }
          },
          '这是一个段落'
        )
      ]),
    confirmText: 'ok',
    cancelText: 'cancel',
    beforeClose: (action, state, done) => {
      if (action === 'confirm') {
        state.confirmLoading = true
        state.confirmText = 'Loading...'
        setTimeout(() => {
          done()
          setTimeout(() => {
            state.confirmLoading = false
          }, 300)
        }, 3000)
      } else {
        done()
      }
    }
  }).then(() => {
    alert('点击了确定')
  })
}
</script>
