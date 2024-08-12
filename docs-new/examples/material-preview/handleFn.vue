<template>
  <div class="flex">
    <i-button @click="handleOpen">素材预览</i-button>
  </div>
</template>
<script setup lang="ts">
import { showMaterialPreview } from 'icc-ui'

const handleOpen = () => {
  showMaterialPreview({
    placeholder: 'https://picsum.photos/50/50',
    data: [
      {
        src: 'https://picsum.photos/500/500',
        type: 'image'
      },
      {
        src: 'https://picsum.photos/600/800',
        type: 'image'
      },
      {
        src: 'https://picsum.photos/300/500',
        type: 'image'
      },
      {
        src: 'https://picsum.photos/900/500',
        type: 'image'
      }
    ]
  })
}
</script>
