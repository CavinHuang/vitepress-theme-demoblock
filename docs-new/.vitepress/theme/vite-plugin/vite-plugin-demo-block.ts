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
      // 加载虚拟代码文件
      if (codePattern.test(id)) {
        return id
      }
      // 加载虚拟代码块变量
      if (virtualIdPattern.test(id)) {
        return `\0${id}`
      }
    },
    load(id) {
      if (codePattern.test(id)) {
        const blockId = '/' + path.relative(options.root, id)
        const block =  Demoblocks.get(id) || Demoblocks.get(blockId)
        return block
      }
      if (virtualIdPattern.test(id)) {
        // virtual:id:_guide_index-md-demo-24ff0202-vue
        let blockId = id.replace('virtual:id:', '').replace(/_/g, '/').replace(/-/g, '.')
        blockId = blockId.slice(2, blockId.length)
        blockId = '/' + path.normalize(blockId)
        const _id = path.join(options.root, blockId)
        const blockIdContent = Demoblocks.get(String(_id))
        const blockIdContent2 = Demoblocks.get(String(blockId.trim()))
        const block = blockIdContent ? blockIdContent : blockIdContent2

        return `export default { source: \`${block}\` }`
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
        const mods:ModuleNode[] = []
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
