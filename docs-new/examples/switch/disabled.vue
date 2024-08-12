<template>
  <div flex>
    <i-switch v-model="checked1" disabled></i-switch>
    <i-switch v-model="checked2" class="ml-20px"></i-switch>
  </div>
</template>

<script setup lang="ts">
const checked1 = ref(true)
const checked2 = ref(false)
</script>
