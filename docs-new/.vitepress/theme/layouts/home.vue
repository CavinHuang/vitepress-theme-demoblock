<template>
  <div class="flex flex-1 flex-col h-[100vh] overflow-hidden">
    <Header />
    <div class="fixed inset-0 [background:radial-gradient(circle_at_15%_50%,rgb(237,233,254),rgb(255_255_255/0)25%),radial-gradient(circle_at_85%_30%,rgb(216,243,246),rgb(255_255_255/0)25%)] opacity-40 from-violet-100 -z-10"></div>
    <MainBlock :slogen="page.frontmatter.adv.slogen" :tagline="page.frontmatter.adv.tagline"/>
    <Feature :features="page.frontmatter.features"/>
    <div class="flex-1"></div>
    <footer class="h-20 bg-slate-100">
      <div class="max-w-screen-lg mx-auto flex justify-between items-center h-full px-5">
        <span class="text-gray-500">© 2024 iCC Grow</span>
        <span class="text-gray-500">Made with ❤️ by Front Team</span>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Header from './home/header.vue';
import MainBlock from './home/main-block.vue';
import Feature from './home/feature.vue';

const { page } = useData()
</script>
