---
layout: page
title: Blog
permalink: /posts/
description: Research notes and technical essays by Yichen Zhang.
---

<p class="page-intro">
This section is reserved for research notes and technical essays. It will be published once there is a stable set of material worth archiving publicly.
</p>

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
