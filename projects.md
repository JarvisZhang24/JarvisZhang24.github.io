---
layout: page
title: Projects
permalink: /projects/
---

A curated list of ongoing and completed research projects. Add project files under `_projects/` to populate this page.

---

{% assign sorted_projects = site.projects | sort: 'order' %}
{% if sorted_projects.size > 0 %}
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
{% else %}
<div class="empty-state">
  No projects yet. Add your first project in `_projects/`.
</div>
{% endif %}
