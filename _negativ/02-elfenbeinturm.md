---
title: "02 - Elfenbeinturm"
layout: single
header:
  overlay_image: /images/header/softwareknigge-site-header-red.png

permalink: /02-elfenbeinturm

summary: 'In der Abgeschiedenheit, fernab der Praxis, brütet ein verschrobenes Grüppchen Lösungsvorschläge aus, die niemand umsetzen möchte, denen es an Alltagstauglichkeit mangelt und deren (vermeintliche) _Genialität_ nur wenige zu würdigen wissen.'

excerpt: ''
classes: wide
---
{% include you-read-an-extract.html %}



In der Abgeschiedenheit, fernab der Praxis, brütet ein verschrobenes Grüppchen Lösungsvorschläge aus, die niemand umsetzen möchte, denen es an Alltagstauglichkeit mangelt und deren (vermeintliche) _Genialität_ nur wenige zu würdigen wissen.

## Praxisferne

Der Elfenbeinturm gilt in vielen Disziplinen als der Innbegriff der Praxisferne, das Eldorado derjenigen, die forschen, ohne anzuwenden.

Als Kontrapunkt dazu lautet der Spruch der Praktiker _Eat your own Dogfood_: Wende die Dinge gefälligst selbst an, die du uns beizubringen versuchst. Das vermeiden die Elfenbeintürmler tunlichst.

>**War Story**
> In einem sehr großen Projekt hatte ich es mit folgender Situation zu tun:
>* Mehrere parallele Teilprojekte (genannt „Produkte“)
>* Ähnliche fachliche Ausrichtung
>* Identische Basistechnologie (beispielsweise UI-Framework, Persistenz, Logging, Monitoring, Rollen- und Berechtigungskonzept), die eine eigenständige Gruppe für die Produkte als „Framework“ bereitstellen sollte.
>Das Framework sollte die Produktteams von der darunter liegenden Technologie befreien, sodass sie sich auf die fachlichen Details ihrer Produkte konzentrieren konnten. Das klingt erst einmal vernünftig, weil man so Mehrfachentwicklung vermeiden kann.
>Allerdings waren in meinem Projekt die Frameworkarchitekten und -entwickler absolute „Generiker“ und arbeiteten völlig entkoppelt von den Produktteams. Das resultierte in einem klassischen Elfenbeinturmproblem: Die Features der Frameworks passten nicht zu den Anforderungen der konkreten Produkte. Die Produktteams konnten viele fachliche Aufgaben nur lösen, indem sie am Framework „vorbei“ programmierten (GS).


## Verwandte Muster


* Heroische Programmierer schreiben schon mal eine Funktion neu, weil sie es (vermeintlich) besser können als die ursprünglichen Autoren.
Falls sie dabei bewusst und absichtlich handeln, weil sie beispielsweise
die Abhängigkeit von dieser (ursprünglichen) Funktion verhindern wollen,
geht das klar. Aber: Auf solche [Codehelden](/10-codeheld) lauert das Not-invented-here-Syndrom.

{% include training-dates.html %}
