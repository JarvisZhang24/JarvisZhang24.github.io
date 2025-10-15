---
layout: page
title: Projects
permalink: /projects/
---

Here are some of the research and applied AI projects I'm currently working on. Each project represents my commitment to advancing intelligent systems through multimodal learning and embodied AI.

---

<div class="project-list">
  {% assign sorted_projects = site.projects | sort: 'order' %}
  {% for project in sorted_projects %}
    <div class="project-item" style="margin-bottom: 2em; padding: 1.5em; border: 2px solid #e8e8e8; border-radius: 10px; background: #fafafa;">
      <h2 style="margin-top: 0; color: #2c3e50;">{{ project.title }}</h2>
      
      <div style="margin: 1em 0;">
        <span style="display: inline-block; padding: 0.3em 0.8em; background: #e3f2fd; border-radius: 4px; font-size: 0.9em; margin-right: 0.5em;">
          <strong>Status:</strong> {{ project.status }}
        </span>
      </div>
      
      <div style="margin: 1.5em 0;">
        {{ project.content | markdownify }}
      </div>
      
      <div style="margin-top: 1em; padding-top: 1em; border-top: 1px solid #ddd;">
        <strong>🛠️ Tech Stack:</strong> {{ project.tech_stack }}
      </div>
    </div>
  {% endfor %}
</div>

---

## 🌟 More Projects & Contributions

For more of my work, including open-source contributions, experiments, and side projects, check out my [GitHub profile](https://github.com/JarvisZhang24).

---

## 💡 Interested in Collaboration?

I'm always open to discussing new research ideas, potential collaborations, or exciting opportunities in AI and robotics. Feel free to [reach out](mailto:jarviszhang.ai@gmail.com)!
