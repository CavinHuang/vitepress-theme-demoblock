<template>
  <div flex>
    <i-switch
      v-model="checked"
      style="--switch-on-color: #13ce66; --switch-off-color: #ff4949"
      loading
    ></i-switch>
    <i-switch
      v-model="checked2"
      class="ml-20px"
      style="--switch-on-color: #13ce66; --switch-off-color: #ff4949"
      loading
    ></i-switch>
  </div>
</template>

<script setup lang="ts">
const checked = ref(false)
const checked2 = ref(true)
</script>
