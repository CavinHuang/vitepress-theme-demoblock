<template>
  <div flex>
    <i-switch
      v-model="checked"
      style="--switch-on-color: #13ce66; --switch-off-color: #ff4949"
      :loading="loading1"
      :before-change="handleBeforeChange1"
    ></i-switch>
    <i-switch
      v-model="checked2"
      class="ml-20px"
      style="--switch-on-color: #13ce66; --switch-off-color: #ff4949"
      :loading="loading2"
      :before-change="handleBeforeChange2"
    ></i-switch>
  </div>
</template>

<script setup lang="ts">
import { DoneFn } from '@iccjs/types'

const checked = ref(false)
const loading1 = ref(false)

const handleBeforeChange1 = () => {
  loading1.value = true

  return new Promise(resolve => {
    setTimeout(() => {
      loading1.value = false
      return resolve(true)
    }, 3000)
  })
}

const checked2 = ref(true)
const loading2 = ref(false)
const handleBeforeChange2 = () => {
  alert('阻止切换')
  return false
}
</script>
