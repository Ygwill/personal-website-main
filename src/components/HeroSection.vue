<script setup>
import { site } from '../data/site'
</script>

<template>
  <section id="top" class="hero">
    <div class="wrap">
      <p class="kicker">LOVELY-EUGLENA · 为爱发电</p>
      <h1>{{ site.slogan }}</h1>
      <p class="lead">{{ site.intro }}</p>
      <div class="actions">
        <a class="btn primary" href="#characters">看看角色</a>
        <a class="btn" :href="site.links.gitea" target="_blank" rel="noopener">仓库列表</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 104px 0 84px;
}

.kicker {
  margin: 0 0 14px;
  color: var(--accent);
  font-size: 13px;
  letter-spacing: 0.18em;
}

h1 {
  margin: 0 0 16px;
  max-width: 18ch;
  font-size: clamp(28px, 5.4vw, 52px);
  line-height: 1.25;
  font-weight: 700;
  background: linear-gradient(120deg, #ffffff 10%, #b9c8ff 55%, #e7c2ff 95%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.lead {
  margin: 0 0 28px;
  max-width: 52ch;
  color: var(--muted);
  font-size: 16px;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.btn {
  padding: 9px 18px;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--text);
  background: var(--card);
  font-size: 14px;
}

.btn:hover {
  color: var(--text);
  background: var(--card-hover);
}

.btn.primary {
  border-color: transparent;
  color: #0b1020;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  font-weight: 600;
}
</style>
