---
layout: post
title: from newest to oldest
---

related: [from oldest to newest]({{ site.baseurl }}/chronological)

{% assign time_sort = site.data.papers.papers | sort: 'year' | reverse %}

<ul>
{% for paper in time_sort %}
    <li>
    {% if paper.link %} <a href="{{paper.link}}"> {% endif %}

    <b>{{ paper.year }}</b>
    - <i>{{ paper.author }}</i>
    - {{ paper.title }}

    {% if paper.link %} </a> {% endif %}
    </li>
{% endfor %}
</ul>

