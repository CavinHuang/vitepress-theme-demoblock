import { defineConfig, defineConfigWithTheme } from 'vitepress';
import { mdPlugin } from './theme/md-plugin';
import baseConfig from './theme/config/baseConfig';
import { Config as ThemeConfig } from './theme/config';
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { sidebars, navs, head } from './configs';
import { SidebarConfig } from './theme/types';
import { VitePluginDemoblock } from './theme/vite-plugin/vite-plugin-demo-block';
import { VitePluginDemoReadCode } from './theme/vite-plugin/vite-plugin-demo-read-code';

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
  // 继承默认配置
  extends: baseConfig,

  title: "My Awesome Project",
  description: "A VitePress Site",

  head,

  markdown: {
    theme: {
      light: 'github-dark-dimmed',
      dark: 'github-dark-dimmed',
    },
    config: md => mdPlugin(md as any)
  },

  themeConfig: {
    nav: navs(),
    sidebar: sidebars() as SidebarConfig,
  },

  vite: {
    css: {
      postcss: {
        plugins: [tailwindcss, autoprefixer]
      }
    },
    plugins: [
      VitePluginDemoReadCode(),
      VitePluginDemoblock(),
      AutoImport({
        imports: ["vue", "vitepress"],
        eslintrc: {
          enabled: true,
          filepath: "./.eslint-imports.json",
        },
        resolvers: [],
      }),
      Components({
        resolvers: [],
      }),
    ]
  }
});
