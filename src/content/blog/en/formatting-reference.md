---
title: "Formatting reference"
description: "Every Markdown element this site styles, in one page — useful as a template when drafting a new post."
date: 2026-07-30
tags: ["Meta", "Reference"]
draft: true
---

This post exists to show what each Markdown element looks like once it is rendered.
Duplicate the file, replace the contents, and delete this note.

## Headings and body text

A second-level heading opens a section. Paragraph text sits at a comfortable
measure so long passages stay readable, and supports **bold**, *italic*, and
`inline code`. Links such as [the Astro documentation](https://docs.astro.build/)
pick up the accent colour on hover.

### Third-level heading

Use these sparingly — one level of nesting under a section is usually enough.

## Lists

Unordered lists work for unranked points:

- Controllable generation under hard constraints
- Evaluation that survives contact with real data
- Reproducibility, down to the random seed

Ordered lists work when sequence matters:

1. State the hypothesis
2. Build the smallest experiment that could falsify it
3. Report what actually happened

## Quotes

> A model that scores well on a benchmark and badly in the lab has told you
> something about the benchmark, not about the molecule.

## Code

Inline `torch.no_grad()` sits in the running text. Fenced blocks get syntax
highlighting in both light and dark themes:

```python
import torch


@torch.no_grad()
def score_variants(model, sequences, window: int = 8_192):
    """Return per-sequence log-likelihoods under a genomic foundation model."""
    scores = []
    for sequence in sequences:
        tokens = model.tokenize(sequence[:window]).to(model.device)
        logits = model(tokens).logits.log_softmax(dim=-1)
        scores.append(logits.gather(-1, tokens[:, 1:, None]).sum().item())
    return scores
```

Shell commands read the same way:

```bash
bun run build
```

## Tables

| Setting          | Value    | Note                          |
| ---------------- | -------- | ----------------------------- |
| Context window   | 8,192    | Truncated from the 5' end     |
| Precision        | bf16     | H100, single device           |
| Batch size       | 4        | Limited by activation memory  |

## Horizontal rule

---

That is the full set. Anything not shown here falls back to the base prose
styles, which is usually what you want.
