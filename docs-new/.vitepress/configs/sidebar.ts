import { DefaultTheme } from "vitepress";

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Guide",
      collapsed: true,
      items: [
        {
          text: "介绍",
          link: "/guide/",
        },
        {
          text: "快速开始",
          link: "/guide/quick-start",
        },
        {
          text: "内置样式",
          link: "/guide/features",
        },
        {
          text: "注意事项",
          link: "/guide/vrm",
        },
      ],
    },
  ];
}

function sidebarComponent(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "基础组件",
      collapsed: false,
      items: [
        {
          text: "card 卡片",
          link: "card",
        },
        {
          text: "icon 图标",
          link: "icon",
        },
        {
          text: "button 按钮",
          link: "button",
        },
        {
          text: "scrollbar 滚动条",
          link: "scrollbar",
        },
        {
          text: "empty 无数据",
          link: "empty",
        },
        {
          text: "loading 加载中",
          link: "loading",
        },
      ],
    },
    {
      text: "表单组件",
      collapsed: false,
      items: [
        {
          text: "switch 开关",
          link: "switch",
        },
        {
          text: "color-picker 颜色选择器",
          link: "color-picker",
        },
        {
          text: "input 输入框",
          link: "input",
        },
        {
          text: "input-number 数字输入框",
          link: "input-number",
        },
        {
          text: "select 下拉框",
          link: "select",
        },

        {
          text: "checkbox 复选框",
          link: "checkbox",
        },
        {
          text: "radio 单选框",
          link: "radio",
        },
        {
          text: "slider 滑块",
          link: "slider",
        },
      ],
    },
    {
      text: "数据展示组件",
      collapsed: false,
      items: [
        {
          text: "avatar 头像",
          link: "avatar",
        },
        {
          text: "material 素材",
          link: "material",
        },
        {
          text: "material-preview 素材预览",
          link: "material-preview",
        },
        {
          text: "tabs 标签页",
          link: "tabs",
        },
        {
          text: "hot-zone 热区",
          link: "hot-zone",
        },
        {
          text: "badge 徽标",
          link: "badge",
        },
        {
          text: "tag 标签",
          link: "tag",
        },
      ],
    },
    {
      text: "反馈组件",
      collapsed: false,
      items: [
        {
          text: "dialog 对话框",
          link: "dialog",
        },
        {
          text: "drawer 抽屉",
          link: "drawer",
        },
        {
          text: "confirm 确认弹窗",
          link: "confirm",
        },
        {
          text: "notification 通知",
          link: "notification",
        },
        {
          text: "message 消息提示",
          link: "message",
        },
        {
          text: "popover 气泡卡片",
          link: "popover",
        },
        {
          text: "tooltip 弹出提示",
          link: "tooltip",
        },
      ],
    },
    {
      text: "虚拟组件",
      collapsed: false,
      items: [
        {
          text: "virtual-list 虚拟列表",
          link: "virtual-list",
        },
        {
          text: "virtual-select 虚拟下拉框",
          link: "virtual-select",
        },
      ],
    },
  ];
}

function sidebarTemplate(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "模板",
      collapsed: true,
      items: [],
    },
  ];
}

export const sidebars = (): DefaultTheme.Config["sidebar"] => {
  return {
    "/guide/": sidebarGuide(),
    "/components/": {
      base: "/components/",
      items: sidebarComponent(),
    },
    "/template/": sidebarTemplate(),
    "/vitepress-examples/": [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/vitepress-examples/markdown-examples" },
          { text: "Runtime API Examples", link: "/vitepress-examples/api-examples" },
        ],
      },
    ],
  };
};
