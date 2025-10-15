---
layout: page
title: Projects
permalink: /projects/
---

<div class="project-list">
  {% for project in site.projects %}
    <div class="project-item">
      <h3>{{ project.title }}</h3>
      <p>{{ project.content | markdownify }}</p>
      <p><strong>Tech Stack:</strong> {{ project.tech_stack }}</p>
      <p><strong>Status:</strong> {{ project.status }}</p>
    </div>
  {% endfor %}
</div>

<hr>

### More Projects

Check out more of my work on [GitHub](https://github.com/JarvisZhang24).
