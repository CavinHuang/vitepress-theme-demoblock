<template>
  <div class="flex">
    <i-input v-model="keyword" prefix-icon="i-search" />
  </div>
  <div class="flex mt-5">
    <i-input v-model="keyword" prefix-icon="i-search" />
  </div>
  <div class="flex mt-5">
    <i-input v-model="keyword" prefix-icon="i-search" suffix-icon="i-shop" />
  </div>
  <div class="flex mt-5">
    <i-input v-model="keyword" suffix-icon="i-shop">
      <template #prefix>
        <span class="ml-4">自定义插槽前缀</span>
      </template>
    </i-input>
  </div>
  <div class="flex mt-5">
    <i-input v-model="keyword" prefix-icon="i-search">
      <template #suffix>
        <span class="mr-4">自定义插槽和后缀</span>
      </template>
    </i-input>
  </div>
</template>
<script lang="ts" setup>
const keyword = ref('')
</script>
