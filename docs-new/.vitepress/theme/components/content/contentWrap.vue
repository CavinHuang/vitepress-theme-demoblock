<template>
  <div id="content-container" class="icc-ui-doc">
    <div class="flex flex-row items-stretch gap-12 pt-36 lg:pt-5">
      <MarkdownContent />
      <TableOfContents />
    </div>
  </div>
</template>

<script lang="ts" setup>
import MarkdownContent from './markdown-content.vue';
import TableOfContents from './table-of-contents.vue';
</script>
