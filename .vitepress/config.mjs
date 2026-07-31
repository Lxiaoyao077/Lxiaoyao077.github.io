import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-Hans',
  title: 'Lxyao',
  description: '内核折腾，向死而生。',
  srcDir: 'zh',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  // Enable local search
  search: {
    provider: 'local'
  },

  themeConfig: {
    // Logo
    logo: false,

    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/blog/' },
      { text: '关于', link: '/about' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Lxiaoyao077' },
    ],

    // Blog sidebar
    sidebar: {
      '/blog/': [
        {
          text: '文章列表',
          items: []  // dynamically populated — see posts.data.mjs
        }
      ]
    },

    footer: {
      message: 'Powered by VitePress',
      copyright: 'Copyright © 2026 Lxyao'
    },

    // Edit link
    editLink: {
      pattern: 'https://github.com/Lxiaoyao077/Lxiaoyao077.github.io/edit/main/zh/:path',
      text: '在 GitHub 上编辑此页'
    },

    // Last updated
    lastUpdated: {
      text: '最后更新于'
    },

    // Outline
    outline: {
      level: [2, 3],
      label: '页面导航'
    }
  },

  markdown: {
    lineNumbers: true
  }
})
