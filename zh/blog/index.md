<script setup>
import { data as posts } from './posts.data.mjs'
</script>

<div class="blog-header">
  <h1>博客</h1>
  <div class="subhead">共 {{ posts.length }} 篇文章</div>
</div>

<div class="blog-grid">
  <a v-for="post in posts" :key="post.url" :href="post.url" class="blog-card">
    <div class="card-date">{{ new Date(post.frontmatter.date).toISOString().split('T')[0] }}</div>
    <div class="card-title">{{ post.frontmatter.title }}</div>
    <div v-if="post.frontmatter.description" class="card-desc">{{ post.frontmatter.description }}</div>
  </a>

  <div v-if="posts.length === 0" style="text-align: center; padding: 3rem 0; color: var(--c-text-dim);">
    还没有文章，敬请期待。
  </div>
</div>
