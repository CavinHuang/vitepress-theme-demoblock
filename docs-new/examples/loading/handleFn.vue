<template>
  <div id="loadTarget" class="h-120"></div>

  <div class="flex">
    <i-button @click="handleOpen">打开loading</i-button>
    <i-button @click="handleClose">关闭loading</i-button>
  </div>
</template>
<script setup lang="ts">
import { showLoading, hideLoading } from 'icc-ui'

const handleOpen = () => {
  showLoading({ text: '打开loading', target: '#loadTarget' })
}

const handleClose = () => {
  hideLoading()
}
</script>
