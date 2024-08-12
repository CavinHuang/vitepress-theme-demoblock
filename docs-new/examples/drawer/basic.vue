<template>
  <div flex>
    <i-button @click="handleOpen('left')">左侧基础抽屉</i-button>
    <i-button @click="handleOpen('right')">右侧基础抽屉</i-button>
  </div>
  <i-drawer v-model="visible" title="基础抽屉" subtitle="基础抽屉sub" :placement="placement">
    <div>基础抽屉</div>

    <template #footer>
      <i-button ghost @click="visible = false">取消</i-button>
      <i-button @click="visible = false">确定</i-button>
    </template>
  </i-drawer>
</template>

<script lang="ts" setup>
const visible = ref(false)

const placement = ref('left')
const handleOpen = (_placement: string) => {
  placement.value = _placement
  visible.value = true
}
</script>
