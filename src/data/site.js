// 站点文案与链接的单一来源：改这里就能改全站
export const site = {
  brand: '个人网站',
  host: 'ygwill.top',
  slogan: '从实际出发，为了实际；从热爱出发，为了热爱',
  intro:
    '一个为爱发电的开发者，干一些自己喜欢干的事情，写一些自己喜欢的项目。这里是 lovely-euglena 组织的站点入口。',
  links: {
    gitea: 'https://git.ygwill.top',
    gitee: 'https://gitee.com/ygwill',
    github: 'https://github.com/Ygwill',
    mail: 'Each13579@hotmail.com',
  },
}

// 角色衍生项目入口（对应 personal-website 组织下的 character-* 仓库）
export const repoBase = `${site.links.gitea}/personal-website`

export const characters = [
  {
    name: '昔涟',
    latin: 'Cyrene',
    img: 'cyrene',
    repo: 'character-cyrene',
    note: '昔涟现实化计划的主角，一切的起点。',
    tags: ['主角', 'AI 助手'],
  },
  {
    name: '风堇',
    latin: 'Hyacine',
    img: 'hyacine',
    repo: 'character-hyacine',
    note: '把喜欢的角色认真做成可以用起来的衍生项目。',
    tags: ['角色档案'],
  },
  {
    name: '风堇 · 云边拾暖',
    latin: 'Cloud Warmth',
    img: 'hyacine-cloud-warmth',
    repo: 'character-hyacine',
    note: '着装分支：暖色调的那一套。',
    tags: ['皮肤', '着装'],
  },
  {
    name: '遐蝶',
    latin: 'Castorice',
    img: 'castorice',
    repo: 'character-castorice',
    note: '蝴蝶落在肩膀上，考据与展示。',
    tags: ['角色档案', '考据'],
  },
  {
    name: '遐蝶 · 幽梦翩跹',
    latin: 'Dream Drift',
    img: 'castorice-dream-drift',
    repo: 'character-castorice',
    note: '着装分支：梦境质感的那一套。',
    tags: ['皮肤', '着装'],
  },
  {
    name: '长夜月',
    latin: 'March 7th · Evenight',
    img: 'march7th-evenight',
    repo: 'character-march7th-evenight',
    note: '长夜里的那一轮月亮。',
    tags: ['角色档案'],
  },
]

// 组织里的其它项目，摘自 lovely-euglena/.profile
export const projects = [
  {
    name: 'Cyrene Agent',
    desc: '昔涟老婆现实化计划，角色向 AI Agent。',
    url: `${site.links.gitea}/lovely-euglena/cyrene-agent`,
    lang: 'TypeScript',
  },
  {
    name: 'PPTX GIF 添加程序',
    desc: '往 PPTX 里塞 GIF 的实用（且恶搞）小工具。',
    url: `${site.links.gitea}/lovely-euglena/pptxadder`,
    lang: 'C#',
  },
  {
    name: 'TimeViewer',
    desc: '为教室电子白板等大屏设计的时间显示器。',
    url: `${site.links.gitea}/lovely-euglena/time-viewer`,
    lang: '—',
  },
  {
    name: 'adminer 镜像',
    desc: '数据库管理软件 adminer 的镜像，GitHub 摸鱼时的临时工。',
    url: `${site.links.gitea}/lovely-euglena/adminer`,
    lang: 'PHP',
  },
]
