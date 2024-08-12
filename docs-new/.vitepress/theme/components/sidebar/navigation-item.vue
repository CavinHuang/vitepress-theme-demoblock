<template>
  <li>
    <a :class="['group mt-2 lg:mt-0 flex items-center pr-3 py-1.5 cursor-pointer focus:outline-primary dark:focus:outline-primary-light space-x-3 rounded-lg', linkClasses]"
      style="padding-left:1rem" :href="item.link">
      <div class="flex-1 flex items-center space-x-2.5">
        <div>{{ item.text }}</div>
      </div>
    </a>
  </li>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { MenuItemWithLink } from '../../types';
import { useRoute } from 'vitepress';
import { normalizeLink } from '../../utils';

const props = withDefaults(defineProps<{
  item: MenuItemWithLink
}>(), {})

const route = useRoute()

const isActiveLink = computed(() => {
  return route.path === normalizeLink(props.item.link)
})

const linkClasses = computed(() => {
  return isActiveLink.value ? 'bg-primary/10 text-primary font-semibold dark:text-primary-light dark:bg-primary-light/10' : 'hover:bg-gray-600/5 dark:hover:bg-gray-200/5 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300'
})

</script>
<style lang="scss" scoped></style>
