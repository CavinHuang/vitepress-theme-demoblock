<template>
  <div class="leading-6 mt-14">
    <div class="mb-12 px-0.5 flex items-center text-sm font-semibold text-gray-700 dark:text-gray-200">
      <a
        class="flex items-center space-x-3 group"
        :href="links.prev?.link"
        v-if="links.prev"
      >
        <svg viewBox="0 0 3 6" class="h-1.5 stroke-gray-400 overflow-visible group-hover:stroke-gray-600 dark:group-hover:stroke-gray-300">
          <path d="M3 0L0 3L3 6" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        <span class="group-hover:text-gray-900 dark:group-hover:text-white">{{ links.prev.text }}</span>
      </a>

      <a
        class="flex items-center ml-auto space-x-3 group"
        :href="links.next?.link"
        v-if="links.next"
      >
        <span class="group-hover:text-gray-900 dark:group-hover:text-white">{{links.next.text}}</span>
        <svg viewBox="0 0 3 6" class="rotate-180 h-1.5 stroke-gray-400 overflow-visible group-hover:stroke-gray-600 dark:group-hover:stroke-gray-300">
          <path d="M3 0L0 3L3 6" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </a>
    </div>
    <footer class="justify-end pt-10 border-t border-gray-100 sm:flex dark:border-gray-800/50 pb-10">
      <div class="sm:flex">
        <a
          href="https://icc.link"
          target="_blank"
          rel="noreferrer"
          class="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
        >
          Powered by ICC
        </a>
      </div>
    </footer>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { useSidebar } from '../../composables/sidebar';
import { MenuItemWithLink, SidebarGroup } from '../../types';
import { isActive } from '../../utils';
import { useData } from 'vitepress';

function getFlatSideBarLinks(sidebar: SidebarGroup[]): MenuItemWithLink[] {
  const links: MenuItemWithLink[] = [];
  for (const group of sidebar) {
    for (const link of group.items) {
      links.push(link);
    }
  }
  return links;
}

const { sidebar } = useSidebar();

const { page } = useData();

const links = computed(() => {
  const candidates = getFlatSideBarLinks(sidebar.value);
  const index = candidates.findIndex(link =>
    isActive(page.value.relativePath, link.link)
  );
  return {
    prev: candidates[index - 1],
    next: candidates[index + 1]
  };
});

</script>
