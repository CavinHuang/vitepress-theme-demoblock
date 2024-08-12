import { LocaleLinkItem, NavItem, SidebarConfig, SocialLink } from "../types"

export interface Config {
  /**
   * The appearance option to enable/disable light/dark mode.
   * 启用/禁用亮/暗模式的外观选项。
   *
   * @default true
   */
  appearance?: boolean

  /**
   * 在导航栏末尾显示的社交链接。非常适合放置到社交服务的链接，如Gitlab等。
   */
  socialLinks?: SocialLink[]

  /**
   * 导航栏。
   */
  nav?: NavItem[]

  /**
   * 侧边栏。
   */
  sidebar?: SidebarConfig

  /**
   * 搜索配置（保留）
   */
  // algolia?: AlgoliaSearchOptions
}
