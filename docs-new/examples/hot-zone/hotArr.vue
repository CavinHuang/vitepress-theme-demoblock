<template>
  <div class="flex h-140">
    <i-hot-zone width="375px" :data="hotList" @change="handleHotChange" @load="handleHotLoad">
      <img src="https://picsum.photos/375/750" alt="热区" />
    </i-hot-zone>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const hotList = ref<any>([
  {
    width: 100,
    height: 50,
    left: 100,
    top: 100
  },
  {
    width: 100,
    height: 50,
    left: 100,
    top: 300
  }
])

const hotSize = ref({ width: 375, height: 750 })

const handleHotLoad = data => {
  hotSize.value = data
}

const handleHotChange = (data: any) => {
  hotList.value = data
}
</script>
