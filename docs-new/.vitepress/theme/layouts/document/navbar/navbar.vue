<template>
  <div id="navbar" class="z-20 fixed lg:sticky top-0 w-full">
    <div id="navbar-transition" :class="['absolute w-full h-full backdrop-blur flex-none transition-colors duration-500', bgClass]"></div>
    <div class="max-w-8xl mx-auto relative lg:pl-[19rem]">
      <div class="relative">
        <div class="absolute w-full h-full border-b border-gray-500/5 dark:border-gray-300/[0.06]"></div>
        <div class="relative">
          <div
            class="flex items-center lg:px-12 h-16 border-b border-gray-500/5 dark:border-gray-300/[0.06] mx-4 lg:mx-0">
            <div class="h-full relative flex-1 flex items-center gap-x-4">
              <div class="flex-1 flex items-center gap-x-4 lg:hidden">
                <a href="/">ICC UI</a>
              </div>

              <!-- 搜索框 -->
              <div
                class="hidden lg:block mx-px relative flex-1 bg-white dark:bg-gray-900 pointer-events-auto rounded-lg">
                <button type="button"
                  class="w-full flex items-center text-sm leading-6 rounded-lg py-1.5 pl-2.5 pr-3 shadow-sm text-gray-400 dark:text-white/50 bg-background-light dark:bg-background-dark dark:brightness-[1.1] dark:ring-1 dark:hover:brightness-[1.25] ring-1 ring-gray-400/20 hover:ring-gray-600/25 dark:ring-gray-600/30 dark:hover:ring-gray-500/30 focus:outline-primary"
                  id="search-bar-entry">
                  <Search width="16" height="16"
                    class="ml-1 mr-3 flex-none text-gray-700 hover:text-gray-800 dark:text-gray-300 hover:dark:text-gray-200" />
                  Search or ask... <span class="ml-auto flex-none text-xs font-semibold">⌘K</span>
                </button>
              </div>

              <!-- 全局外链导航 -->
              <div class="flex-1 relative hidden lg:flex items-center ml-auto justify-end space-x-10">
                <nav class="text-sm">
                  <ul class="flex space-x-6 items-center">
                    <li><a href="/" class="font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300" target="_blank">函数文档</a></li>
                    <li><a href="/" class="font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300" target="_blank">vue3 hooks文档</a></li>
                  </ul>
                </nav>

                <div class="flex items-center">
                  <!-- gitlab -->
                  <button class="group p-2 flex items-center justify-center">
                    <Gitlab width="16" height="16" class="h-4 w-4 block text-gray-400 dark:hidden group-hover:text-gray-600"/>
                  </button>
                  <!-- 主题切换 -->
                  <button class="group p-2 flex items-center justify-center" @click="handleToggleTheme">
                    <Sun width="16" height="16" class="h-4 w-4 block text-gray-400 dark:hidden group-hover:text-gray-600"/>
                    <Moon width="16" height="16" class="h-4 w-4 hidden dark:block text-gray-500 dark:group-hover:text-gray-300"/>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- 小屏幕显示导航 -->
          <div class="flex items-center h-14 py-4 px-5 lg:hidden">
            <button type="button" class="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
              <span class="sr-only">Navigation</span>
              <Menu class="h-4"/>
            </button>
            <div class="ml-4 flex text-sm leading-6 whitespace-nowrap min-w-0 space-x-3">
                <div class="flex items-center space-x-3">
                  <span>Getting Started</span>
                  <ChevronRight width="12" height="24" class="h-5"/>
                </div>
                <div class="font-semibold text-gray-900 truncate dark:text-gray-200">Quickstart</div>
              </div>
            </div>
        </div>
        <Navigation />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Search, Sun, Moon, Menu, ChevronRight, Gitlab } from 'lucide-vue-next'
import { computed, onBeforeMount, onMounted, ref } from 'vue';
import Navigation from './navigation.vue';

const theme = ref<'light' | 'dark'>('light')
const handleToggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  document.documentElement.classList.toggle('dark')
}
const isFixed = ref(false)
const bgClass = computed(() => {
  return (
    isFixed.value
    ? 'bg-background-light supports-backdrop-blur:bg-background-light/95 dark:bg-background-dark/75'
    : 'supports-backdrop-blur:bg-background-light/60 dark:bg-transparent'
  )
})

const handleScroll = () => {
  isFixed.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onBeforeMount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
