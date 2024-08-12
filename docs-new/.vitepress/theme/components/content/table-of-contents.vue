<template>
  <div id="table-of-contents" class="z-10 hidden xl:flex flex-none pl-10 w-[19rem]" ref="container">
    <div class="fixed text-gray-600 text-sm leading-6 w-[16.5rem] overflow-y-auto space-y-2 h-[calc(100%-10rem)]">
      <div class="text-gray-700 dark:text-gray-300 font-medium flex items-center space-x-2">
        <AlignLeft class="h-5 w-5"/>
        <span>{{ heading1?.title || '本页面' }}</span>
      </div>
      <ul class="space-y-2">
        <li v-for="heading in headers" :key="heading.slug" :style="{'margin-left': `${heading.level}rem`}">
          <a href="void:;" :data-link="heading.slug" :active-link="currentActiveLink"
            :class="[
              currentActiveLink === heading.slug
              ? 'py-1 block font-medium -ml-px font-medium text-primary dark:text-primary-light dark:border-primary-light'
              : 'group flex items-start py-1 whitespace-pre-wrap text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300'
            ]"
            @click="handleItemClick"
          >
            {{ heading.title }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { AlignLeft } from 'lucide-vue-next';
import { Header, useData } from 'vitepress';
import { computed, ref } from 'vue';
import { useActiveAnchor } from '../../composables/outline';

const { page } = useData();
const heading1 = ref<Header>();
const flatenHeaders = (headers: Header[]) => {
  const allHeaders = headers.flatMap(header => {
    return header.children ? [header, ...flatenHeaders(header.children)] : [header];
  });
  const _heading1Index = allHeaders.findIndex(header => header.level === 1);
  if (_heading1Index > -1) {
    heading1.value = headers[_heading1Index];
    allHeaders.splice(_heading1Index, 1);
  }
  return allHeaders;
};

const headers = computed(() => {
  const headers =  flatenHeaders(page.value.headers) || [];
  return headers as Header[];
});

const container = ref<HTMLElement>();
const { currentActiveLink } = useActiveAnchor(container, headers);
const handleItemClick = (event: MouseEvent) => {
  const el = event.target as HTMLElement;
  const id = (el as HTMLAnchorElement).getAttribute('data-link') || '';
  const heading = document.getElementById(decodeURIComponent(id));
  heading?.focus({ preventScroll: true });

  if (heading) {
    // 页面滚动到对应锚点的位置
    window.scrollTo({
      top: heading.offsetTop - 30,
      behavior: 'smooth',
    });

    currentActiveLink.value = id;
    window.location.hash = `#${id}`;
  }
  event.preventDefault();
  event.stopPropagation();
  return false;
};
</script>
