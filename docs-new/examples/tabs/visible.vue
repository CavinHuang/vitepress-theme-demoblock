<template>
  <div>
    <i-tabs v-model="activeKey" :data="data" :visible="visibleFn"></i-tabs>
    <p>Content of tab ： {{ activeKey }}</p>
    <i-button icon="i-add" @click="fn">click</i-button>
    <br />
    <br />
  </div>
</template>

<script lang="ts" setup>
const activeKey: any = ref()
const data = reactive([
  {
    key: 1,
    label: 'Tab 111111'
  },
  {
    key: 2,
    label: 'Tab 2'
  },
  {
    key: 3,
    label: 'Tab 3'
  },
  {
    key: 4,
    label: '我是 Tab 4'
  },
  {
    key: 5,
    label: 'Tab 5'
  },
  {
    key: 6,
    label: '我是 Tab 6 不等于5'
  },
  {
    key: 7,
    label: 'Tab 7'
  }
])
const fn = () => {
  activeKey.value = (activeKey.value || 0) + 1
  activeKey.value = activeKey.value > data.length ? 1 : activeKey.value
}
const visibleFn = tab => {
  const { key } = tab || {}
  return !(key <= 3 || key === 5)
}
</script>
