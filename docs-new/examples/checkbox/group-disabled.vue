<template>
  <div class="flex flex-col">
    <div class="mt-10">
      <i-checkbox-group v-model="checkboxList" disabled>
        <i-checkbox value="1" label="1"></i-checkbox>
        <i-checkbox value="2" label="2"></i-checkbox>
      </i-checkbox-group>
    </div>

    <pre class="mt-20">
      当前选中：{{ checkboxList }}
    </pre>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const checkboxList = ref<string[]>([])
</script>
