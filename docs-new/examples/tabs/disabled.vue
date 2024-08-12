<template>
  <div>
    <i-tabs v-model="activeKey" :data="data"></i-tabs>
    <p>Content of tab ： {{ activeKey }}</p>
    <i-button icon="i-add" @click="fn">click</i-button>

    <br />
    <hr />
    <br />
    <i-tabs v-model="activeKey2" :data="data2" :disabled="disabledFn"></i-tabs>
    <p>Content of tab ： {{ activeKey2 }}</p>
    <i-button icon="i-add" @click="fn2">click</i-button>

    <br />
    <hr />
    <br />
    <i-tabs v-model="activeKey3" :data="data3" :disabled="true"></i-tabs>
    <p>Content of tab ： {{ activeKey3 }}</p>
    <i-button icon="i-add" @click="fn3">click</i-button>
  </div>
</template>

<script lang="ts" setup>
const activeKey: any = ref()
const activeKey2 = ref()
const activeKey3 = ref()
const data = reactive([
  {
    key: 1,
    label: 'Tab 111111',
    disabled: true
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
    label: 'Tab 4',
    disabled: true
  },
  {
    key: 5,
    label: 'Tab 5'
  }
])
const data2 = reactive([
  {
    key: 6,
    label: 'Tab 66666'
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
  }
])
const data3 = reactive([
  {
    key: 6,
    label: 'Tab 66666'
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
  }
])
const fn = () => {
  activeKey.value = (activeKey.value || 0) + 1
  activeKey.value = activeKey.value > data.length ? 1 : activeKey.value
}
const fn2 = () => {
  activeKey2.value = activeKey2.value + 1
  activeKey2.value = activeKey2.value > 10 ? 6 : activeKey2.value
}
const fn3 = () => {
  activeKey3.value = activeKey3.value + 1
  activeKey3.value = activeKey3.value > 10 ? 6 : activeKey3.value
}
const disabledFn = (tab, i) => {
  return i % 2 === 1
}
</script>
