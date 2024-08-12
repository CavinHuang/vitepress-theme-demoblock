import { Component, computed, defineComponent, h, inject, InjectionKey, provide, Ref } from "vue";

import { useData } from 'vitepress'
import { Config } from "../config";
import { normalizeLink } from "../utils";
import { MenuItem, MenuItemChild, MultiSidebarConfig, SidebarConfig, SidebarGroup } from "../types";

const configSymbol: InjectionKey<Ref<Config>> = Symbol('IccUiDocConfig')

function normalizeMenuItem<T extends MenuItem | MenuItemChild>(item: T): T {
  if ('link' in item) {
    return Object.assign({}, item, {
      link: normalizeLink(item.link)
    })
  } else {
    return Object.assign({}, item, { items: item.items.map(normalizeMenuItem) })
  }
}

export function addBase(items: SidebarGroup[], _base?: string): SidebarGroup[] {
  return [...items].map((_item) => {
    const item = { ..._item }
    const base = item.base || _base
    if (base && item.link) item.link = base + item.link
    if (item.items) item.items = addBase(item.items as SidebarGroup[], base)
    return item
  })
}

function normalizeSideBar(sidebar: SidebarConfig, path: string): SidebarConfig {
  if (Array.isArray(sidebar)) {
    return sidebar.map(normalizeMenuItem)
  } else {
    const ret: MultiSidebarConfig = {}

    const base = sidebar.base || path
    const items = sidebar.items

    if (items) {
      return addBase(items, base as unknown as string)
    }

    for (const key in sidebar) {
      ret[key] = normalizeSideBar(sidebar[key], path) as SidebarGroup[]
    }
    return ret
  }
}

function resolveConfig(config: Config, relativePath: string): Config {
  return Object.assign(
    {
      appearance: true
    },
    config,
    {
      nav: config.nav?.map(normalizeMenuItem),
      sidebar: config.sidebar && normalizeSideBar(config.sidebar, relativePath)
    }
  )
}

export function withConfigProvider(App: Component) {
  return defineComponent({
    name: 'IccUiConfigProvider',
    setup(_, { slots }) {
      const { theme, page } = useData()
      const relativePath = page.value.relativePath
      const config = computed(() => resolveConfig(theme.value as Config, relativePath))
      provide(configSymbol, config)
      return () => h(App, {}, slots)
    }
  })
}

export function useConfig() {
  return {
    config: inject(configSymbol)!
  }
}
