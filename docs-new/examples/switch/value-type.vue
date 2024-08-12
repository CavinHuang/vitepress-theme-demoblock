<template>
  <div class="flex flex-col">
    <div class="flex flex-col">
      <div>数字：inactive-value 1， active-value 100, 当前：{{ checked }}</div>
      <i-switch v-model="checked" :active-value="100" :inactive-value="1"></i-switch>
    </div>

    <div class="flex flex-col mt-10px">
      <div>字符串：inactive-value no， active-value yes, 当前：{{ checked2 }}</div>
      <i-switch v-model="checked2" active-value="yes" inactive-value="no"></i-switch>
    </div>
  </div>
</template>

<script setup lang="ts">
const checked = ref(1)
const checked2 = ref('no')
</script>
