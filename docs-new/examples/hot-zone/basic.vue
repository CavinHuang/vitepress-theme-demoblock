<template>
  <div class="flex h-140">
    <i-hot-zone width="375px" :data="hotItem" @change="handleHotChange" @load="handleHotLoad">
      <img src="https://picsum.photos/375/750" alt="热区" />
    </i-hot-zone>
  </div>
  <el-row :gutter="20" class="mt-5">
    <el-col :span="12">
      <span class="w-20 inline-block">宽度</span>
      <el-input-number
        v-model="hotItem.width"
        :min="0"
        :max="hotSize.width"
        :precision="0"
        controls-position="right"
        class="w-10"
        @change="val => handleChange(val, 'width')"
      />
    </el-col>
    <el-col :span="12">
      <span class="w-20 inline-block">高度</span>
      <el-input-number
        v-model="hotItem.height"
        :min="0"
        :max="hotSize.height"
        :precision="0"
        controls-position="right"
        class="w-10"
        @change="val => handleChange(val, 'height')"
      />
    </el-col>
  </el-row>
  <el-row :gutter="20" class="mt-5">
    <el-col :span="12">
      <span class="w-20 inline-block">距离左边</span>
      <el-input-number
        v-model="hotItem.left"
        :min="0"
        :max="hotSize.width - hotItem.width"
        :precision="0"
        controls-position="right"
        class="w-10"
        @change="val => handleChange(val, 'left')"
      />
    </el-col>
    <el-col :span="12">
      <span class="w-20 inline-block">距离顶部</span>
      <el-input-number
        v-model="hotItem.top"
        :min="0"
        :max="hotSize.height - hotItem.height"
        :precision="0"
        controls-position="right"
        class="w-10"
        @change="val => handleChange(val, 'top')"
      />
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const hotItem = ref<any>({
  width: 100,
  height: 50,
  left: 100,
  top: 100
})

const hotSize = ref({ width: 375, height: 750 })

const handleHotLoad = data => {
  hotSize.value = data
}

const handleHotChange = (data: any) => {
  hotItem.value = data
}

const handleChange = (val, type) => {
  hotItem.value[type] = val
}
</script>
