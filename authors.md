---
layout: post
title: from authors a-z
---

{% assign list = site.data.papers.papers | sort:'author' %}

{% include list.html list=list %}
