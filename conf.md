---
layout: post
title: by publisher
---

related: [from newest to oldest]({{ site.baseurl }}/rev-conf)

{% assign conf = site.data.papers.papers | group_by: 'publisher' | sort: 'name' %}

<ul>
{% for c in conf %}
    {% assign cyear = c.items | sort: "year" %}
    {% for paper in cyear %}
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
{% endfor %}
</ul>
