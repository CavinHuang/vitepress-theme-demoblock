<template>
  <div class="flex flex-column">
    <i-groups :data="avatarList">
      <template #default="{ item }">
        <i-avatar :image="item"></i-avatar>
      </template>
    </i-groups>
  </div>

  <div class="flex flex-column mt-10">
    <i-groups :data="avatarList" :limit="8">
      <template #default="{ item }">
        <i-avatar :image="item"></i-avatar>
      </template>
      <template #exceed="{ count }">
        <i-avatar :label="count" :formatter="formatter"></i-avatar>
      </template>
    </i-groups>
  </div>

  <div class="flex flex-column mt-10">
    <i-groups :data="avatarList" :limit="8" orient="vertical">
      <template #default="{ item }">
        <i-avatar :image="item"></i-avatar>
      </template>
      <template #exceed="{ count }">
        <i-avatar :label="count" :formatter="formatter"></i-avatar>
      </template>
    </i-groups>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const avatarList = ref<any[]>([
  'https://icc-dev.oss-cn-shenzhen.aliyuncs.com/ww561ce81776c525cd/media/648c0854e4b03fcd3c9c3476.png',
  'https://icc-dev.oss-cn-shenzhen.aliyuncs.com/ww561ce81776c525cd/media/65fc0ad4e4b0b5d07184af0c.jpg',
  'https://icc-dev.oss-cn-shenzhen.aliyuncs.com/ww561ce81776c525cd/media/65fc0ad4e4b0b5d07184af0d.jpeg',
  'https://icc-dev.oss-cn-shenzhen.aliyuncs.com/ww561ce81776c525cd/media/65fc0b8de4b0b5d07184af11.jpg',
  'https://icc-dev.oss-cn-shenzhen.aliyuncs.com/ww561ce81776c525cd/media/6481acefe4b0123c935d9d6d.jpg',
  'https://icc-dev.oss-cn-shenzhen.aliyuncs.com/ww561ce81776c525cd/media/646db9ade4b0b55e7819d95f.jpeg',
  'https://icc-dev.oss-cn-shenzhen.aliyuncs.com/ww561ce81776c525cd/media/64780a7de4b0b55e7819ec10.jpeg',
  'https://icc-dev.oss-cn-shenzhen.aliyuncs.com/ww561ce81776c525cd/media/64780a83e4b0b55e7819ec12.png',
  'https://icc-dev.oss-cn-shenzhen.aliyuncs.com/ww561ce81776c525cd/media/64474cf2e4b020a05e25e206.jpg',
  'https://icc-dev.oss-cn-shenzhen.aliyuncs.com/ww561ce81776c525cd/media/6447486de4b020a05e25e1fa.jpeg',
  'https://icc-dev.oss-cn-shenzhen.aliyuncs.com/ww561ce81776c525cd/media/63a02ab3e4b0afae6c1956fe.jpeg',
  'https://icc-dev.oss-cn-shenzhen.aliyuncs.com/ww561ce81776c525cd/media/63a02ab6e4b0afae6c195700.jpeg',
  'https://icc-dev.oss-cn-shenzhen.aliyuncs.com/ww561ce81776c525cd/media/63a02abce4b0afae6c195702.jpeg',
  'https://icc-dev.oss-cn-shenzhen.aliyuncs.com/ww561ce81776c525cd/media/63a02ac8e4b0afae6c195705.png',
  'https://icc-dev.oss-cn-shenzhen.aliyuncs.com/ww561ce81776c525cd/media/63a02ad2e4b0afae6c195709.jpeg',
  'https://icc-dev.oss-cn-shenzhen.aliyuncs.com/ww561ce81776c525cd/media/63a02ae3e4b0afae6c19570b.jpg',
  'https://icc-dev.oss-cn-shenzhen.aliyuncs.com/ww561ce81776c525cd/media/63a02aebe4b0afae6c19570d.jpg'
])

const formatter = text => {
  return `+${text}`
}
</script>
