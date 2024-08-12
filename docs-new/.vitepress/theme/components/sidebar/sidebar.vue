<template>
  <div id="sidebar" class="z-30 hidden lg:block fixed bottom-0 right-auto w-[18rem] -ml-4 border-r top-0 border-gray-500/5 dark:border-gray-50/5">
    <div id="sidebar-content" class="absolute inset-0 z-10 stable-scrollbar-gutter overflow-auto pr-8 pb-10">
      <div class="relative lg:text-sm lg:leading-6">
        <Logo />
        <Navigation />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Logo from './logo.vue';
import Navigation from './navigation.vue';
</script>

