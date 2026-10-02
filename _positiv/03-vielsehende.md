---
title: "03 - Vielsehende"
layout: single
header:
  overlay_image: /images/header/softwareknigge-site-header-green.png

permalink: /03-vielsehende
summary: "Erfolgreiche Architekten nutzen verschiedene Sichten auf Systeme,
um unterschiedliche Aspekte in den Vordergrund zu rücken. Sie wechseln
je nach Bedarf diese Sichten, um ein gegebenes Problem aus mehreren
Perspektiven zu beleuchten und so zu einer tragfähigen Lösung zu kommen."

excerpt: ""
classes: wide

---
{% include you-read-an-extract.html %}

Erfolgreiche Architekten nutzen verschiedene Sichten auf Systeme,
um unterschiedliche Aspekte in den Vordergrund zu rücken. Sie wechseln
je nach Bedarf diese Sichten, um ein gegebenes Problem aus mehreren
Perspektiven zu beleuchten und so zu einer tragfähigen Lösung zu kommen.

Versetzen Sie sich in die Lage des Regisseurs einer Fernsehshow. Sie sitzen im Kontrollraum, wo die Bilder vieler Kameras zusammenlaufen. Sie haben ständig eine große Auswahl unterschiedlicher Perspektiven und können frei entscheiden, welche dieser Aufnahmen die momentane Situation am besten wiedergibt: Mal die Totale, mal die Großaufnahme des Stars von der tragbaren Handkamera neben der Bühne.

## Perspektiven in Software
Diese Möglichkeiten eines Fernsehregisseurs nutzen auch Softwarearchitekten – nur dass es sich bei ihnen nicht um Kamerabilder handelt, sondern um verschiedene Darstellungen oder Abstraktionen des Systems, an dem sie gerade arbeiten.

Die Grundgedanken hat Philippe Kruchten bereits 1995 in kurzer Form
veröffentlicht[^kruchten].

Weitere, verständliche und praxisnahe Darstellungen finden Sie in aktuelleren Werken von Rozanski[^rozanski] beziehungsweise Gernot Starke[^esa]

Leider aber mangelt es in der Praxis immer noch an Akzeptanz dieser einfachen Idee.

## Praxisrelevante Sichten

(Siehe dazu [arc42](https://arc42.org) bzw die
  detaillierte [Dokumentation von arc42](https://docs.arc42.org).)

* Bausteinsicht: Statische Struktur des Systems, zeigt den (statischen) Aufbau des Quellcodes.

* Laufzeitsicht: Wesentliche Abläufe im System, zeigt _wie_ die Bausteine der Bausteinsicht zusammen arbeiten bzw. ihre Aufgaben erfüllen.

* Verteilungs- oder Infrastruktursicht: Hardware beziehungsweise Verteilung
(Deployment) der Bausteine auf die Hardware.

* Ergänzen Sie diese Sichten um die Darstellung/Erklärung querschnittlicher Konzepte.

Dazu kommt noch die Kontextabgrenzung die das System eingebettet in Umsysteme
bzw. Benutzerrollen zeigt.  

![Wichtige Perspektiven](/images/03-perspektiven.jpg)


## In der Mischung liegt die Kraft
Die Bausteinsicht ist unserer Erfahrung nach die wichtigste Perspektive, so wie für den Regisseur diejenige Kamera, mit der er von der Totalen bis hin zum kleinsten Detail zoomen kann. Dabei genügt durchaus eine hohe Abstraktionsebene, die etwa die Subsysteme oder größten Komponenten zeigt - gepaar mit den verwendete technischen oder querschnittlichen Konzepten.

Oftmals unterstützen die anderen Sichten Architekten dabei, Durchblick im Dickicht komplexer Strukturen zu gewinnen. Wechseln von Perspektiven macht Architek- turen schneller stabil, weil verschiedene Einflussfaktoren besser ans Tageslicht kommen.


## Verwandte Muster
Sie nutzen [strukturierte Faulheit](/04-strukturierte-faulheit) mit Augenmaß: Verwenden Sie nur die Sichten oder Perspektiven, die für Ihre Stakeholder bzw. zur Erreichung Ihrer Ziele wirklich angemessen sind – mit dem dringenden Ziel der _Sparsamkeit_ in allen Belangen.

## Quellen

[^kruchten]: Kruchten, Phillipe: „Architectural Blueprints. The “4+1” View Model of Software Architecture”, IEEE Software 12 (6), 1995, S. 42-50

[^rozanski]: Rozanski, Nick; Woods, Eoin: „Software Systems Architecture with Stakeholders using Viewpoints and Perspectives”, Addison-Wesley, 2005;

[^esa]: Starke, Gernot: „Effektive Software-Architekturen. Ein praktischer Leitfaden“, 8. Auflage, Carl Hanser Verlag 2017
