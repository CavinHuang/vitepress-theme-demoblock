<template>
  <div class="flex">
    <i-material-preview v-model="isShow" :data="imgList" />
    <i-button @click="handlePreview">预览</i-button>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const imgList = ref([
  {
    src: 'https://picsum.photos/800/800',
    type: 'image'
  },
  {
    src: 'https://picsum.photos/300/300',
    type: 'image'
  }
])

const isShow = ref(false)

const handlePreview = () => {
  isShow.value = true
}
</script>
