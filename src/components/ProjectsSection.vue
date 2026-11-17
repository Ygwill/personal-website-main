<script setup>
import { projects } from '../data/site'
</script>

<template>
  <section id="projects" class="section">
    <div class="wrap">
      <h2 class="section-title">项目</h2>
      <p class="section-sub">lovely-euglena 组织里正在维护的一些东西。</p>
      <ul class="list">
        <li v-for="p in projects" :key="p.name" class="card row">
          <a :href="p.url" target="_blank" rel="noopener" class="link">
            <span class="name">{{ p.name }}</span>
            <span class="desc">{{ p.desc }}</span>
          </a>
          <span class="lang">{{ p.lang }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.list {
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 15px 18px;
}

.row:hover {
  border-color: rgba(122, 162, 255, 0.45);
}

.link {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 12px;
  align-items: baseline;
  color: inherit;
}

.link:hover {
  color: inherit;
}

.name {
  font-size: 15px;
  font-weight: 600;
}

.desc {
  color: var(--muted);
  font-size: 13.5px;
}

.lang {
  flex: none;
  color: var(--accent);
  font-size: 12px;
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 2px 10px;
}
</style>
