<template>
  <div class="flex">
    <i-input-number v-model="count" :max="10" :min="0" :step="0.2" :precision="1">
      <template #prefix>
        <span class="ml-2">$</span>
      </template>

      <template #suffix>
        <span class="mr-2">RMB</span>
      </template>
    </i-input-number>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
</script>
