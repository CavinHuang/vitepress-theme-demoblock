<template>
  <div class="flex">
    <i-input v-model="keyword1" type="textarea" autosize />
  </div>

  <div class="flex mt-10">
    <i-input v-model="keyword2" type="textarea" :autosize="{ minRows: 4 }" />
  </div>

  <div class="flex mt-10">
    <i-input v-model="keyword3" type="textarea" :autosize="{ maxRows: 4 }" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const keyword1 = ref('')
const keyword2 = ref('')
const keyword3 = ref('')
</script>
