<script setup lang="ts">
import { useData } from 'vitepress'
import Home from './home.vue';
import DocumentLayout from './document.vue';

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
</script>

<template>
  <Home v-if="frontmatter.home"/>
  <DocumentLayout v-else/>
</template>
