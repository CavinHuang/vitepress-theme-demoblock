<template>
  <div flex>
    <i-button @click="handleClick">测试内容倒计时</i-button>
  </div>
</template>

<script setup lang="ts">
import type { MessageState } from 'icc-ui'
import { IMessage } from 'icc-ui'

const genMessage = (tim: number) => `这是一条消息, ${tim} 秒后消失`
const maxTimer = 10
let timerIns: number | null = null
const handleClick = () => {
  const ins = IMessage({
    content: genMessage(maxTimer),
    duration: 0,
    onClose() {
      timerIns && clearTimeout(timerIns)
    }
  })
  startTimer(maxTimer, ins)
}

const startTimer = (timer: number, ins: MessageState) => {
  if (timer <= 0) {
    ins.destroy()
    timerIns = null
    return
  }
  timerIns = window.setTimeout(() => {
    ins.content = genMessage(timer - 1)
    if (timer === 4) {
      ins.type = 'error'
    }
    if (timer === 6) {
      ins.type = 'success'
    }
    if (timer === 6) {
      ins.icon = 'i-birthday-happy-fill'
    }
    startTimer(timer - 1, ins)
  }, 1000)
}
</script>
