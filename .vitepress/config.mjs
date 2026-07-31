import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-Hans',
  title: 'Lxiaoyao',
  description: '内核折腾，向死而生。',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/zh/' },
      { text: '博客', link: '/zh/blog/' },
      { text: '关于', link: '/zh/about' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Lxiaoyao077' },
    ],
    footer: {
      message: 'Powered by VitePress',
      copyright: 'Copyright © 2026 Lxiaoyao'
    }
  },
  markdown: {
    lineNumbers: true
  }
})
