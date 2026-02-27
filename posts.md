---
layout: page
title: Blog
permalink: /posts/
---

Technical writing on AI research, machine learning, and robotics.

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
<p style="color: #aaa; padding: 1.5rem 0;">No posts yet. Check back soon.</p>
{% endif %}
