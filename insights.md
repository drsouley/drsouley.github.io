---
title: Insights
layout: default
permalink: /insights/
---

<div class="max-w-[760px] mx-auto">

  <p class="text-on-surface-variant mb-8">Analysis and notes on AI governance, regulation, and risk.</p>

  <div class="mb-8">
    <input id="search-input" type="text" placeholder="Search insights..."
           class="w-full px-4 py-3 border border-outline-variant rounded-sm bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary">
    <ul id="search-results" class="mt-2"></ul>
  </div>

  <ul class="divide-y divide-outline-variant border-t border-b border-outline-variant">
    {% for post in site.posts %}
      <li class="group">
        <a href="{{ post.url | relative_url }}"
           class="flex items-baseline justify-between gap-6 py-5 hover:bg-surface-container-low transition-colors px-2 -mx-2 rounded-sm">
          <span class="font-semibold tracking-[-0.02em] text-on-surface group-hover:underline">
            {{ post.title }}
          </span>
          <time datetime="{{ post.date | date_to_xmlschema }}"
                class="shrink-0 text-sm text-on-surface-variant tabular-nums">
            {{ post.date | date: "%b %-d, %Y" }}
          </time>
        </a>
      </li>
    {% endfor %}
  </ul>

</div>

<script src="{{ '/assets/js/search.js' | relative_url }}"></script>
