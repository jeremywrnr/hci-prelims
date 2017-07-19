---
layout: post
title: from oldest to newest
---

related: [from newest to oldest]({{ site.baseurl }}/rev-time)

{% assign list = site.data.papers.papers | sort: 'year' %}

{% include list.html list=list %}
