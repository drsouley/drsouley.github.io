---
title: Home
layout: default
---

## Welcome to my blog!

Here are my latest posts:

{% for post in site.posts %}
<div class="post-preview">
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <p class="date">{{ post.date | date: "%B %d, %Y" }}</p>
    <p>{{ post.excerpt }}</p>
</div>
{% endfor %}
