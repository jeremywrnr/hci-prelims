---
layout: post
title: newest to oldest
---

related: [from oldest to newest]({{ site.baseurl }}/time)

{% assign list = site.data.papers.papers | sort: 'year' | reverse %}

{% include list.html list=list %}
