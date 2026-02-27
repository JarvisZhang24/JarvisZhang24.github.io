---
layout: page
title: Blog
permalink: /posts/
---

This page lists your research notes and technical posts. Add markdown files to `_posts/` to publish entries.

---

{% if site.posts.size > 0 %}
{% for post in site.posts %}

<div class="post-item">
  <h3><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h3>
  <div class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</div>
  {% if post.excerpt %}
  <div class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 40 }}</div>
  {% endif %}
</div>
{% endfor %}
{% else %}
<div class="empty-state">
  No posts yet. Add your first post in `_posts/`.
</div>
{% endif %}
