---
layout: page
title: 歸檔
permalink: /archive/
description: "按時間瀏覽全部文章。"
---

{% if site.posts.size > 0 %}
<ol class="archive-list">
  {% for post in site.posts %}
  <li>
    <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y.%-m.%-d" }}</time>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </li>
  {% endfor %}
</ol>
{% else %}
還沒有文章。
{% endif %}
