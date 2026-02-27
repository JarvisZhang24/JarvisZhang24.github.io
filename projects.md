---
layout: page
title: Projects
permalink: /projects/
---

A selection of research and applied AI projects. For source code and additional work, see my [GitHub profile](https://github.com/JarvisZhang24).

---

{% assign sorted_projects = site.projects | sort: 'order' %}
{% for project in sorted_projects %}

<div class="project-item">
  <h3>{{ project.title }}</h3>
  <span class="project-status">{{ project.status }}</span>
  <div class="project-desc">{{ project.content | markdownify }}</div>
  {% if project.tech_stack %}
  <div class="tech-stack">
    {% assign techs = project.tech_stack | split: ', ' %}
    {% for tech in techs %}<span>{{ tech }}</span>{% endfor %}
  </div>
  {% endif %}
</div>
{% endfor %}
