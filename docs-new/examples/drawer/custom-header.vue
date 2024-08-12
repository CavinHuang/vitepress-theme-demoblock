<template>
  <div flex>
    <i-button @click="handleOpen">自定义弹窗</i-button>
  </div>
  <i-drawer v-model="visible" title="弹窗测试" subtitle="弹窗sub">
    <template #header="{ titleClass }">
      <div :class="titleClass">自定义头部</div>
    </template>

    <div>弹窗内容</div>
    <template #footer>
      <i-button ghost @click="visible = false">取消</i-button>
      <i-button @click="visible = false">确定</i-button>
    </template>
  </i-drawer>
</template>

<script lang="ts" setup>
const visible = ref(false)

const handleOpen = () => {
  visible.value = true
}
</script>
