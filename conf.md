---
layout: post
title: by publisher
---

{% assign list = site.data.papers.papers | sort: 'year' | reverse | sort: 'publisher' %}

<ul>
{% for paper in list %}
    <li>
    {% if paper.link %}<a href="{{paper.link}}" target="_blank">{% endif %}

    <b>
    {% if paper.publisher %} {{ paper.publisher }}
    {% else %} undefined {% endif %}
    {{ paper.year }}
    </b>
    - <i>{{ paper.author }}</i>
    - {{ paper.title }}

    {% if paper.link %}</a>{% endif %}
    </li>
{% endfor %}
</ul>
