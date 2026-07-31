# 博客

<script setup>
import { data as posts } from './posts.data.mjs'
</script>

<ul>
  <li v-for="post in posts" :key="post.url">
    <a :href="post.url">{{ post.frontmatter.date }} — {{ post.frontmatter.title }}</a>
  </li>
</ul>
