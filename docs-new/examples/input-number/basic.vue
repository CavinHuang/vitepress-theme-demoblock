<template>
  <div class="flex">
    <i-input-number v-model="count" :max="1" :min="0" :step="0.2" :precision="1" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
</script>
