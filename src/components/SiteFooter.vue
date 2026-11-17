<script setup>
import { site } from '../data/site'

const year = new Date().getFullYear()
</script>

<template>
  <footer id="contact" class="footer">
    <div class="wrap">
      <h2 class="section-title">联系</h2>
      <ul class="links">
        <li><span>邮箱</span><a :href="'mailto:' + site.links.mail">{{ site.links.mail }}</a></li>
        <li><span>Gitea</span><a :href="site.links.gitea" target="_blank" rel="noopener">{{ site.links.gitea.replace('https://', '') }}</a></li>
        <li><span>Gitee</span><a :href="site.links.gitee" target="_blank" rel="noopener">gitee.com/ygwill</a></li>
        <li><span>GitHub</span><a :href="site.links.github" target="_blank" rel="noopener">github.com/Ygwill</a></li>
      </ul>
      <p class="fine">
        © {{ year }} {{ site.brand }} · 由 Vue 3 + Vite 构建 · 图片资源使用 Git LFS 管理<br />
        PS：侵权删
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--line);
  padding: 56px 0 40px;
  background: rgba(255, 255, 255, 0.02);
}

.links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px 24px;
  margin: 0 0 26px;
  padding: 0;
  list-style: none;
  font-size: 14px;
}

.links li {
  display: flex;
  gap: 10px;
}

.links span {
  color: var(--muted);
  min-width: 3.5em;
}

.fine {
  margin: 0;
  color: var(--muted);
  font-size: 12.5px;
  line-height: 1.9;
}
</style>
