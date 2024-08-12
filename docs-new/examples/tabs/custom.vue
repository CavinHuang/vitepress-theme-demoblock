<template>
  <div>
    <i-tabs v-slot="{ tab, index }" v-model="activeKey" :data="data">
      <p v-if="index < 2">{{ tab.label }}</p>
      <i-tag
        v-else
        :prefix-icon="getTagConfig(tab.key).name"
        :color="getTagConfig(tab.key).color"
        :round="index % 2 === 1"
      >
        {{ tab.label }}
      </i-tag>
    </i-tabs>
    <p>Content of tab ： {{ activeKey }}</p>
    <i-button icon="i-add" @click="fn">click</i-button>
    <br />
    <br />
  </div>
</template>

<script lang="ts" setup>
const activeKey: any = ref()
const icons = reactive({
  3: {
    name: 'i-department',
    color: '#fd6b7e'
  },
  4: {
    name: 'i-member',
    color: '#ffa800'
  },
  5: {
    name: 'i-shop',
    color: '#A33AC8'
  },
  6: {
    name: 'i-organization',
    color: ''
  },
  7: {
    name: 'i-label',
    color: '#00bea2'
  }
})
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
    label: 'Tab 6'
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
const getTagConfig = (key: any = '') => {
  return icons[key] || {}
}
</script>
