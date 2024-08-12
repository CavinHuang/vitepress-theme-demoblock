<template>
  <div class="flex">
    <i-input-number
      v-model="count"
      :max="100000"
      :min="0"
      :step="100"
      :precision="2"
      digital-delimiter="."
      decimal-separator=","
    />
  </div>
  <div class="flex mt-5">
    <i-input-number
      v-model="count"
      :max="100000"
      :min="0"
      :step="100"
      :precision="2"
      :formatter="handleFormat"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)

const handleFormat = value => {
  return '$ ' + value.replace(/\./g, ',')
}
</script>
