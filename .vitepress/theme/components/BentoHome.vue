<script setup>
import { data as posts } from '../../../zh/blog/posts.data.mjs'
</script>

<template>
  <section class="bento-section">

    <!-- Stats -->
    <div class="stats-bar">
      <div class="stat-item">
        <span class="stat-value">{{ posts.length }}</span>
        <span class="stat-label">文章</span>
      </div>
      <div class="stat-item">
        <span class="stat-value">GKI</span>
        <span class="stat-label">内核目标</span>
      </div>
      <div class="stat-item">
        <span class="stat-value">KernelSU</span>
        <span class="stat-label">Root 方案</span>
      </div>
    </div>

    <!-- Intro -->
    <div class="intro-card">
      <p>Android GKI 内核开发者，维护 oppo_oplus_realme_sm8650 内核。专注 KernelSU / APatch / SUSFS 等 root 框架研究与内核安全。</p>
    </div>

    <!-- Recent Posts -->
    <div class="section-title">最新文章</div>
    <ul class="recent-posts">
      <li v-for="post in posts.slice(0, 5)" :key="post.url">
        <a :href="post.url">
          <span>{{ post.frontmatter.title }}</span>
          <span class="post-date">{{ new Date(post.frontmatter.date).toISOString().split('T')[0] }}</span>
        </a>
      </li>
    </ul>

    <!-- Tags -->
    <div class="tag-row">
      <span class="tag-pill">Linux Kernel</span>
      <span class="tag-pill">Android GKI</span>
      <span class="tag-pill">KernelSU</span>
      <span class="tag-pill">APatch</span>
      <span class="tag-pill">SUSFS</span>
      <span class="tag-pill">C</span>
      <span class="tag-pill">Shell</span>
      <span class="tag-pill">GitHub Actions</span>
    </div>
  </section>
</template>
