import MarkdownIt from "markdown-it";

// 增加class
export const mdContentPlugin = (md: MarkdownIt) => {

  md.renderer.rules.heading_open = (tokens, idx) => {
    const token = tokens[idx];
    const level = token.tag;
    const title = tokens[idx + 1].content;
    const id = token.attrGet('id');
    return `<${level} class="flex whitespace-pre-wrap group cursor-pointer" id="${id}">
    <div class="absolute">
      <a href="#${title}" class="-ml-10 flex items-center opacity-0 border-0 group-hover:opacity-100" aria-label="Navigate to header">​
        <div class="w-6 h-6 text-gray-400 rounded-md flex items-center justify-center zinc-box bg-white ring-1 ring-gray-400/30 dark:ring-gray-700/25 hover:ring-gray-400/60 dark:hover:ring-white/20">
          <svg xmlns="http://www.w3.org/2000/svg" fill="gray" height="12px" viewBox="0 0 576 512"><path d="M0 256C0 167.6 71.6 96 160 96h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C98.1 144 48 194.1 48 256s50.1 112 112 112h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C71.6 416 0 344.4 0 256zm576 0c0 88.4-71.6 160-160 160H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c61.9 0 112-50.1 112-112s-50.1-112-112-112H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c88.4 0 160 71.6 160 160zM184 232H392c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path></svg>
        </div>
      </a>
    </div>
    `;
  };

  md.renderer.rules.heading_close = (tokens, idx) => {
    const token = tokens[idx];
    const level = token.tag;
    return `</${level}>`;
  };
};
