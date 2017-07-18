---
layout: post
title: from authors a-z
---

{% assign author_sort = site.data.papers.papers | sort:'author' %}

<ul>
{% for paper in author_sort %}
    <li>
    {% if paper.link %} <a href="{{paper.link}}"> {% endif %}

    <b>{{ paper.year }}</b>
    - <i>{{ paper.author }}</i>
    - {{ paper.title }}

    {% if paper.link %} </a> {% endif %}
    </li>
{% endfor %}
</ul>

