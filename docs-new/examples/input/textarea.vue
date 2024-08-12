<template>
  <div class="flex">
    <i-input v-model="keyword" type="textarea" @change="handleInput" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const keyword = ref('')

const handleInput = () => {
  console.log('change')
}
</script>
