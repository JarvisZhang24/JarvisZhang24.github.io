---
title: "GeneLM-Evo2: Zero-shot Genomic Variant Pathogenicity Analysis"
status: Completed
order: 3
tech_stack: Genomic Foundation Models, Zero-shot Inference, ML Systems, AI for Science, Evo2 7B, Modal, NVIDIA H100
---

Developed a **zero-shot variant pathogenicity scoring framework** using the Evo2 7B DNA foundation model with likelihood-based scoring over long genomic contexts (8192 tokens).

Designed a **serverless GPU inference pipeline** on NVIDIA H100 via Modal, enabling low-latency sequence scoring through autoscaling, weight caching, and optimized attention execution.

Validated model behavior on **BRCA1 clinical variants** and integrated ClinVar + reference genome retrieval to support comparative analysis across 20+ genome assemblies.

**Links:** [Code](https://github.com/JarvisZhang24/GeneLM-Evo2) · [Website](https://jarvis-ai.work)
