<script setup>
const facets = [
  { title: '二次元厨子', text: '为喜欢的角色做衍生项目，献给心中的二次元角色。' },
  { title: '乐子人', text: '我来搞事，我来欢笑，一些恶搞用的程序由此诞生。' },
  { title: 'AI 爱好者', text: '仓库里不少代码由 AI 参与完成，提交按作者名可辨识。' },
  { title: '工具人', text: '维护自己常用软件的镜像，让临时工也能顶上去。' },
]
</script>

<template>
  <section id="about" class="section">
    <div class="wrap">
      <h2 class="section-title">关于</h2>
      <p class="section-sub">一个为爱发电的开发者组织，同时也是一个不折不扣的二次元厨子。</p>
      <ul class="grid">
        <li v-for="f in facets" :key="f.title" class="card">
          <h3>{{ f.title }}</h3>
          <p>{{ f.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.card {
  padding: 20px;
}

h3 {
  margin: 0 0 8px;
  font-size: 16px;
}

p {
  margin: 0;
  color: var(--muted);
  font-size: 14px;
}
</style>
