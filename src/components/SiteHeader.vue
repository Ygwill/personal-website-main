<script setup>
import { site } from '../data/site'

const nav = [
  { href: '#about', label: '关于' },
  { href: '#characters', label: '角色' },
  { href: '#projects', label: '项目' },
  { href: '#contact', label: '联系' },
]
</script>

<template>
  <header class="header">
    <div class="wrap bar">
      <a class="brand" href="#top">
        <span class="dot" />
        <strong>{{ site.brand }}</strong>
        <span class="host">{{ site.host }}</span>
      </a>
      <nav class="nav">
        <a v-for="item in nav" :key="item.href" :href="item.href">{{ item.label }}</a>
        <a :href="site.links.gitea" class="git" target="_blank" rel="noopener">Git</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(12px);
  background: rgba(11, 16, 32, 0.72);
  border-bottom: 1px solid var(--line);
}

.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 9px;
  color: var(--text);
  font-size: 15px;
}

.brand:hover {
  color: var(--text);
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
}

.host {
  color: var(--muted);
  font-size: 13px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 18px;
  font-size: 14px;
}

.nav a {
  color: var(--muted);
}

.nav a:hover {
  color: var(--text);
}

.nav .git {
  color: var(--accent);
}

@media (max-width: 520px) {
  .host,
  .nav a[href='#about'] {
    display: none;
  }
}
</style>
