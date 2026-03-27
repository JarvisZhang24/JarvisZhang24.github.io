---
layout: page
title: Projects
permalink: /projects/
description: Selected research and engineering projects by Yichen Zhang.
---

<p class="page-intro">
Selected research and engineering work across multimodal systems, efficient reasoning, AI for science, and control.
</p>

{% assign sorted_projects = site.projects | sort: 'order' %}
{% if sorted_projects.size > 0 %}
{% assign multimodal_projects = sorted_projects | where: "group", "multimodal" %}
{% assign reasoning_projects = sorted_projects | where: "group", "reasoning" %}
{% assign science_control_projects = sorted_projects | where: "group", "science-control" %}

<section class="project-group">
  <div class="project-group-header">
    <h2 class="project-group-title">Multimodal Systems</h2>
    <p class="project-group-intro">Work on vision-language models, structured generation, and reliable multimodal outputs.</p>
  </div>
  {% for project in multimodal_projects %}
  <div class="project-item">
    <div class="project-head">
      <h3>{{ project.title }}</h3>
      <span class="project-status">{{ project.status }}</span>
    </div>
    {% if project.summary %}
    <p class="project-lead">{{ project.summary }}</p>
    {% endif %}
    {% if project.result %}
    <p class="project-result">{{ project.result }}</p>
    {% endif %}
    {% if project.links %}
    <div class="inline-links project-links">
      {% for link in project.links %}
      <a href="{{ link.url }}">{{ link.label }}</a>
      {% endfor %}
    </div>
    {% endif %}
    {% if project.tech_stack %}
    <div class="tech-stack project-tags">
      {% assign techs = project.tech_stack | split: ', ' %}
      {% for tech in techs %}<span>{{ tech }}</span>{% endfor %}
    </div>
    {% endif %}
  </div>
  {% endfor %}
</section>

<section class="project-group">
  <div class="project-group-header">
    <h2 class="project-group-title">Reasoning and Efficiency</h2>
    <p class="project-group-intro">Studies of recursive reasoning, adaptive computation, and compute-aware model behavior.</p>
  </div>
  {% for project in reasoning_projects %}
  <div class="project-item">
    <div class="project-head">
      <h3>{{ project.title }}</h3>
      <span class="project-status">{{ project.status }}</span>
    </div>
    {% if project.summary %}
    <p class="project-lead">{{ project.summary }}</p>
    {% endif %}
    {% if project.result %}
    <p class="project-result">{{ project.result }}</p>
    {% endif %}
    {% if project.links %}
    <div class="inline-links project-links">
      {% for link in project.links %}
      <a href="{{ link.url }}">{{ link.label }}</a>
      {% endfor %}
    </div>
    {% endif %}
    {% if project.tech_stack %}
    <div class="tech-stack project-tags">
      {% assign techs = project.tech_stack | split: ', ' %}
      {% for tech in techs %}<span>{{ tech }}</span>{% endfor %}
    </div>
    {% endif %}
  </div>
  {% endfor %}
</section>

<section class="project-group">
  <div class="project-group-header">
    <h2 class="project-group-title">Scientific and Control Systems</h2>
    <p class="project-group-intro">Projects at the intersection of scientific modeling, long-context inference, and dynamical control.</p>
  </div>
  {% for project in science_control_projects %}
  <div class="project-item">
    <div class="project-head">
      <h3>{{ project.title }}</h3>
      <span class="project-status">{{ project.status }}</span>
    </div>
    {% if project.summary %}
    <p class="project-lead">{{ project.summary }}</p>
    {% endif %}
    {% if project.result %}
    <p class="project-result">{{ project.result }}</p>
    {% endif %}
    {% if project.links %}
    <div class="inline-links project-links">
      {% for link in project.links %}
      <a href="{{ link.url }}">{{ link.label }}</a>
      {% endfor %}
    </div>
    {% endif %}
    {% if project.tech_stack %}
    <div class="tech-stack project-tags">
      {% assign techs = project.tech_stack | split: ', ' %}
      {% for tech in techs %}<span>{{ tech }}</span>{% endfor %}
    </div>
    {% endif %}
  </div>
  {% endfor %}
</section>
{% else %}
<div class="empty-state">
  No projects yet. Add your first project in `_projects/`.
</div>
{% endif %}
