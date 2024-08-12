<template>
  <ClientOnly>
    <div ref="demoblock" :class="['demoblock', blockClass, customClass ? customClass : '']" class="border-gray-100 dark:border-gray-600 border rounded-md transition-all">
      <div class="demoblock-view px-6 py-6">
        <slot />
      </div>
      <div class="h-[1px] bg-gray-50 dark:bg-gray-600"></div>
      <div class="flex p-3 justify-end">
        <Tooltip placement="top" :content="locale['copy-code']">
          <Copy class="w-4 h-4 text-gray-400 hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400 cursor-pointer" @click="onCopy" />
        </Tooltip>
        <Tooltip placement="top" :content="locale['view-source']">
          <Code2Icon class="w-4 h-4 text-gray-400 hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400 cursor-pointer ml-4" @click="onControlClick" />
        </Tooltip>
      </div>
      <CollapseTransition>
        <div v-show="isExpanded" ref="source" class="demoblock-source px-6">
          <div class="highlight">
            <slot name="highlight" />
          </div>
        </div>
      </CollapseTransition>
      <Transition name="demoblock-fade-in-linear">
        <div
          v-show="isExpanded"
          ref="control"
          class="sticky right-0 left-0 bottom-0 mt-[-1px] h-[44px] flex justify-center items-center text-gray-300 border-t border-gray-50 dark:border-gray-600 bg-background-light dark:bg-background-dark cursor-pointer rounded-bl-md rounded-br-md demoblock-control hover:text-primary"
          @click="onControlClick"
        >
          <ChevronsDown class="w-5 h-5"/>
          <span class="control-text">{{ locale['hide-source'] }}</span>
        </div>
      </Transition>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { useRoute, useData } from 'vitepress'
import { ref, computed, watch, getCurrentInstance, onMounted } from 'vue'
import { useClipboard } from '@vueuse/core'
import message from './message'
import Tooltip from './Tooltip.vue'
import CollapseTransition from './CollapseTransition.vue'
import { Copy, Code2Icon, ChevronsDown  } from 'lucide-vue-next'

const props = defineProps({
  customClass: String,
  sourceCode: String,
  options: String, // JSON.stringify
  blockId: Object
})


// ====================== Hooks ======================
const { copy } = useClipboard()
const data = useData()
const route = useRoute()

// ====================== Lifecycle ======================
let instance
onMounted(() => {
  instance = getCurrentInstance()
})
watch(
  () => route.path,
  path => {
    pathArr.value = path.split('/')
  }
)

// ====================== Components ======================
const pathArr = ref(route.path.split('/'))
const component = computed(() => pathArr.value[pathArr.value.length - 1].split('.')[0])
const blockClass = computed(() => {
  return `demo-${component.value}`
})

const source = ref(null)
const control = ref(null)
const demoblock = ref(null)

// Expand
const isExpanded = ref(false)
const onControlClick = () => {
  isExpanded.value = !isExpanded.value
}

const locale = computed(() => {
  return (
    data.theme.value.demoblock?.[data.localeIndex.value] ?? {
      'view-source': '查看源代码',
      'hide-source': '隐藏源代码',
      'edit-in-editor': '在 Playground 中编辑',
      'edit-on-github': '在 Github 中编辑',
      'copy-code': '复制代码',
      'copy-success': '复制成功',
      'copy-error': '复制失败'
    }
  )
})

// Copy
const onCopy = async () => {
  const options = JSON.parse(props.options || '{}')
  try {
    console.log(props.blockId)
    copy(props.blockId?.source || '')
    if (options.onCopySuccess) {
      const onCopySuccess = eval(options.onCopySuccess)
      onCopySuccess(instance, locale.value['copy-success'])
    } else {
      message.success(locale.value['copy-success'])
    }
  } catch (err) {
    if (options.onCopyError) {
      const onCopyError = eval(options.onCopyError)
      onCopyError(instance, locale.value['copy-error'])
    } else {
      message.error(locale.value['copy-error'])
    }
  }
}


</script>
