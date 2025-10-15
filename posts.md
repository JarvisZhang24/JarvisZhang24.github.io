---
layout: page
title: Blog Posts
permalink: /posts/
---

Welcome to my blog! Here I share technical insights, tutorials, and thoughts on AI research, machine learning, and robotics. 

---

{% if site.posts.size > 0 %}
  <div class="post-list">
    {% for post in site.posts %}
      <article class="post-list-item" style="margin-bottom: 2em; padding: 1.5em; border: 2px solid #e8e8e8; border-radius: 10px; background: #fafafa; transition: transform 0.2s, box-shadow 0.2s;">
        <header>
          <h2 style="margin-top: 0;">
            <a class="post-link" href="{{ post.url | relative_url }}" style="text-decoration: none; color: #2c3e50;">
              {{ post.title | escape }}
            </a>
          </h2>
          <p class="post-meta" style="color: #666; font-size: 0.9em;">
            📅 {{ post.date | date: "%B %-d, %Y" }}
            {% if post.author %} • ✍️ {{ post.author }}{% endif %}
            {% if post.tags.size > 0 %}
              <br>
              🏷️ Tags: 
              {% for tag in post.tags %}
                <span style="background: #e3f2fd; padding: 0.2em 0.6em; border-radius: 3px; margin-right: 0.3em; font-size: 0.85em;">{{ tag }}</span>
              {% endfor %}
            {% endif %}
          </p>
        </header>
        
        {% if post.excerpt %}
          <div class="post-excerpt" style="margin: 1em 0; color: #555; line-height: 1.6;">
            {{ post.excerpt | strip_html | truncatewords: 50 }}
          </div>
        {% endif %}
        
        <a href="{{ post.url | relative_url }}" style="display: inline-block; margin-top: 0.5em; color: #0066cc; text-decoration: none; font-weight: 500;">
          Read more →
        </a>
      </article>
    {% endfor %}
  </div>
{% else %}
  <p style="text-align: center; color: #666; padding: 2em; background: #f8f9fa; border-radius: 8px;">
    📝 No posts yet. Check back soon for technical articles and insights!
  </p>
{% endif %}

---

## 📬 Stay Updated

Subscribe to the [RSS feed](/feed.xml) to get notified when I publish new posts.