---
title: Negative Verhaltensmuster
layout: single
permalink: /negativ/
header:
  overlay_image: /images/header/softwareknigge-site-header-red.png

classes: wide

---

Hier finden Sie die negativen Muster in der Übersicht.
Die Nummern vor den Titeln beziehen sich auf die Kapitel
der [gedruckten Version](https://www.amazon.de/Knigge-f%C3%BCr-Softwarearchitekten-Peter-Hruschka/dp/3868028064).


{% for negativ in site.negativ %}

## [{{ negativ.title }}]({{ negativ.url }})

{{ negativ.summary }}

{% endfor %}

{% include training-dates.html %}
