// https://vitepress.dev/guide/custom-theme
import Layout from './layouts/layout.vue'
import type { Theme } from 'vitepress'

import './styles/index.scss';
import './styles/global.css';
import { withConfigProvider } from './composables/config';
import Demo from './components/code-demo/Demo.vue';
import DemoBlock from './components/code-demo/DemoBlock.vue';
import HomeOne from './components/icons/homeOne.vue';
import HomeTwo from './components/icons/homeTwo.vue';
import HomeThree from './components/icons/homeThree.vue';

const registerComponents: Array<[string, Component]> = [
  ['CodeDemo', Demo],
  ['DemoBlock', DemoBlock],
  ['HomeOne', HomeOne],
  ['HomeTwo', HomeTwo],
  ['HomeThree', HomeThree],
]

export default {
  Layout: withConfigProvider(Layout),
  enhanceApp({ app, router, siteData }) {
    // ...
    registerComponents.forEach(([name, component]) => {
      app.component(name, component)
    })
  }
} satisfies Theme


if (window) {
  window.onload = function () {
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement
      if (target.closest('.details.custom-block')) {
        const block = target.closest('.details.custom-block')
        const content = block?.querySelector('.detail-content')
        const button = block?.querySelector('button')
        const svg = button?.querySelector('svg')

        content?.classList.toggle('hidden')
        svg?.classList.add('duration-200')
        svg?.classList.toggle('rotate-90')
        button?.setAttribute('aria-expanded', content?.classList.contains('hidden') ? 'false' : 'true')
      }
    }, false)
  }
}
