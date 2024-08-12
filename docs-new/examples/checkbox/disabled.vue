<template>
  <i-checkbox v-model="checked">disabled</i-checkbox>
  <div class="flex mt-4">
    <i-checkbox v-model="checked2" label="11111" :disabled="checked"></i-checkbox>
    <i-checkbox label="11111" :disabled="checked"></i-checkbox>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const checked = ref(false)
const checked2 = ref(true)
</script>
