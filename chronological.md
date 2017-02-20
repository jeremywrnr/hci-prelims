---
layout: post
title: from oldest to newest
---

related: [from newest to oldest]({{ site.baseurl }}/reverse-chronological)

{% assign time_sort = site.data.papers.papers | sort: 'year' %}

<ul>
{% for paper in time_sort %}
    <li>
    <b>{{ paper.year }}</b>
    - <i>{{ paper.author }}</i>
    - {{ paper.title }}
    </li>
{% endfor %}
</ul>

