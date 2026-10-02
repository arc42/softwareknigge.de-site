---
title: "28 - Schmutzfink"
layout: single
header:
  overlay_image: /images/header/softwareknigge-site-header-red.png

permalink: /28-schmutzfink
summary: "Schmutzfinken besitzen einen überaus starken Überlebenswillen und lassen sich auch durch Technologiewechsel nicht aus ihrem Konzept bringen. Im Gegenteil: Mit jeder neuen Technologie, Programmiersprache und jedem Framework entdecken Schmutzfinken neue und kreative Möglichkeiten, ihrer Passion zu frönen."

excerpt: ""
classes: wide

---
{% include you-read-an-extract.html %}


Schmutzfinken – eine Spezies, die so alt ist wie das Programmieren selbst. Schmutzfinken besitzen einen überaus starken Überlebenswillen und lassen sich auch durch Technologiewechsel nicht aus ihrem Konzept bringen. Im Gegenteil: Mit jeder neuen Technologie, Programmiersprache und jedem Framework entdecken Schmutzfinken neue und kreative Möglichkeiten, ihrer Passion zu frönen.

## Namen sind Schall und Rauch
Wie im ersten Programmierkurs nennen Schmutzfinken die Dinge gerne kurz.

`i, j, x` und `y` eignen sich als Namen hervorragend, ob Businessdaten oder Statusinformation, kürzer als einbuchstabig geht leider nicht. Und in der Kürze liegt die Würze.

Statt viel Zeit in das Erfinden fachlich passender Bezeichner zu investieren, halten wir uns an etablierte Kurzformen und schaffen dadurch knackig kompakten Code.
Das gilt natürlich sowohl für Variablen, Attribute sowie Funktionen oder Methoden.

## Modularisierung ist böse

Nur solche Menschen modularisieren, die zuhause warm duschen oder im Winter eine Heizung benutzen. Richtige Entwickler zentralisieren Logik und Daten in möglichst wenigen Dateien. Funktionen oder Methoden sind schon Modularisierung genug, was braucht der schmutzige Fink dazu noch weitere Klassen, Packages oder Namespaces.

Eine einzige Klasse, beispielsweise `Server.java`, genügt für mittelgroße Systeme in jedem Fall. Da bekommt der Schmutzfink richtig schöne _Kohäsion_: Es steht alles, wirklich alles, zusammen, was zusammen gehört (okay, möglicherweise noch einiges mehr – aber das ist Erbsenzählerei).

## Big is beautiful
In langen Funktionen oder Methoden steht alles, was der Schmutzfink über diese Methode wissen muss – kein lästiges Hin- und Herspringen, kein Verfolgen von Aufrufketten. Diese Vorschläge, höchstens eine Bildschirmseite voll (oder gar noch kürzer, wie Robert Martin[^cleancode] fordert) taugen höchstens für Menschen mit schwachem Kurzzeitgedächtnis, aber nicht für echte Entwickler.

## Zwei-Augen-Prinzip
Zwei Augen genügen. Immer. Sonst redet dem Schmutzfink ja nur jemand anders unnötigerweise rein – und unterbricht unter Umständen den kontinuierlichen Ausfluss der Komplexität – ähm Genialität. Allein programmiert es sich immer noch am besten. Außerdem sitzt mir ja der Computer gegenüber – der hilft in Krisen zuverlässig und kompetent weiter.


## Quellen

Das [Original](https://jaxenter.de/knigge-fur-softwarearchitekten-der-schmutzfink-669)
erschien im September 2014 im JavaMagazin.

[^cleancode]: Martin, Robert: „Clean Code. A Handbook of Agile Software Craftsmanship“, Prentice Hall, 2008

{% include training-dates.html %}
