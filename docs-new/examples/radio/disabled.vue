<template>
  <i-radio v-model="radio" disabled value="disabled">Option A</i-radio>
  <i-radio v-model="radio" disabled value="selected and disabled">Option B</i-radio>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref('selected and disabled')
</script>
