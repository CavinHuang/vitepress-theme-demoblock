<template>
  <div flex>
    <i-button @click="handleOpen('right')">无header抽屉</i-button>
  </div>
  <i-drawer v-model="visible" :header="false" :placement="placement">
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
