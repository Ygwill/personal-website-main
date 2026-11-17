<script setup>
import { characters, repoBase, site } from '../data/site'

const orgName = 'personal-website'
const orgUrl = `${site.links.gitea}/${orgName}`

// 图片资源放在 src/assets/characters，由 Vite 处理指纹；仓库中通过 Git LFS 存储
const images = import.meta.glob('../assets/characters/*.webp', {
  eager: true,
  import: 'default',
})

const srcOf = (slug) => images[`../assets/characters/${slug}.webp`]
</script>

<template>
  <section id="characters" class="section">
    <div class="wrap">
      <h2 class="section-title">角色</h2>
      <p class="section-sub">
        每个角色一个仓库，放在
        <a :href="orgUrl" target="_blank" rel="noopener">{{ orgName }}</a>
        组织下，点卡片即可跳转。
      </p>

      <ul class="grid">
        <li v-for="c in characters" :key="c.name" class="card">
          <a :href="repoBase + '/' + c.repo" target="_blank" rel="noopener" class="inner">
            <div class="ph">
              <img :src="srcOf(c.img)" :alt="c.name" :title="c.name" loading="lazy" decoding="async" />
            </div>
            <div class="meta">
              <h3>{{ c.name }}<span class="latin">{{ c.latin }}</span></h3>
              <p>{{ c.note }}</p>
              <div class="tags">
                <span v-for="t in c.tags" :key="t" class="tag">{{ t }}</span>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 18px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.card:hover {
  transform: translateY(-3px);
  border-color: rgba(122, 162, 255, 0.45);
}

.inner {
  display: block;
  color: inherit;
}

.inner:hover {
  color: inherit;
}

.ph {
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: var(--bg-soft);
  border-radius: 15px 15px 0 0;
}

.ph img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}

.meta {
  padding: 14px 16px 18px;
}

h3 {
  margin: 0 0 6px;
  font-size: 16px;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 8px;
}

.latin {
  color: var(--muted);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.04em;
}

p {
  margin: 0 0 10px;
  color: var(--muted);
  font-size: 13.5px;
  min-height: 2.6em;
}

.tags {
  display: flex;
  flex-wrap: wrap;
}
</style>
