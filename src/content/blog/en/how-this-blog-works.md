---
title: "How this blog works"
description: "Where posts live, which frontmatter fields exist, and how drafts and the bilingual pairing behave."
date: 2026-07-24
tags: ["Meta"]
draft: true
---

Notes to self, so the next post takes two minutes to set up rather than twenty.

## Where posts live

```
src/content/blog/en/<slug>.md    → /blog/<slug>/
src/content/blog/zh/<slug>.md    → /zh/blog/<slug>/
```

The folder name is the language. Give a post the **same slug in both folders**
and the language switch in the header moves between the two translations; when
a counterpart is missing, it falls back to the other language's index instead of
breaking.

## Frontmatter

| Field         | Required | Purpose                                         |
| ------------- | -------- | ----------------------------------------------- |
| `title`       | yes      | Post heading, browser tab, and card title       |
| `description` | yes      | Shown under the title and used for social previews |
| `date`        | yes      | Sort order and the displayed date                |
| `updated`     | no       | Adds an "Updated" line under the header          |
| `tags`        | no       | Rendered as monospace chips                      |
| `draft`       | no       | `true` hides the post from production builds     |

## Drafts

A post with `draft: true` is visible while running `bun run dev` and is dropped
from `bun run build`. That makes it safe to keep half-finished pieces in the
repository — they will not appear on the live site until the flag comes off.

## Reading time

Estimated from the body text, counting CJK characters separately from
whitespace-delimited words so Chinese posts do not report a misleadingly short
figure.
