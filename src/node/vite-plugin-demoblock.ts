import type { Plugin, ModuleNode } from 'vite'
import path from 'path'
import fs from 'node:fs'
import { codePattern, Demoblocks, transformCodeToComponent, virtualIdPattern } from './remark'

export interface DemoblockOptions {
  env: 'vite' | 'vitepress'
  root: string
}

export function VitePluginDemoblock(): Plugin {
  const options: DemoblockOptions = {
    env: 'vitepress',
    root: ''
  }

  return {
    name: 'vite-plugin-demoblock',
    enforce: 'pre',
    async configResolved(config) {
      const isVitepress = config.plugins.find(p => p.name === 'vitepress')
      options.env = isVitepress ? 'vitepress' : 'vite'
      options.root = config.root
    },
    resolveId(id) {
      if (codePattern.test(id)) {
        return id
      }
      if (virtualIdPattern.test(id)) {
        return `\0${id}`
      }
    },
    load(id) {
      if (codePattern.test(id)) {
        const blockId = '/' + path.relative(options.root, id)
        console.log('🚀 ~ load 222222~ blockId:', blockId)
        return Demoblocks.get(id) || Demoblocks.get(blockId)
      }
      if (virtualIdPattern.test(id)) {
        // virtual:id:_guide_index-md-demo-24ff0202-vue
        const blockId = id.replace('virtual:id:', '').replace(/_/g, '/').replace(/-/g, '.')
        const _id = path.join(options.root, blockId)
        console.log('🚀 ~ load 333333~ blockId:', blockId)
        console.log(id)
        const blockIdContent = Demoblocks.get(String(_id))
        console.log('🚀 ~ load ~ blockIdContent:', blockIdContent)
        const blockIdContent2 = Demoblocks.get(String(blockId.trim()))
        console.log('🚀 ~ load ~ blockIdContent2:', blockIdContent2)
        const block = blockIdContent ? blockIdContent : blockIdContent2
        console.log('🚀 ~ load ~ block:', block)
        console.log(Demoblocks.get('/guide/index.md.demo.24ff0202.vue'))
        console.log('🚀 ~ load ~ Demoblocks:', Demoblocks)

        return `export default { source: "${JSON.stringify(block)}" }`
      }
    },
    async transform(code, id) {
      if (id.endsWith('.md')) {
        const { code: transformedCode } = await transformCodeToComponent(id, code, options)
        return { code: transformedCode, map: null }
      }
    },
    async handleHotUpdate(ctx) {
      const { file, server, timestamp } = ctx
      if (file.endsWith('.md')) {
        const { blocks } = await transformCodeToComponent(
          file,
          fs.readFileSync(file, 'utf8'),
          options
        )
        const mods = []
        const invalidatedModules: Set<ModuleNode> = new Set()
        for (const block of blocks) {
          const blockId = block.absId
          const mod = server.moduleGraph.getModuleById(blockId)
          if (mod) {
            mods.push(mod)
            server.moduleGraph.invalidateModule(mod, invalidatedModules, timestamp, true)
            // server.reloadModule(mod)
          }
        }
        // server.ws.send({
        //   type: 'update',
        //   updates: mods
        //     .map(mod => {
        //       if (!mod) return null
        //       return {
        //         acceptedPath: mod.url,
        //         path: mod.url,
        //         timestamp,
        //         type: 'js-update'
        //       }
        //     })
        //     .filter(Boolean)
        // })
      }
    }
  }
}
