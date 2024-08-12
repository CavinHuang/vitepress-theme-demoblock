/**
 * 这个文件是为了从 VitePress 项目的配置文件中引入。
 *
 * 它在 Node.js 中运行。
 */

import { UserConfig } from "vitepress";

const deps = [];

/**
 * @type {import('vitepress').UserConfig}
 */
const config: UserConfig = {
  scrollOffset: ['header', '.VPLocalNav'],

  vite: {
    ssr: {
      noExternal: deps
    },
    optimizeDeps: {
      exclude: deps
    }
  },

  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/logo.svg'
      }
    ]
  ],

  markdown: {
    headers: {
      level: [1, 2, 3]
    }
  },

  transformHead({ assets }) {
    const font = assets.find(file =>
      /inter-roman-latin\.\w+\.woff2/.test(file)
    );
    if (font) {
      return [
        [
          'link',
          {
            rel: 'preload',
            href: font,
            as: 'font',
            type: 'font/woff2',
            crossorigin: ''
          }
        ]
      ];
    }
  },

  shouldPreload(link) {
    // make algolia chunk prefetch instead of preload
    return !link.includes('Algolia');
  }
};

export default config;
