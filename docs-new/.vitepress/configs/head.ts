import type { HeadConfig } from "vitepress";
import * as pkg from "../../package.json";

const metaData = {
  title: "Icc Sass Components",
  description: pkg.description,
};

const head: HeadConfig[] = [
  [
    "meta",
    {
      name: "keywords",
      content: "advjs, game, engine, vue, novel",
    },
  ],
  ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],

  ["meta", { name: "HandheldFriendly", content: "True" }],
  ["meta", { name: "MobileOptimized", content: "320" }],
  ["meta", { name: "theme-color", content: "#000" }],

  ["meta", { name: "twitter:card", content: "summary_large_image" }],
  ["meta", { name: "twitter:site", content: "https://icc.link/" }],
  ["meta", { name: "twitter:title", value: metaData.title }],
  ["meta", { name: "twitter:description", value: metaData.description }],
  ["meta", { name: "twitter:image", content: "/favicon.svg" }],

  ["meta", { property: "og:type", content: "website" }],
  ["meta", { property: "og:locale", content: "en_US" }],
  ["meta", { property: "og:site", content: "https://icc.link/" }],
  ["meta", { property: "og:site_name", content: metaData.title }],
  ["meta", { property: "og:title", content: metaData.title }],
  ["meta", { property: "og:image", content: "/assets/logo.svg" }],
  ["meta", { property: "og:description", content: metaData.description }],

  ["link", { rel: "dns-prefetch", href: "https://fonts.gstatic.com" }],
  [
    "link",
    {
      rel: "preconnect",
      crossorigin: "anonymous",
      href: "https://fonts.gstatic.com",
    },
  ],
  [
    "link",
    {
      href: "https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@200;400;500;600&display=swap",
      rel: "stylesheet",
    },
  ],
  [
    "link",
    {
      rel: "stylesheet",
      href: "//at.alicdn.com/t/c/font_4623160_uqiof1msoj.css",
    },
  ],
];

export { head };
