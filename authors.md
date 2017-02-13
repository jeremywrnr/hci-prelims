---
layout: home
---

<ul>
{% for paper in site.data.papers %}
    <li>
    {{ paper.author }} - {{ paper.title }} - {{ paper.year }}
    </li>
{% endfor %}
</ul>

