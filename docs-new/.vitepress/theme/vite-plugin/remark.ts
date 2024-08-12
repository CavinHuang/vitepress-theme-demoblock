import { unified } from 'unified'
// remark插件添加对markdown解析的支持。
import remarkParse from 'remark-parse'
// remark插件添加对markdown frontmatter的支持。
import remarkFrontmatter from 'remark-frontmatter'
// remark插件添加对markdown directive的支持。
import remarkDirective from 'remark-directive'
// remark插件添加对markdown stringify的支持。
import remarkStringify from 'remark-stringify'
import type { Node } from 'unist'
// 遍历树 https://github.com/syntax-tree/unist-util-visit
import { visit } from 'unist-util-visit'
import path from 'path'
import os from 'os'
// 超快唯一哈希生成器 https://github.com/bevacqua/hash-sum
import h from 'hash-sum'
import fs from 'fs'
import { ScriptSetupMatchPattern } from './patterns'
import { processIncludes } from './processIncludes'

export const demoPattern = /:::demo([\s\S]*?):::/
export const codePattern = /.md.demo.[a-zA-Z0-9]+\.(vue|jsx|tsx)$/
export const virtualIdPattern = /virtual:id:(\w|_)+(-md-demo-[a-zA-Z0-9]+-(vue|jsx|tsx))$/


// 生成哈希
export const hash = (val: string) => h(val)
// 生成虚拟文件名
export const combineVirtualFilename = (id: string, name: string, lang: string) =>
  `${id}.demo.${name}.${lang}`

export const componentsExample = 'examples'

interface Tree extends Node {
  [key: string]: any
}

/**
 * 把代码转成组件
 * @param id
 * @param code
 * @param options
 * @returns
 */
export async function transformCodeToComponent(
  id: string,
  code: any,
  options: Record<string, any>
) {
  const blocks: Array<Record<string, any>> = []

  function remarkDemo() {
    return (tree: Tree) => {
      // console.log('tree', tree)
      let seed = 0
      const scriptSetup: Record<string, any> = {
        index: -1,
        content: ''
      }

      visit(tree, (node, index) => {
        if (node.type === 'html') {
          const matches = node.value.match(ScriptSetupMatchPattern)
          if (!matches) return
          scriptSetup.index = index
          scriptSetup.content = matches?.[4] ?? ''
        }

        if (node.type === 'containerDirective' && node.name === 'demo') {
          seed++
          const name = hash(`${id}-demo-${seed}`)
          blocks.push({
            lang: node.children[0]?.lang,
            value: node.children[0]?.value,
            name
          })
          node.name = `demo render-demo-i${name}`
        }
      })

      if (blocks.length <= 0) return
      const appendCode = blocks
        .map(block => {
          const filename = combineVirtualFilename(id, block.name, block.lang)
          const blockId = ('/' + path.relative(options.root, filename))
            .replace(/\/|\\/g, '_')
            .replace(/\./g, '-')
          return `import RenderDemoI${block.name} from '${filename}';
import fileIdV${block.name} from 'virtual:id:${blockId}'`
        })
        .join(os.EOL)
      if (scriptSetup.index !== -1) {
        const node = tree.children[scriptSetup.index]
        node.value = node.value.replace(
          ScriptSetupMatchPattern,
          (match: string, p1: string, p2: string, p3: string, p4: string, p5: string) =>
            `${p1}${os.EOL}${appendCode}${os.EOL}${p4}${p5}`
        )
      } else {
        tree.children.push({
          type: 'html',
          value: `<script setup>${os.EOL}${appendCode}${os.EOL}</script>`
        })
      }
    }
  }
  code = processIncludes(code, id, options.root)
  const file = await unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkDirective)
    .use(remarkStringify)
    .use(remarkDemo)
    .process(code)

  // console.log(String(file))

  for (const block of blocks) {
    const filename = combineVirtualFilename(id, block.name, block.lang) // component file id
    const blockId = '/' + path.relative(options.root, filename)
    block.absId = filename
    block.relId = blockId
    Demoblocks.set(blockId, block.value)
  }

  const fileId = '/' + path.relative(options.root, id)
  const _blocks = blocks.map(({ lang, name, id }) => ({ lang, name, id }))
  FileCaches.set(fileId, _blocks)

  const c = String(file).replace(/\\:::/g, ':::')
  return { code: c, blocks }
}

/**
 * 把文件路径转成代码
 * @todo可以把代码直接用于组件生成减少一次代码解析
 *
 * @param id
 * @param code
 * @param options
 * @returns
 */
export async function transformFilePathToCode(
  id: string,
  code: any,
  options: Record<string, any>
) {
  let contentCode = code
  function remarkDemo() {
    return (tree: Tree) => {
      let seed = 0
      visit(tree, (node, index) => {
        if (node.type === 'containerDirective' && node.name === 'demo') {
          console.log(node.children[0].children[0].value)
          const relativePath = node.children[0].children[0].value

          const filePath = path.join(options.root, componentsExample, `${relativePath}.vue`)

          console.log(filePath)
          if (!fs.existsSync(filePath)) {
            throw new Error(`File ${filePath} not found`)
          }
          const fileContent = fs.readFileSync(filePath)
          seed++

          contentCode = contentCode.replace(relativePath, `\`\`\`vue
${fileContent}
\`\`\``)
        }
      })
    }
  }

  // 解析markdown
  code = processIncludes(code, id, options.root)
  const file = await unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkDirective)
    .use(remarkStringify)
    .use(remarkDemo)
    .process(code)

  return { code: contentCode }
}

export const Demoblocks = new Map()
export const FileCaches = new Map()
