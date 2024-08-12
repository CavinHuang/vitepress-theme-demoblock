<template>
  <div class="relative antialiased text-gray-500 dark:text-gray-400">
    <span class="fixed inset-0 bg-background-light dark:bg-background-dark"></span>
    <LightBgIcon />
    <DarkBgIcon />
    <Navbar />
    <div class="px-4 mx-auto max-w-8xl lg:px-8">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import LightBgIcon from './light-bg-icon.vue'
import DarkBgIcon from './dark-bg-icon.vue'
import Navbar from './navbar/navbar.vue';
</script>
