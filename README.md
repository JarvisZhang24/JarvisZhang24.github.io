# Jarvis Zhang's Personal Website

🌐 **Live Site**: [jarvis-zhang.com](https://jarvis-zhang.com)

My personal website built with Jekyll and hosted on GitHub Pages. This site showcases my research interests in AI, Vision-Language Models, Reinforcement Learning, and Robotics.

## 🚀 Quick Start

### Local Development

1. **Install dependencies**:
```bash
bundle install
```

2. **Run local server**:
```bash
bundle exec jekyll serve
```

3. **View site**: Open `http://localhost:4000` in your browser

### Adding Content

**New Blog Post**:
Create a file in `_posts/` with the format: `YYYY-MM-DD-title.md`

```markdown
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD HH:MM:SS -0400
categories: [category1, category2]
tags: [tag1, tag2]
---

Your content here...
```

**Update Projects**:
Edit `projects.md` to add new projects

**Update About**:
Edit `about.md` to update your information

## 📁 Site Structure

```
.
├── _posts/          # Blog posts
├── _config.yml      # Site configuration
├── index.md         # Homepage
├── about.md         # About page
├── projects.md      # Projects page
└── assets/
    └── css/
        └── style.scss  # Custom styling
```

## 🎨 Customization

- **Theme**: Using Minima theme with dark skin
- **Custom CSS**: `/assets/css/style.scss`
- **Social Links**: Edit in `_config.yml` under `minima.social_links`
- **SEO**: Managed by `jekyll-seo-tag` plugin

## 📝 Features

- ✅ Responsive design
- ✅ Dark theme support
- ✅ SEO optimized
- ✅ RSS feed
- ✅ Syntax highlighting
- ✅ Social media integration

## 🔧 Tech Stack

- **Static Site Generator**: Jekyll
- **Theme**: Minima
- **Hosting**: GitHub Pages
- **Domain**: Custom domain via CNAME

## 📦 Plugins

- `jekyll-feed` - RSS feed generation
- `jekyll-seo-tag` - SEO optimization
- `jekyll-sitemap` - Sitemap generation

## 📧 Contact

**Email**: jarviszhang.ai@gmail.com  
**GitHub**: [@JarvisZhang24](https://github.com/JarvisZhang24)