<script setup>
import { data as posts } from '../../../zh/blog/posts.data.mjs'
</script>

<template>
  <section class="bento-section">
    <div class="bento-grid">
      <!-- Card 1: Stats (wide) -->
      <div class="bento-card card-wide">
        <div class="card-label">// kernel.stats</div>
        <div style="display: flex; gap: 2rem; margin-top: 0.5rem;">
          <div>
            <div class="stat-number">{{ posts.length }}</div>
            <p style="margin: 0;">技术文章</p>
          </div>
          <div>
            <div class="stat-number">GKI</div>
            <p style="margin: 0;">内核目标</p>
          </div>
          <div>
            <div class="stat-number">#1</div>
            <p style="margin: 0;">折腾优先级</p>
          </div>
        </div>
      </div>

      <!-- Card 2: About -->
      <div class="bento-card">
        <div class="card-label">// about.me</div>
        <h3>Android GKI 内核开发者</h3>
        <p>维护 oppo_oplus_realme_sm8650 内核，专注 KernelSU / APatch / SUSFS 等 root 框架研究与内核安全。</p>
      </div>

      <!-- Card 3: Recent Posts (tall) -->
      <div class="bento-card card-tall">
        <div class="card-label">// latest.posts</div>
        <h3>最新文章</h3>
        <ul class="recent-posts">
          <li v-for="post in posts.slice(0, 5)" :key="post.url">
            <a :href="post.url">
              <span class="post-date">{{ new Date(post.frontmatter.date).toISOString().split('T')[0] }}</span>
              <br>
              {{ post.frontmatter.title }}
            </a>
          </li>
        </ul>
      </div>

      <!-- Card 4: Tech Stack -->
      <div class="bento-card">
        <div class="card-label">// tech.stack</div>
        <h3>技术栈</h3>
        <div class="tag-pills">
          <span class="tag-pill">Linux Kernel</span>
          <span class="tag-pill">Android GKI</span>
          <span class="tag-pill">KernelSU</span>
          <span class="tag-pill">APatch</span>
          <span class="tag-pill">SUSFS</span>
          <span class="tag-pill">C</span>
          <span class="tag-pill">Shell</span>
          <span class="tag-pill">GitHub Actions</span>
        </div>
      </div>

      <!-- Card 5: Quote -->
      <div class="bento-card">
        <div class="card-label">// motd</div>
        <h3>向死而生</h3>
        <p>内核开发是一场与底层硬件的对话。每次编译都是一次重生，每个 commit 都是一次冒险。</p>
      </div>
    </div>
  </section>
</template>
