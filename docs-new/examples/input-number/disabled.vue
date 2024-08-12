<template>
  <div class="flex">
    <i-input-number v-model="count" disabled :precision="2" />
  </div>

  <div class="flex mt-5">
    <i-input-number v-model="count" disabled :precision="2" controls-position="right" />
  </div>

  <div class="flex mt-5">
    <i-input-number v-model="count" readonly :precision="2" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
</script>
