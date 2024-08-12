<template>
  <div flex>
    <i-switch
      v-model="checked"
      style="--switch-on-color: #13ce66; --switch-off-color: #ff4949"
    ></i-switch>
  </div>
</template>

<script setup lang="ts">
const checked = ref(false)
</script>
