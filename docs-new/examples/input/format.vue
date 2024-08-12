<template>
  <i-input
    v-model="keyword"
    :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
    :parser="value => value.replace(/\$\s?|(,*)/g, '')"
    @change="handleChange"
  />
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const keyword = ref('999999')

const handleChange = () => {
  console.log('handleChange')
}
</script>
