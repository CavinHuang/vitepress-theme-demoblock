import { ref, computed } from 'vue'
import { useRoute, useData } from 'vitepress'
import { useConfig } from './config'
import { MenuItemWithLink, SidebarConfig, SidebarGroup } from '../types'
import { ensureStartingSlash, normalizeLink } from '../utils'

export function getSidebar(
  sidebar: SidebarConfig | undefined,
  path: string
): SidebarGroup[] {
  if (Array.isArray(sidebar)) {
    return sidebar
  }

  path = ensureStartingSlash(path)

  const dir = Object.keys(sidebar || {})
    .sort((a, b) => {
      return b.split('/').length - a.split('/').length
    })
    .find((dir) => {
      return path.startsWith(ensureStartingSlash(dir))
    })


  if (dir && sidebar) {
    const sidebarConfig = sidebar[dir]
    return Array.isArray(sidebarConfig)
      ? sidebarConfig
      : sidebarConfig
  }
  return []
}

export function useSidebar() {
  const route = useRoute()
  const { config } = useConfig()
  const { frontmatter } = useData()

  const isOpen = ref(false)

  const sidebar = computed(() => {
    const sidebarConfig = config.value.sidebar
    const relativePath = route.data.relativePath

    return sidebarConfig ? getSidebar(sidebarConfig, relativePath) : []
  })

  const hasSidebar = computed(
    () => frontmatter.value.sidebar !== false && sidebar.value.length > 0
  )

  function open() {
    isOpen.value = true
  }

  function close() {
    isOpen.value = false
  }

  function toggle() {
    isOpen.value ? close() : open()
  }

  return {
    isOpen,
    sidebar,
    hasSidebar,
    open,
    close,
    toggle
  }
}


function genBreadcrumb(sidebars: SidebarGroup[], pagePath: string) {
  const breadcrumb: MenuItemWithLink[] = []

  for (const group of sidebars) {
    const _breadcrumb:  MenuItemWithLink[] = [{
      text: group.text,
      link: group.link
    }]
    for (const item of group.items) {
      if (normalizeLink(item.link) === pagePath) {
        const _item = {
          text: item.text,
          link: item.link
        }
        _breadcrumb.push(_item)
        return _breadcrumb
      }
    }
  }

  return breadcrumb
}

export const useBreadcrumb = () => {
  const route = useRoute()
  const { sidebar } = useSidebar()
  const breadcrumb = computed(() => {
    const { frontmatter } = route.data
    const sidebarItems = sidebar.value

    if (frontmatter.home) {
      return []
    }

    const pagePath = normalizeLink(route.data.relativePath)
    return genBreadcrumb(sidebarItems, pagePath)
  })

  return {
    breadcrumb
  }
}
