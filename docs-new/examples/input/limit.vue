<template>
  <div class="flex">
    <i-input v-model="keyword" prefix-icon="i-search" show-word-limit maxlength="1000" />
  </div>

  <div class="flex mt-5">
    <i-input
      v-model="keyword"
      prefix-icon="i-search"
      type="textarea"
      show-word-limit
      maxlength="1000"
    />
  </div>
</template>
<script lang="ts" setup>
const keyword = ref('')
</script>
