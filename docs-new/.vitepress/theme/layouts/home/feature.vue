<template>
  <div class="grid md:grid-cols-3 max-w-screen-lg mx-auto gap-10 mt-10 px-5">
    <div class="flex gap-4 items-start flex-col" v-for="(item, index) in features" :key="index + 'feature'">
      <span class="text-violet-600 bg-violet-500/10 p-3 rounded-full">
        <component :is="item.icon"/>
      </span>
      <div>
        <h3 class="font-semibold text-xl">{{item.title}}</h3>
        <p class="mt-1 text-gray-500">
          {{item.details}}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  features: Array<{
    icon: string;
    title: string;
    details: string
  }>,
});
</script>
