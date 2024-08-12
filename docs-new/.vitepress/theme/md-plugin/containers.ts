import MarkdownIt from "markdown-it";
import container from 'markdown-it-container';
import type { RenderRule } from 'markdown-it/lib/renderer.mjs';
import { MarkdownEnv } from "vitepress";

const icons = {
  info: '<svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-sky-500" aria-label="Note"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 1.3C10.14 1.3 12.7 3.86 12.7 7C12.7 10.14 10.14 12.7 7 12.7C5.48908 12.6974 4.0408 12.096 2.97241 11.0276C1.90403 9.9592 1.30264 8.51092 1.3 7C1.3 3.86 3.86 1.3 7 1.3ZM7 0C3.14 0 0 3.14 0 7C0 10.86 3.14 14 7 14C10.86 14 14 10.86 14 7C14 3.14 10.86 0 7 0ZM8 3H6V8H8V3ZM8 9H6V11H8V9Z"></path></svg>',
  warning: '<svg class="flex-none w-5 h-5 text-amber-400 dark:text-amber-300/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-label="Warning"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>',
  tip: '<svg width="11" height="14" viewBox="0 0 11 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="text-emerald-600 dark:text-emerald-400/80 w-3.5 h-auto" aria-label="Tip"><path d="M3.12794 12.4232C3.12794 12.5954 3.1776 12.7634 3.27244 12.907L3.74114 13.6095C3.88471 13.8248 4.21067 14 4.46964 14H6.15606C6.41415 14 6.74017 13.825 6.88373 13.6095L7.3508 12.9073C7.43114 12.7859 7.49705 12.569 7.49705 12.4232L7.50055 11.3513H3.12521L3.12794 12.4232ZM5.31288 0C2.52414 0.00875889 0.5 2.26889 0.5 4.78826C0.5 6.00188 0.949566 7.10829 1.69119 7.95492C2.14321 8.47011 2.84901 9.54727 3.11919 10.4557C3.12005 10.4625 3.12175 10.4698 3.12261 10.4771H7.50342C7.50427 10.4698 7.50598 10.463 7.50684 10.4557C7.77688 9.54727 8.48281 8.47011 8.93484 7.95492C9.67728 7.13181 10.1258 6.02703 10.1258 4.78826C10.1258 2.15486 7.9709 0.000106649 5.31288 0ZM7.94902 7.11267C7.52078 7.60079 6.99082 8.37878 6.6077 9.18794H4.02051C3.63739 8.37878 3.10743 7.60079 2.67947 7.11294C2.11997 6.47551 1.8126 5.63599 1.8126 4.78826C1.8126 3.09829 3.12794 1.31944 5.28827 1.3126C7.2435 1.3126 8.81315 2.88226 8.81315 4.78826C8.81315 5.63599 8.50688 6.47551 7.94902 7.11267ZM4.87534 2.18767C3.66939 2.18767 2.68767 3.16939 2.68767 4.37534C2.68767 4.61719 2.88336 4.81288 3.12521 4.81288C3.36705 4.81288 3.56274 4.61599 3.56274 4.37534C3.56274 3.6515 4.1515 3.06274 4.87534 3.06274C5.11719 3.06274 5.31288 2.86727 5.31288 2.62548C5.31288 2.38369 5.11599 2.18767 4.87534 2.18767Z"></path></svg>',
  danger: '<svg class="flex-none w-5 h-5 text-red-400 dark:text-red-300/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-label="Danger"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>'
};
const colors = {
  tip: 'border-sky-500/20 bg-sky-50/50 dark:border-sky-500/30 dark:bg-sky-500/10',
  warning: 'border-amber-500/20 bg-amber-50/50 dark:border-amber-500/30 dark:bg-amber-500/10',
  // 红色
  danger: 'border-red-500/20 bg-red-50/50 dark:border-red-500/30 dark:bg-red-500/10',
  info: 'border-sky-500/20 bg-sky-50/50 dark:border-sky-500/30 dark:bg-sky-500/10',
};

type ContainerArgs = [typeof container, string, { render: RenderRule }]
function createContainer(
  klass: string,
  defaultTitle: string,
  md: MarkdownIt
): ContainerArgs {
  return [
    container,
    klass,
    {
      render(tokens, idx, _options, env: MarkdownEnv & { references?: any }) {
        const token = tokens[idx];
        const info = token.info.trim().slice(klass.length).trim();
        const attrs = md.renderer.renderAttrs(token);

        const color = colors[klass] ?? 'border-gray-200/20 bg-gray-50/50 dark:border-gray-700/30 dark:bg-gray-700/10';
        const icon = icons[klass] ?? '';
        if (token.nesting === 1) {
          const title = md.renderInline(info || defaultTitle, {
            references: env.references
          });
          if (klass === 'details')
            return `<div class="border dark:border-white/10 rounded-xl mb-3 overflow-hidden dark:bg-codeblock ${klass} custom-block"${attrs}>
            <button class="relative not-prose flex flex-row items-center content-center w-full py-4 px-5 hover:bg-gray-100 hover:dark:bg-gray-800 rounded-t-xl" aria-expanded="false">
              <div class="mr-1 ml-0">
                <svg class="h-5 w-5 transition bg-gray-700 dark:bg-gray-400 duration-75" style="mask-image: url(&quot;/expand.svg&quot;); mask-repeat: no-repeat; mask-position: center center;"></svg>
              </div>
              <div class="leading-tight text-left">
              <p class="m-0 font-medium text-gray-900 dark:text-gray-200">${title}</p>
            </div>
          </button>
          <div class="mt-2 mb-4 mx-6 hidden detail-content">\n`;

          return `<div class="my-4 px-5 py-4 overflow-hidden rounded-xl flex gap-3 border ${klass} ${color} custom-block"${attrs}>
            ${icon ? '<div class="mt-0.5 w-4">'+ icon +'</div>' : ''}
          <div class="text-sm prose min-w-0 text-emerald-900 dark:text-emerald-200 custom-block-title">${title}`;
        }
        return klass === 'details' ? `</div></div>\n` : `</div>\n</div>\n`;
      }
    }
  ];
}

export const mdContainersPlugin = (md: MarkdownIt) => {
  const containers = [
    createContainer('tip', 'TIP', md),
    createContainer('warning', 'WARNING', md),
    createContainer('info', 'INFO', md),
    createContainer('danger', 'DANGER', md),
    createContainer('details', 'DETAILS', md)
  ];
  containers.forEach(args => md.use(...args));
  // md.use(...createContainer('tip', 'TIP', md))
};
