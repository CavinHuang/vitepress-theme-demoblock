<template>
  <div class="flex">
    <i-input-number v-model="count" :controls="false" />
  </div>

  <div class="flex mt-5">
    <i-input-number v-model="count" controls-position="right" />
  </div>

  <div class="flex mt-5">
    <i-input-number v-model="count" controls-position="right" :controls-icon="icons" />
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
const count = ref(0)
const icons = reactive({ addIcon: 'i-arrow-top', subtractIcon: 'i-arrow-bottom' })
</script>
