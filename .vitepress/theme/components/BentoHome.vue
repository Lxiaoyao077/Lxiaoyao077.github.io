<script setup>
import { data as posts } from '../../../zh/blog/posts.data.mjs'
</script>

<template>
  <div class="bento-wrapper">

    <!-- Stats -->
    <div class="stats-row">
      <div class="stat-block">
        <div class="stat-number">{{ posts.length }}</div>
        <div class="stat-label">文章</div>
      </div>
      <div class="stat-block">
        <div class="stat-number">GKI</div>
        <div class="stat-label">内核目标</div>
      </div>
      <div class="stat-block">
        <div class="stat-number">KernelSU</div>
        <div class="stat-label">Root 方案</div>
      </div>
    </div>

    <!-- Intro -->
    <div class="intro-block">
      维护 oppo_oplus_realme_sm8650 内核，专注 KernelSU / APatch / SUSFS 等 root 框架研究与内核安全。搞机、刷机、逆向，一路折腾过来的 Android 开发者。
    </div>

    <!-- Recent posts -->
    <div>
      <div class="section-head"><span>最新文章</span></div>
      <div class="post-group">
        <a v-for="post in posts.slice(0, 5)" :key="post.url" :href="post.url" class="post-link">
          <span class="post-name">{{ post.frontmatter.title }}</span>
          <span class="post-meta">{{ new Date(post.frontmatter.date).toISOString().split('T')[0] }}</span>
        </a>
      </div>
    </div>

    <!-- Tags -->
    <div>
      <div class="section-head"><span>技术栈</span></div>
      <div class="tag-cluster">
        <span class="tag-chip">Linux Kernel</span>
        <span class="tag-chip">Android GKI</span>
        <span class="tag-chip">KernelSU</span>
        <span class="tag-chip">APatch</span>
        <span class="tag-chip">SUSFS</span>
        <span class="tag-chip">C</span>
        <span class="tag-chip">Shell</span>
        <span class="tag-chip">GitHub Actions</span>
      </div>
    </div>
  </div>
</template>
