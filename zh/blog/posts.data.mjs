import { createContentLoader } from 'vitepress'

export default createContentLoader('/blog/*.md', {
  includeSrc: false,
  excerpt: false,
  render: false,
  transform(rawData) {
    return rawData
      .filter(page => page.url !== '/zh/blog/')
      .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
  }
})
