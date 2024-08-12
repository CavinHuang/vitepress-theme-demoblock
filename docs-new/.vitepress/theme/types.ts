export interface SocialLink {
  icon: SocialLinkIcon
  link: string
}

export type SocialLinkIcon =
  | 'discord'
  | 'facebook'
  | 'github'
  | 'linkedin'
  | 'slack'
  | 'twitter'
  | 'x'
  | 'languages'
  | 'gitlab'

export type SocialLinkSize = 'small' | 'medium'

// ================== Nav ==================
export type MenuItem = MenuItemWithLink | MenuItemWithChildren

export interface MenuItemWithLink {
  text: string
  link: string
}

export interface MenuItemWithChildren {
  text?: string
  base?: string
  items: MenuItemChild[]
}

export type MenuItemChild = MenuItemWithLink | MenuItemChildWithChildren

export interface MenuItemChildWithChildren {
  text?: string
  items: MenuItemWithLink[]
}

export type LocaleLinkItem = MenuItemWithLink & {
  repo?: string
  isTranslationsDesc?: boolean
}

export type NavItem = NavItemWithLink

export type NavItemWithLink = MenuItemWithLink & {
  /**
   * 被匹配的路径 我们不能在这里使用实际的RegExp对象，因为它不可序列化
   */
  activeMatch?: string
}

export interface NavItemWithChildren {
  text?: string
  activeMatch?: string
  items: (NavItemWithLink | MenuItemChildWithChildren)[]
}

// =========================== Sidebar ===========================
export type SidebarConfig = SidebarGroup[] | MultiSidebarConfig

export interface MultiSidebarConfig {
  [path: string]: SidebarGroup[];
}

export interface SidebarGroup {
  text: string;
  base?: string;
  link: string
  items: MenuItemWithLink[]
}
