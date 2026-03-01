---
title: "Efficiency Analysis of Tiny Recursive Models for Reasoning Tasks"
status: Completed
order: 2
tech_stack: Recursive Reasoning, Adaptive Computation Time (ACT), Efficiency Evaluation, Transformers
---

Reproduced the training pipeline of **Tiny Recursive Models (TRM)** (arXiv:2510.04871) and evaluated on the Sudoku-Extreme dataset under controlled compute budgets, characterizing **accuracy–throughput trade-offs**.

Identified an "overthinking" regime under ACT: best exact puzzle completion at T_max=2 (3.20%) vs. T_max=16 (1.97%), while token accuracy peaks at T_max=8 (65.34%).

Designed an **iso-compute comparison** with a fixed budget of B=150k transformer-block applications, varying (H_cycles, L_cycles) and scaling training steps via compute-normalized scheduling; a shallow H2-L2 design achieves the best token & exact accuracy (2.38%) with 9105 samples/s.
