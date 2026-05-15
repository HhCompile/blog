<!-- From: /Users/sunxiansheng/Mine/my-blog/AGENTS.md -->
# AGENTS.md — vitepress-blog

## 项目背景

基于 VitePress 的个人静态博客，部署在 GitHub Pages。

- **仓库**: `https://github.com/HhCompile/blog.git`
- **域名**: `https://hhcompile.github.io/blog/`
- **框架**: VitePress 1.6.4 + Vue 3.5.33
- **构建输出**: `docs/.vitepress/dist`

## 技术栈

| 层 | 技术 |
|---|---|
| 静态站点生成 | VitePress |
| 搜索 | Pagefind 1.5.2（离线全文搜索）|
| 图表 | Mermaid（已开启）|
| 订阅 | RSS（已开启）|
| 样式 | SCSS + 主题自定义 |
| 包管理 | pnpm |

## 目录结构

```
docs/
  .vitepress/
    config.mts          # VitePress 主配置
    theme/              # 自定义主题覆盖
      index.ts
      style.scss
      assets/
    dist/               # 构建输出（gitignore）
  fe/                   # 前端文章
  guide/                # 实践/指南文章
  ideas/                # 思路与架构思考
  tools/                # 工具配置文章
  about.md              # 关于页
  index.md              # 首页
  public/               # 静态资源
```

## 构建与部署

```bash
# 本地开发
pnpm run dev

# 构建
pnpm run build

# 预览构建产物
pnpm run serve
```

CI/CD 由 `.github/workflows/deploy.yml` 驱动，push 到 main 分支时自动构建并部署到 GitHub Pages。

## 编码约定

- 使用 TypeScript（`.mts` / `.ts`）
- 文章使用 Markdown + YAML frontmatter
- 自定义样式写在 `docs/.vitepress/theme/style.scss`
- 主题配置集中在 `docs/.vitepress/config.mts`

## 注意事项

1. **base 路径**: 由于部署到 `github.io/blog/`，base 已设置为 `/blog/`，favicon、logo 等路径已同步使用 `${base}` 前缀。
2. **RSS baseUrl**: `config.mts` 中的 `baseUrl` 为 `https://hhcompile.github.io`，RSS 插件会自动拼接 `base` 路径，最终 RSS 链接为 `https://hhcompile.github.io/blog/feed.rss`。
3. **Mermaid**: 开启后会显著增加构建耗时（~10s），仅在需要图表的文章中使用。
4. **Pagefind**: 构建后自动生成搜索索引，无需手动维护。
