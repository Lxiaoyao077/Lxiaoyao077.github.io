<script setup>
import { data as posts } from './posts.data.mjs'
</script>

<div class="blog-list">
  <div class="section-header">
    <div style="font-family: var(--lx-font-mono); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--lx-accent); margin-bottom: 0.25rem;">// blog.index</div>
    <h1>博客</h1>
    <div class="subtitle">共 {{ posts.length }} 篇文章 — 内核开发、Root 框架、安全研究</div>
  </div>

  <a v-for="post in posts" :key="post.url" :href="post.url" class="blog-post-card">
    <div class="post-date">{{ new Date(post.frontmatter.date).toISOString().split('T')[0] }}</div>
    <div class="post-title">
      {{ post.frontmatter.title || post.url.replace('/zh/blog/', '').replace(/\.(md|html)$/, '') }}
      <span class="post-arrow">→</span>
    </div>
    <div v-if="post.frontmatter.description" class="post-excerpt">
      {{ post.frontmatter.description }}
    </div>
  </a>

  <div v-if="posts.length === 0" style="text-align: center; padding: 3rem 0; color: var(--lx-text-muted);">
    还没有文章，敬请期待。
  </div>
</div>
