<template>
  <div class="h-100">
    <i-virtual-list :data="virtualList" :limit="15" is-dynamic-height>
      <template #default="{ item, index }">
        <span class="pt-5">{{ index + 1 }} - {{ item.name }}</span>
        <img class="mt-2 mb-5" :src="item.imgUrl" alt="图片" />
      </template>
    </i-virtual-list>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const str = `【故事】在北京市延庆区八达岭镇西南部，坐落着石峡村。村子位于八达岭古长城和石峡关长城脚下，三面被长城环绕。从上世纪80年代开始，石峡村村民梅景田就绕着村周边的古长城义务巡查。清理杂草、捡拾垃圾、劝阻游客不文明行为，都成了他守护长城的日常。这条近20公里长的巡护之路，他一走就是40多年。在他的带领下，石峡村成立了长城保护志愿服务队。如今，全村80%的村民成为长城保护志愿者。`
function getRandomName() {
  return str.substring(0, Math.floor(Math.random() * str.length))
}

function getImgSize() {
  return Math.floor(Math.random() * str.length)
}

const arr = Array.from({ length: 100 }, (_, i) => ({
  id: i,
  name: getRandomName(),
  imgUrl: `https://picsum.photos/${getImgSize()}`
}))

const virtualList = ref<any[]>([])

virtualList.value = arr
</script>
