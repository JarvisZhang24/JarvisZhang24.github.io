---
title: "Vision-Language Model Fine-tuning for Schema-Constrained Food Extraction"
status: Completed
order: 1
tech_stack: Vision-Language Models, Structured Generation, Parameter-Efficient SFT, SmolVLM2-500M, PEFT, AdamW
---

Formulated food understanding as **schema-constrained JSON generation** for machine-readable outputs; curated 1,500 image–instruction pairs and designed a deterministic schema + post-checker for evaluation.

Fine-tuned SmolVLM2-500M with **PEFT SFT** (4 epochs, lr=2e-4, bf16, grad-accum 4, fused AdamW). Baseline model produced free-form text and failed to output valid JSON; fine-tuned model reliably follows the schema.

Released weights + interactive demo to support reproducible multimodal structured-generation research and downstream integration.

**Links:** [Code](https://github.com/JarvisZhang24/llm-fine-tune-jarvis)
