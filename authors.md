---
layout: post
title: from authors a-z
---

{% assign author_sort = site.data.papers.papers | sort:'author' %}

<ul>
{% for paper in author_sort %}
    <li>
    <b>{{ paper.author }}</b> - {{ paper.title }} - {{ paper.year }}
    </li>
{% endfor %}
</ul>

