<template>
  <div flex>
    <i-switch v-model="checked" @change="handleSwitchChange"></i-switch>
  </div>
</template>

<script setup lang="ts">
const checked = ref('')

const handleSwitchChange = (value: boolean) => {
  console.log(value)
}
</script>
