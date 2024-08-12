<template>
  <div class="flex">
    <i-input v-model="keyword" prefix-icon="i-search" suffix-icon="i-shop" clearable />
  </div>
  <div class="flex mt-5">
    <i-input v-model="keyword" prefix-icon="i-search" clear-icon="i-shop" clearable />
  </div>
  <div class="flex mt-5">
    <i-input v-model="keyword" prefix-icon="i-search" clearable disabled />
  </div>
  <div class="flex mt-5">
    <i-input v-model="keyword" prefix-icon="i-search" clearable readonly />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const keyword = ref<number>(10000)
</script>
