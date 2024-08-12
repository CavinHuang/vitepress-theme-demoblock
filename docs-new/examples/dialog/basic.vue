<template>
  <div flex>
    <i-button @click="handleOpen">基础弹窗</i-button>
  </div>
  <i-dialog v-model="visible" title="弹窗测试" sub-title="弹窗sub">
    <div>弹窗内容</div>

    <template #footer>
      <i-button ghost @click="visible = false">取消</i-button>
      <i-button @click="visible = false">确定</i-button>
    </template>
  </i-dialog>
</template>

<script lang="ts" setup>
const visible = ref(false)

const handleOpen = () => {
  visible.value = true
}
</script>
