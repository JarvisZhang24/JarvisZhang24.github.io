# Yichen Zhang — Personal Website

A bilingual personal research website built with [Astro](https://astro.build/) and [Bun](https://bun.com/).

使用 Astro 与 Bun 构建的中英双语个人研究主页。

## Local development / 本地开发

```bash
bun install
bun run dev
```

Open `http://localhost:4321` for English, or `http://localhost:4321/zh/` for Chinese.

英文主页位于 `http://localhost:4321`，中文主页位于 `http://localhost:4321/zh/`。

## Quality checks / 构建检查

```bash
bun run check
bun run build
bun run preview
```

The site is statically generated and deployed to GitHub Pages from `main` by the workflow in `.github/workflows/deploy.yml`.

网站采用静态生成，并由 `.github/workflows/deploy.yml` 在 `main` 分支更新时部署到 GitHub Pages。
