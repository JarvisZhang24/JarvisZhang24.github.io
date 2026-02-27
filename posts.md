---
layout: page
title: Blog
permalink: /posts/
---

Technical writing on AI research, machine learning, and robotics.

---

{% if site.posts.size > 0 %}
{% for post in site.posts %}

<div class="post-card">
  <h3><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h3>
  <div class="post-meta">
    {{ post.date | date: "%B %-d, %Y" }}
    {% if post.author %} &middot; {{ post.author }}{% endif %}
  </div>
  {% if post.tags.size > 0 %}
  <div class="post-tags">
    {% for tag in post.tags %}<span>{{ tag }}</span>{% endfor %}
  </div>
  {% endif %}
  {% if post.excerpt %}
  <div class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 40 }}</div>
  {% endif %}
</div>
{% endfor %}
{% else %}
<p style="color: #888; padding: 2rem 0;">No posts yet. Check back soon.</p>
{% endif %}

---

<p style="font-size: 0.9rem; color: #888;">Subscribe via <a href="/feed.xml">RSS</a></p>
