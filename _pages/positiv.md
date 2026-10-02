---
title: Positive Verhaltensmuster
layout: single
permalink: /positiv
header:
  overlay_image: /images/header/softwareknigge-site-header-green.png

classes: wide

---

Hier finden Sie die positiven Muster in der Übersicht.
Die Nummern vor den Titeln beziehen sich auf die Kapitel der
[gedruckten Version](https://www.amazon.de/Knigge-f%C3%BCr-Softwarearchitekten-Peter-Hruschka/dp/3868028064).


{% for positiv in site.positiv %}

## [{{ positiv.title }}]({{ positiv.url }})

{{ positiv.summary }}

{% endfor %}

{% include training-dates.html %}
