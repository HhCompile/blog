import { defineConfig } from 'vitepress'

// 导入主题的配置
import { blogTheme } from './blog-theme'

// GitHub Pages 部署到子路径 /blog/，必须设置 base
const base = '/blog/'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  // 继承博客主题(@sugarat/theme)
  extends: blogTheme,
  base,
  lang: 'zh-cn',
  title: 'Code 霞光社',
  description: 'Code 霞光社的个人博客，记录前端技术与实践心得',
  lastUpdated: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
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
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: '目录'
    },
    // 默认文案修改
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '相关文章',
    lastUpdatedText: '上次更新于',

    // 设置logo
    // logo: '/logo.png',
    logo: `${base}logo.jpg`,
    editLink: {
      pattern: 'https://github.com/HhCompile/blog/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/fe' },
      { text: '工具', link: '/tools' },
      { text: '指南', link: '/guide' },
      { text: '关于', link: '/about' }
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/HhCompile/blog'
      }
    ]
  }
})
