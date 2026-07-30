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

## Editing content / 修改内容

All page text lives in `src/data/site.ts`, in parallel `en` and `zh` objects. The
shared `profile` export at the top of that file holds the email, GitHub, and
LinkedIn URLs, plus optional `cv`, `scholar`, and `portrait` fields — fill one in
and the matching link (or the photo in place of the `YZ` monogram) appears
automatically. `publications.items` renders a Publications section only once it
has entries.

所有文案位于 `src/data/site.ts` 的 `en` 与 `zh` 两个对象中。文件顶部的 `profile`
保存邮箱与社交链接，并预留了 `cv`、`scholar`、`portrait` 三个可选字段：填入后，
对应链接（或用照片替换 `YZ` 字母标记）会自动出现。`publications.items` 有内容时
才会渲染论文分区。

## Writing posts / 写文章

Posts are Markdown files under `src/content/blog/`, one folder per language:

```
src/content/blog/en/<slug>.md    → /blog/<slug>/
src/content/blog/zh/<slug>.md    → /zh/blog/<slug>/
```

Frontmatter: `title`, `description`, and `date` are required; `updated`, `tags`,
and `draft` are optional. `draft: true` keeps a post visible in `bun run dev`
while excluding it from `bun run build`, so unfinished pieces can live in the
repository safely. Using the **same slug in both folders** links the two
translations together in the language switch. The Writing section on the
homepage and the nav link both appear automatically once a post is published.

文章是 `src/content/blog/` 下的 Markdown 文件，按语言分目录（如上）。frontmatter 中
`title`、`description`、`date` 必填，`updated`、`tags`、`draft` 可选。`draft: true`
的文章在 `bun run dev` 下可见，但不会进入 `bun run build`，因此未完成的稿子可以安全地
留在仓库里。**两个目录使用相同的 slug** 即可让语言切换在两篇译文之间跳转。主页的「写作」
分区与导航入口会在有已发布文章后自动出现。

## Quality checks / 构建检查

```bash
bun run check
bun run build
bun run preview
```

The site is statically generated and deployed to GitHub Pages from `main` by the workflow in `.github/workflows/deploy.yml`.

网站采用静态生成，并由 `.github/workflows/deploy.yml` 在 `main` 分支更新时部署到 GitHub Pages。
