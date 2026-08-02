import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-Hans',
  title: 'Lxyao',
  description: '内核折腾，向死而生。',
  srcDir: 'zh',

  // MPA mode — each page standalone, no SPA hydration
  mpa: true,
  ignoreDeadLinks: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],

  // Strip Inter font preloads (680KB+ wasted for Chinese blog)
  transformHtml(code) {
    return code.replace(/<link[^>]*inter-[^>]*\/?>/gi, '')
  },

  themeConfig: {
    logo: false,

    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/blog/' },
      { text: '关于', link: '/about' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Lxiaoyao077' },
    ],

    sidebar: {
      '/blog/': [
        {
          text: '文章列表',
          items: []
        }
      ]
    },

    footer: {
      message: '',
      copyright: '© 2026 Lxyao'
    },

    outline: {
      level: [2, 3],
      label: '页面导航'
    }
  },

  markdown: {
    lineNumbers: true
  }
})
