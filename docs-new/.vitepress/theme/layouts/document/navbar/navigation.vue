<template>
  <div class="hidden lg:flex px-12 h-12 pl-14">
    <div class="h-full flex text-sm space-x-6">
      <template v-for="menu in navMenus" :key="menu.activeMatch">
        <a
          class="group relative h-full flex items-center text-gray-800 dark:text-gray-200 font-semibold"
          :href="menu.link || ''"
        >
          {{menu.text}}
          <div v-if="isActiveLink(menu.link)" class="absolute bottom-0 h-[1.5px] w-full bg-primary dark:bg-primary-light"></div>
        </a>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRoute } from 'vitepress';
import { computed } from 'vue';
import { useConfig } from '../../../composables/config';
import { normalizeLink } from '../../../utils';

const route = useRoute()
const { config } = useConfig()

const navMenus = computed(() => {
  return config.value.nav
})

const isActiveLink = (link: string) => {
  return route.path.includes(normalizeLink(link))
}
</script>
