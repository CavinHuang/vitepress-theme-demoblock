<template>
  <div>
    <i-tabs v-model="activeKey" :data="data"></i-tabs>
    <p>Content of tab ： {{ activeKey }}</p>
    <i-button icon="i-add" @click="fn">click</i-button>
    <br />
    <br />
    <hr />
    <br />
    <i-tabs v-model="activeKey2" :data="data2" :is-scroll="false"></i-tabs>
    <p>Content of tab ： {{ activeKey2 }}</p>
    <i-button icon="i-add" @click="fn2">click</i-button>
  </div>
</template>

<script lang="ts" setup>
const activeKey = ref()
const activeKey2 = ref()
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
    label: '我是 Tab 6 '
  },
  {
    key: 7,
    label: 'Tab 7'
  },
  {
    key: 8,
    label: 'Tab 8'
  },
  {
    key: 9,
    label: 'Tab 9'
  },
  {
    key: 10,
    label: 'Tab 10'
  },
  {
    key: 11,
    label: 'Tab 11'
  },
  {
    key: 12,
    label: 'Tab 12'
  },
  {
    key: 13,
    label: 'Tab 13'
  },
  {
    key: 14,
    label: '我是 Tab 14'
  },
  {
    key: 15,
    label: 'Tab 15'
  },
  {
    key: 16,
    label: '我是 Tab 16'
  },
  {
    key: 17,
    label: 'Tab 17'
  },
  {
    key: 18,
    label: 'Tab 18'
  },
  {
    key: 19,
    label: 'Tab 19'
  },
  {
    key: 20,
    label: 'Tab 20'
  }
])
const data2 = reactive([
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
    label: '我是 Tab 6 '
  },
  {
    key: 7,
    label: 'Tab 7'
  },
  {
    key: 8,
    label: 'Tab 8'
  },
  {
    key: 9,
    label: 'Tab 9'
  },
  {
    key: 10,
    label: 'Tab 10'
  },
  {
    key: 11,
    label: 'Tab 11'
  },
  {
    key: 12,
    label: 'Tab 12'
  },
  {
    key: 13,
    label: 'Tab 13'
  },
  {
    key: 14,
    label: '我是 Tab 14'
  },
  {
    key: 15,
    label: 'Tab 15'
  },
  {
    key: 16,
    label: '我是 Tab 16'
  },
  {
    key: 17,
    label: 'Tab 17'
  },
  {
    key: 18,
    label: 'Tab 18'
  },
  {
    key: 19,
    label: 'Tab 19'
  },
  {
    key: 20,
    label: 'Tab 20'
  }
])
const fn = () => {
  activeKey.value = (activeKey.value || 0) + 1
  activeKey.value = activeKey.value > data.length ? 1 : activeKey.value
}
const fn2 = () => {
  activeKey2.value = (activeKey2.value || 0) + 1
  activeKey2.value = activeKey2.value > data2.length ? 1 : activeKey2.value
}
</script>
