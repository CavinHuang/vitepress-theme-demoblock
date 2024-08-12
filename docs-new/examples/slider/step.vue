<template>
  <div class="flex w-50%">
    <i-slider v-model="values" :step="4" />
  </div>
  <div class="mt-20">{{ values }}</div>
</template>

<script setup lang="tsx">
import { ref } from 'vue'
const values = ref(10)
</script>
