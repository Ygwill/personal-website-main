# 个人网站 · main

个人网站的入口页，Vue 3 + Vite 实现的一个基础站点：关于、角色导航、项目列表、联系方式。
文案参考了 [lovely-euglena/.profile](https://git.ygwill.asia/lovely-euglena/.profile)。

## 快速开始

```bash
# 图片资源走 Git LFS，克隆前先装好 git-lfs
git lfs install

npm install
npm run dev        # 本地开发，默认 http://127.0.0.1:5173
npm run build      # 产物输出到 dist/
npm run preview    # 预览构建产物
```

## 目录结构

```
├── index.html                 Vite 入口 HTML
├── vite.config.js             构建配置（@ -> src 别名）
├── public/                    原样拷贝到 dist 的静态文件（favicon）
├── src/
│   ├── main.js               挂载应用
│   ├── style.css             全站样式与设计变量
│   ├── App.vue               页面骨架
│   ├── data/site.js          文案与链接的单一来源
│   ├── assets/characters/    角色图片（Git LFS 跟踪）
│   └── components/
│       ├── SiteHeader.vue
│       ├── HeroSection.vue
│       ├── AboutSection.vue
│       ├── CharacterGallery.vue
│       ├── ProjectsSection.vue
│       └── SiteFooter.vue
└── dist/                      构建产物（已在 .gitignore 中排除）
```

## 关于图片与 Git LFS

`src/assets/characters/*.webp` 由 Git LFS 管理，规则见 `.gitattributes`
（与 `.profile` 仓库的 `*.png` / `*.webp` 保持一致）。
仓库里只保存指针文件，因此**没装 git-lfs 时拿到的图片是 130 字节左右的文本指针，图片会显示不出来**，
先执行 `git lfs install` 再 `git clone`（或对已有仓库 `git lfs pull`）。

原图（2048×2048 PNG）体积过大，站内使用 720px 宽的 WebP（质量 80，合计约 730 KB）：

```bash
convert 原图.png -resize 720x720 -quality 80 -define webp:method=6 out.webp
```

## 关于构建产物

`dist/`、`node_modules/`、各类缓存与本地环境变量文件均在 `.gitignore` 中排除，
仓库只保留源码与 LFS 图片。部署时自行执行 `npm run build`，把 `dist/` 交给静态服务器即可。

## 改内容

角色、项目、链接全部集中在 `src/data/site.js`，改这个文件就够了；
新增角色图片放进 `src/assets/characters/`（自动被 LFS 跟踪），并在 `characters` 数组里
用同名 `img` 字段引用（不含扩展名）。
