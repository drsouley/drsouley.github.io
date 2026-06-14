---
title: Insights
layout: default
permalink: /insights/
---

<div class="max-w-[760px] mx-auto">

  <h1 class="text-2xl font-bold tracking-[-0.02em] mb-6">{{ page.title }}</h1>

  <p class="text-on-surface-variant mb-8">Articles grouped by category.</p>

  <ul class="divide-y divide-outline-variant border-t border-b border-outline-variant">
    {% assign sorted_categories = site.categories | sort %}
    {% for category in sorted_categories %}
      <li class="flex items-baseline justify-between py-4">
        <span class="font-semibold tracking-[-0.02em] text-on-surface capitalize">
          {{ category[0] }}
        </span>
        <span class="text-sm text-on-surface-variant tabular-nums">
          ({{ category[1].size }})
        </span>
      </li>
    {% endfor %}
  </ul>

</div>
