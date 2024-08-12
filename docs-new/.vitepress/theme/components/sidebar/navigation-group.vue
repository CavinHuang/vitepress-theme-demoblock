<template>
  <div>
    <h5 class="pl-4 mb-3.5 lg:mb-2.5 font-semibold text-gray-900 dark:text-gray-200">{{ item.text }}</h5>
    <template v-for="child in item.items">
      <NavigationItem :item="child as any" />
    </template>
  </div>
</template>
<script lang="ts" setup>
import { MenuItemWithChildren, MenuItemWithLink } from '../../types';
import NavigationItem from './navigation-item.vue';

withDefaults(defineProps<{
  item: MenuItemWithChildren
}>(), {})

</script>
