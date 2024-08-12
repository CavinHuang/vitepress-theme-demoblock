<template>
  <div flex>
    <i-button @click="handleOpen">关闭前校验弹窗</i-button>
  </div>
  <i-dialog v-model="visible" title="弹窗测试" subtitle="弹窗sub" :before-close="handleBeforeClose">
    <div>
      <p class="mb-10px">输入的值小于10时，可以关闭</p>
      <el-input v-model="inputValue" placeholder="请输入内容" />
    </div>
    <template #footer>
      <i-button ghost @click="visible = false">取消</i-button>
      <i-button @click="visible = false">确定</i-button>
    </template>
  </i-dialog>
</template>

<script lang="ts" setup>
import type { DoneFn } from '@iccjs/types'

const visible = ref(false)

const handleOpen = () => {
  visible.value = true
}

const inputValue = ref(20)
const handleBeforeClose = (done: DoneFn) => {
  if (Number(inputValue.value) < 10) {
    return done(true)
  }
  alert('输入的值必须小于10')
  done(false)
}
</script>
