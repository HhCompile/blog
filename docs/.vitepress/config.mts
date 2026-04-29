import { defineConfig } from 'vitepress'
import { RssPlugin } from 'vitepress-plugin-rss'
import { withMermaid } from 'vitepress-plugin-mermaid'

const base = '/blog/'

export default withMermaid(defineConfig({
  base,
  lang: 'zh-cn',
  title: 'Code 霞光社',
  description: 'Code 霞光社的个人博客，记录前端技术与实践心得',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: `${base}favicon.ico` }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Code 霞光社' }],
    ['meta', { property: 'og:description', content: 'Code 霞光社的个人博客，记录前端技术与实践心得' }],
    ['meta', { property: 'og:image', content: `${base}logo.jpg` }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Code 霞光社' }],
    ['meta', { name: 'twitter:description', content: 'Code 霞光社的个人博客，记录前端技术与实践心得' }],
    ['meta', { name: 'twitter:image', content: `${base}logo.jpg` }]
  ],
  vite: {
    plugins: [
      RssPlugin({
        baseUrl: 'https://hhcompile.github.io',
        title: 'Code 霞光社',
        copyright: 'Copyright (c) 2018-present, Code 霞光社',
        description: '你的指尖,拥有改变世界的力量（大前端相关技术分享）',
        language: 'zh-cn',
        image: 'https://hhcompile.github.io/blog/logo.jpg',
        favicon: 'https://hhcompile.github.io/blog/favicon.ico',
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern'
        }
      }
    }
  },
  sitemap: {
    hostname: 'https://hhcompile.github.io/blog'
  },
  themeConfig: {
    logo: '/logo.jpg',
    outline: {
      level: [2, 3],
      label: '目录'
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '相关文章',
    lastUpdatedText: '上次更新于',
    footer: {
      copyright: 'MIT License | Code 霞光社'
    },
    editLink: {
      pattern: 'https://github.com/HhCompile/blog/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/fe' },
      { text: '工具', link: '/tools' },
      { text: '指南', link: '/guide' },
      { text: '思路', link: '/ideas' },
      { text: '关于', link: '/about' }
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/HhCompile/blog'
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM112 416c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm157.533 0h-34.335c-6.011 0-11.051-4.636-11.442-10.634-5.214-80.05-69.243-143.92-149.123-149.123-5.997-.39-10.633-5.431-10.633-11.441v-34.335c0-6.535 5.468-11.777 11.994-11.425 110.546 5.974 198.997 94.536 204.964 204.964.352 6.526-4.89 11.994-11.425 11.994zm103.027 0h-34.334c-6.161 0-11.175-4.882-11.427-11.038-5.598-136.535-115.204-246.161-251.76-251.76C68.882 152.949 64 147.935 64 141.774V107.44c0-6.454 5.338-11.664 11.787-11.432 167.83 6.025 302.21 141.191 308.205 308.205.232 6.449-4.978 11.787-11.432 11.787z" fill="currentColor"/></svg>'
        },
        link: 'https://hhcompile.github.io/blog/feed.rss',
        ariaLabel: 'RSS'
      }
    ]
  }
}))
