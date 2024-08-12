<template>
  <div class="flex">
    <div>
      <i-color-picker v-model="color"></i-color-picker>
      <pre>
      当前颜色: {{ color }}
    </pre
      >
    </div>
    <div>
      <i-color-picker v-model="color" disabled></i-color-picker>
      <pre>
      当前颜色: {{ color }}
    </pre
      >
    </div>
    <div>
      <i-color-picker v-model="color" :show-alpha="false"></i-color-picker>
      <pre>
      当前颜色: {{ color }}
    </pre
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const color = ref<string>('#00ff00')
</script>
