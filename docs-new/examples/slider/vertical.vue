<template>
  <div class="flex">
    <div>
      <div class="flex h-300px w-10">
        <i-slider v-model="values" vertical />
      </div>
      <div class="mt-5">{{ values }}</div>
    </div>

    <div class="ml-20">
      <div class="flex h-300px">
        <i-slider v-model="values2" vertical />
      </div>
      <div class="mt-5">{{ values2 }}</div>
    </div>
  </div>
</template>

<script setup lang="tsx">
import { ref } from 'vue'
const values = ref(10)
const values2 = ref([30, 50])
</script>
