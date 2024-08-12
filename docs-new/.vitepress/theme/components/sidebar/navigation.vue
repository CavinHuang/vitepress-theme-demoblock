<template>
  <ul class="" id="navigation-items">
    <template v-for="(item, index) in sidebar" :key="item.link">
      <NavigationGroup :class="{'mt-12 lg:mt-8': index > 0}" :item="item" v-if="item.items" />
      <NavigationItem :item="item" v-else/>
    </template>
  </ul>
</template>

<script lang="ts" setup>
import { watchEffect } from 'vue';
import { useSidebar } from '../../composables/sidebar';
import NavigationGroup from './navigation-group.vue';
import NavigationItem from './navigation-item.vue';

const { sidebar } = useSidebar()
</script>
