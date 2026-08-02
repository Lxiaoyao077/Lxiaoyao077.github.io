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

  // Filter out Inter font preloads (we use system fonts)
  transformHead: ({ assets }) => {
    const tags = []
    for (const asset of assets) {
      if (asset.includes('inter-')) continue
      tags.push(['link', { rel: 'preload', href: asset, as: 'style' }])
    }
    return tags
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
      message: 'Powered by VitePress',
      copyright: 'Copyright © 2026 Lxyao'
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
