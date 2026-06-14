---
title: Home
layout: default
---

## Latest posts

{% for post in site.posts %}
<div class="post-preview">
  <a class="post-link" href="{{ post.url }}">
    <h2>{{ post.title }}</h2>
  </a>
  <div class="post-meta">
    {{ post.date | date: "%B %d, %Y" }}
  </div>
  <p>{{ post.excerpt }}</p>
</div>
{% endfor %}
