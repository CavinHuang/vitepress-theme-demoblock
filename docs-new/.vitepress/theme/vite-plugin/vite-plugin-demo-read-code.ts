import { Plugin } from "vite"
import { codePattern, transformFilePathToCode } from "./remark"
import { DemoblockOptions } from "./vite-plugin-demo-block"


export const VitePluginDemoReadCode = (): Plugin => {
  const options: DemoblockOptions = {
    env: 'vitepress',
    root: ''
  }
  return {
    name: 'vite-plugin-demo-read-code',
    enforce: 'pre',
    async configResolved(config) {
      const isVitepress = config.plugins.find(p => p.name === 'vitepress')
      options.env = isVitepress ? 'vitepress' : 'vite'
      options.root = config.root
    },
    async transform(code, id) {
      if (id.endsWith('.md')) {
        const { code: transformedCode } = await transformFilePathToCode(id, code, options)
        return { code: transformedCode, map: null }
      }
    }
  }
}
