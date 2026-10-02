---
title: Neutrale Beobachtungen

layout: single
permalink: /neutral
header:
  overlay_image: /images/header/site-header.png

classes: wide

---
Hier finden Sie die neutralen Beobachtungen und Muster in der Übersicht.
Die Nummern vor den Titeln beziehen sich auf die Kapitel der
[gedruckten Version](https://www.amazon.de/Knigge-f%C3%BCr-Softwarearchitekten-Peter-Hruschka/dp/3868028064).


{% for neutral in site.neutral %}

### [{{ neutral.title }}]({{ neutral.url }})

{{ neutral.summary }}

{% endfor %}

### Hinweis
{% include training-dates.html %}
