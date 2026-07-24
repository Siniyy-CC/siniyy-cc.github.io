---
layout: page
title: 標籤
permalink: /tags/
description: "按標籤瀏覽文章。"
---

{% if site.tags.size > 0 %}
  {% assign sorted_tags = site.tags | sort %}
  {% for tag in sorted_tags %}
  <section class="tag-section" id="{{ tag[0] | slugify }}">
    <h2>{{ tag[0] }}</h2>
    <ol class="archive-list">
      {% for post in tag[1] %}
      <li>
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y.%-m.%-d" }}</time>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </li>
      {% endfor %}
    </ol>
  </section>
  {% endfor %}
{% else %}
還沒有標籤。
{% endif %}
