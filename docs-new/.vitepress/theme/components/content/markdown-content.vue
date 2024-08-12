<template>
  <div class="relative grow mx-auto px-1 lg:-ml-12 lg:pl-[23.7rem]" id="content-area">
    <header id="header" class="relative" v-if="title">
      <div class="mt-0.5 space-y-2.5">
        <div class="eyebrow h-5 text-primary dark:text-primary-light text-sm font-semibold">{{ title }}</div>
      </div>
    </header>
    <div class="flex flex-col gap-8"><div class="flex flex-col gap-6 xl:hidden"></div></div>
    <!-- 文档内容 -->
    <div class="relative mt-8 prose prose-gray dark:prose-invert">
      <Content />
    </div>
    <!-- 文档底部 -->
    <Footer />
  </div>
</template>
<script lang="ts" setup>
import Footer from './footer.vue';
import { computed } from 'vue';
import { useBreadcrumb } from '../../composables/sidebar';

const { breadcrumb } = useBreadcrumb();

const title = computed(() => {
  return breadcrumb.value?.[0]?.text || '';
});

</script>
