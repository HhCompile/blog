# AGENTS.md — vitepress-blog

## 项目背景

基于 VitePress + `@sugarat/theme` 的个人静态博客，部署在 GitHub Pages。

- **仓库**: `https://github.com/codeNoobStar/blog.git`
- **域名**: `https://codenoobstar.github.io/blog/`
- **框架**: VitePress 1.6.4 + Vue 3.5.33
- **主题**: `@sugarat/theme` 0.5.17
- **构建输出**: `docs/.vitepress/dist`

## 技术栈

| 层 | 技术 |
|---|---|
| 静态站点生成 | VitePress |
| UI 组件 | Element Plus 2.13.7 |
| 主题 | @sugarat/theme |
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
    blog-theme.ts       # 主题配置（RSS、Mermaid、页脚等）
    theme/              # 自定义主题覆盖
      index.ts
      style.scss
      assets/
    dist/               # 构建输出（gitignore）
  fe/                   # 前端文章
  sop/                  # 实践/SOP 文章
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
- 主题配置集中在 `blog-theme.ts`

## 注意事项

1. **base 路径**: 由于部署到 `github.io/blog/`，若开启 `base` 需同步修改 favicon、logo 等路径。
2. **RSS baseUrl**: `blog-theme.ts` 中的 `baseUrl` 必须与真实域名一致，否则 RSS 链接错误。
3. **Mermaid**: 开启后会显著增加构建耗时（~15s），仅在需要图表的文章中使用。
4. **Pagefind**: 构建后自动生成搜索索引，无需手动维护。
