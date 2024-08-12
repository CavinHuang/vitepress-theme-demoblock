<template>
  <div class="flex w-50%">
    <i-slider></i-slider>
  </div>

  <div class="flex w-50% mt-20">
    <i-slider v-model="values"></i-slider>
  </div>
</template>

<script setup lang="tsx">
import { ref } from 'vue'
const values = ref([10, 50])
</script>
