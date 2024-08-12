<template>
  <div class="flex flex-wrap">
    <i-button icon="i-add" debounce @click="handleClick">防抖按钮</i-button>
    <i-button disabled debounce @click="handleClick1">禁用按钮</i-button>
    <i-button icon="i-add" @click="handleClick2">非防抖按钮</i-button>
  </div>
</template>
<script lang="ts" setup>
const handleClick = () => {
  console.log('handleClick')
}

const handleClick1 = () => {
  console.log('handleClick1')
}

const handleClick2 = e => {
  console.log('handleClick2', e)
}
</script>
