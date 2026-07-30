---
title: "排版参考"
description: "本站会渲染的全部 Markdown 元素集中在这一页，写新文章时可以直接复制这个文件当模板。"
date: 2026-07-30
tags: ["说明", "参考"]
draft: true
---

这篇文章用来展示各类 Markdown 元素渲染后的样子。复制这个文件、替换内容、删掉这段说明即可。

## 标题与正文

二级标题用于划分章节。正文行宽经过控制，长段落也便于阅读，并支持**加粗**、*斜体*
与 `行内代码`。诸如 [Astro 文档](https://docs.astro.build/) 这样的链接，悬停时会变为强调色。

### 三级标题

三级标题请克制使用，一般在章节下再分一层就够了。

## 列表

无序列表适合并列的要点：

- 在硬约束下实现可控生成
- 能经受真实数据检验的评估方法
- 可复现，精确到随机种子

有序列表适合有先后顺序的内容：

1. 明确假设
2. 设计能够证伪该假设的最小实验
3. 如实记录实际发生了什么

## 引用

> 一个在基准测试上表现很好、在实验室里表现很差的模型，
> 告诉你的是关于这个基准的信息，而不是关于这个分子的信息。

## 代码

行内的 `torch.no_grad()` 可以嵌在正文中。代码块在浅色与深色主题下都有语法高亮：

```python
import torch


@torch.no_grad()
def score_variants(model, sequences, window: int = 8_192):
    """返回基因组基础模型下每条序列的对数似然。"""
    scores = []
    for sequence in sequences:
        tokens = model.tokenize(sequence[:window]).to(model.device)
        logits = model(tokens).logits.log_softmax(dim=-1)
        scores.append(logits.gather(-1, tokens[:, 1:, None]).sum().item())
    return scores
```

命令行同理：

```bash
bun run build
```

## 表格

| 配置项   | 取值  | 说明             |
| -------- | ----- | ---------------- |
| 上下文长度 | 8,192 | 从 5' 端截断     |
| 精度     | bf16  | H100，单卡       |
| 批大小   | 4     | 受激活显存限制   |

## 分隔线

---

以上就是全部元素。没有出现在这里的写法会回落到基础正文样式，通常这也正是你想要的效果。
