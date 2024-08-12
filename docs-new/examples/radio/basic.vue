<template>
  <div class="flex">
    <i-radio-group v-model="radio1">
      <i-radio value="1" size="large">Option 1</i-radio>
      <i-radio value="2" size="large">Option 2</i-radio>
    </i-radio-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const radio1 = ref('1')
</script>
