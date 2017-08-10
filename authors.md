---
layout: post
title: by author
---

{% assign list = site.data.papers.papers | sort:'author' %}

{% include list.html list=list %}
