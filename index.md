---
layout: home
title: Yichen Zhang
description: Yichen Zhang — M.S. in Computer Engineering at NYU. Research in Vision-Language / Multimodal Learning, Embodied AI, and Robotics.
image: /assets/profile.png
---

<section class="hero">
  <div class="hero-copy">
    <p class="eyebrow">Yichen Zhang</p>
    <h1>Multimodal learning, embodied AI, and reliable reasoning systems.</h1>
    <p class="hero-kicker">M.S. in Computer Engineering at New York University</p>
    <p class="hero-summary">
      My research focuses on vision-language models, structured multimodal generation, efficient reasoning, and robotics.
    </p>
    <p class="hero-subtext">
      I am interested in building systems that connect perception, language, and action in ways that are reliable, measurable, and useful in real-world settings.
    </p>
    <div class="button-row">
      <a class="button button--primary" href="{{ '/projects/' | relative_url }}">View Projects</a>
      <a class="button button--secondary" href="{{ '/publications/' | relative_url }}">Publications</a>
      <a class="button button--secondary" href="{{ '/about/' | relative_url }}">About</a>
      <a class="button button--secondary" href="mailto:yz10759@nyu.edu">Email</a>
      <a class="button button--secondary" href="https://github.com/JarvisZhang24">GitHub</a>
    </div>
  </div>
  <aside class="hero-panel">
    <img class="profile-photo" src="{{ '/assets/profile.png' | relative_url }}" alt="Portrait of Yichen Zhang">
    <p class="hero-role">New York University<br>M.S. in Computer Engineering</p>
    <p class="hero-areas">
      <span class="hero-areas-label">Research Areas</span>
      Vision-Language Models · Embodied AI · Robotics · AI for Science
    </p>
    <dl class="hero-facts">
      <div>
        <dt>Background</dt>
        <dd>B.S. in Communication Engineering and B.S. in Finance</dd>
      </div>
      <div>
        <dt>Current Focus</dt>
        <dd>Structured generation, efficient reasoning, and grounded multimodal systems.</dd>
      </div>
    </dl>
  </aside>
</section>

<section class="homepage-section">
  <h2 class="section-heading">Research Focus</h2>
  <div class="cards-grid cards-grid--two">
    <article class="focus-card">
      <h3>Vision-Language Models</h3>
      <p>Fine-tuning multimodal models for schema-constrained generation, structured extraction, and robust multimodal understanding.</p>
    </article>
    <article class="focus-card">
      <h3>Efficient Reasoning</h3>
      <p>Studying compute-accuracy trade-offs in recursive and adaptive reasoning systems under explicit budget constraints.</p>
    </article>
    <article class="focus-card">
      <h3>AI for Science</h3>
      <p>Using foundation models for biological sequence analysis and zero-shot scientific prediction tasks.</p>
    </article>
    <article class="focus-card">
      <h3>Embodied AI and Robotics</h3>
      <p>Exploring grounded perception-and-action pipelines that connect language, vision, and decision making in physical settings.</p>
    </article>
  </div>
</section>

<section class="homepage-section">
  <h2 class="section-heading">Selected Work</h2>
  <div class="work-list">
    <article class="work-item">
      <div class="work-header">
        <h3>Vision-Language Model Fine-tuning for Schema-Constrained Food Extraction</h3>
        <span class="work-year">2025</span>
      </div>
      <p>Fine-tuned SmolVLM2-500M for reliable JSON extraction from food images and released reproducible weights for downstream integration.</p>
      <div class="inline-links">
        <a href="https://github.com/JarvisZhang24/llm-fine-tune-jarvis">Code</a>
        <a href="{{ '/projects/' | relative_url }}">Project Notes</a>
      </div>
    </article>
    <article class="work-item">
      <div class="work-header">
        <h3>GeneLM-Evo2: Zero-shot Genomic Variant Pathogenicity Analysis</h3>
        <span class="work-year">2025</span>
      </div>
      <p>Built a zero-shot pathogenicity scoring pipeline around Evo2 7B with long-context genomic inference and a scalable GPU serving stack.</p>
      <div class="inline-links">
        <a href="https://github.com/JarvisZhang24/GeneLM-Evo2">Code</a>
        <a href="https://jarvis-ai.work">Project Site</a>
      </div>
    </article>
    <article class="work-item">
      <div class="work-header">
        <h3>Efficiency Analysis of Tiny Recursive Models for Reasoning Tasks</h3>
        <span class="work-year">2025</span>
      </div>
      <p>Reproduced Tiny Recursive Models and measured how accuracy, throughput, and compute budgets interact on Sudoku-Extreme reasoning tasks.</p>
      <div class="inline-links">
        <a href="{{ '/projects/' | relative_url }}">Project Summary</a>
      </div>
    </article>
  </div>
  <p class="section-note">Peer-reviewed papers and public preprints will be added here as they are released.</p>
</section>

<section class="homepage-section">
  <h2 class="section-heading">Recent Updates</h2>
  <div class="timeline">
    <article class="timeline-item">
      <p class="timeline-date">2025</p>
      <div>
        <h3>Schema-constrained food extraction release</h3>
        <p>Released <a href="https://github.com/JarvisZhang24/llm-fine-tune-jarvis">weights and demo assets</a> for a fine-tuned SmolVLM2-500M system focused on reliable JSON output.</p>
      </div>
    </article>
    <article class="timeline-item">
      <p class="timeline-date">2025</p>
      <div>
        <h3>Tiny Recursive Models efficiency study</h3>
        <p>Characterized accuracy-throughput trade-offs under adaptive computation and compute-normalized scheduling.</p>
      </div>
    </article>
    <article class="timeline-item">
      <p class="timeline-date">2025</p>
      <div>
        <h3>GeneLM-Evo2 public release</h3>
        <p>Released <a href="https://github.com/JarvisZhang24/GeneLM-Evo2">GeneLM-Evo2</a> for zero-shot genomic variant pathogenicity scoring with Evo2 7B.</p>
      </div>
    </article>
  </div>
</section>
