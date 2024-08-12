<template>
  <div class="max-w-2xl text-center mx-auto py-24 px-5">
    <span class="p-4 bg-violet-500 text-white inline-flex rounded-full"><HomeMain /></span>
    <h1 class="text-3xl md:text-6xl font-bold tracking-tight mt-2">{{ slogen }}</h1>
    <p class="mt-10 text-gray-500 md:text-lg">{{ tagline }}</p>
    <div class="flex justify-center flex-col md:flex-row mt-16 gap-3">
      <span class="bg-violet-100 flex gap-5 items-center justify-between py-3 px-5 rounded-full">
        <code class="text-violet-900 text-left whitespace-nowrap overflow-hidden overflow-ellipsis">npm install -g icc-ui</code>
        <span class="text-violet-900">
          <Copy width="15" height="15" />
        </span>
      </span>
      <a
        class="bg-violet-500 justify-center inline-flex items-center gap-2 rounded-full py-3 px-6 text-white font-medium hover:bg-violet-700"
        href="/components/"
      >
        <span>Documentation</span>
        <ArrowRight width="15" height="15" />
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ArrowRight, Copy } from "lucide-vue-next";
import HomeMain from "../../components/icons/HomeMain.vue";
defineProps({
  slogen: String,
  tagline: String,
});
</script>
