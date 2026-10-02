---
title: "27 - Saubermann"
layout: single
header:
  overlay_image: /images/header/softwareknigge-site-header-green.png

permalink: /27-saubermann
summary: "Schlechter Code stinkt, verursacht Unwohlsein, Kopfschmerzen und eine Menge anderer übler Probleme. Schlechter Code kommt in verschiedenen Ausprägungen daher – die wir mit unterschiedlichen Maßnahmen bekämpfen oder verbessern sollten."

excerpt: ""
classes: wide

---
{% include you-read-an-extract.html %}

Schlechter Code stinkt, verursacht Unwohlsein, Kopfschmerzen und eine Menge anderer übler Probleme. Schlechter Code kann in ganz verschiedenen Ausprägungen daherkommen – die wir mit unterschiedlichen Maßnahmen bekämpfen oder verbessern sollten. In dieser Folge möchten wir Ihnen den Saubermann vorstellen – der Chaos und Unordnung in schlechtem Code beseitigt.

Schlechter oder riskanter Code, das bedeutet unverständliche, ungeschickte, umständliche Programmierung, überschüssige Komplexität, verletzte Konventionen oder Idiome, Missbrauch der Programmiersprache oder deren falscher Einsatz.
Und, Sie haben es schon vermutet, keine automatisierten Testfälle. Anti-Clean-Code, sozusagen. Falls Sie Ihr eigenes System jetzt schon wiedererkennen – willkommen im Club.

## Erst mal suchen
Dummerweise gibt es in manchen Systemen riesige Mengen von schlechtem Code, sodass der freundliche Saubermann erst suchen sollte, welche Stellen er bereinigen muss.

## Kategorien des Code-Grauens
Im Wesentlichen kennen wir folgende Kategorien schlechten Quellcodes:

* Code, der zur Laufzeit des Systems Schmerzen oder Probleme verursacht, beispielsweise durch schlechte Performance oder übermäßigen Ressourcenverbrauch.
* Code, der Änderungen am System erschwert oder verhindert, beispielsweise durch zu hohe Komplexität, Unverständlichkeit oder schlechte Schnittstellen.
* Code, der gängige Idiome, Konventionen oder Best Practices verletzt, schlechte Bezeichner verwendet oder einfach nur mies aussieht.
* Code, der deutlich anders als der Rest eines Systems geschrieben ist, beispielsweise in anderen Sprachen, mit anderen Frameworks, nach anderen Paradigmen oder Konzepten.
* Nicht getesteter Code. Michael Feathers[^feathers] nennt so etwas Legacy Code
* Hinzu kommt noch riskanter Code – der nicht unbedingt schlecht sein muss, aber eine tickende Zeitbombe sein könnte.

Zwei Aufgaben hat der Saubermann damit: Schmutz (d. h. schlechten oder riskanten Code) finden und zweitens – saubermachen.

[^feathers]: Feathers, Michael: „Working Effectively with Legacy Code“, Prentice Hall, 2005. Ein großartiges Buch, das meiner (Gernots) Meinung nach jeder lesen sollte, der Software ändert.

## Verschmutzung messen
Schlechten Code finden Sie am besten durch geeignete Metriken oder ähnliche
Analysemethoden. Dabei sollten Sie eine Mischung aus organisatorischen Metriken, Laufzeitmessungen sowie statischen (Code-)Metriken kombinieren.

Grundsätzlich ergibt es Sinn, Metriken immer über längere Zeiträume zu messen und ihre Entwicklung über die Zeit zu beobachten.

Beginnen wir mit zwei organisatorischen Metriken:

1. Sie sollten einerseits messen, für welche Bausteine das Entwicklungsteam wie viel Zeit und Aufwand verwendet, und
2. für Ihre Bausteine die Anzahl der darin gemeldeten Fehler und Probleme kennen.

Relativ hohe Zahlen in einer der beiden Metriken rechtfertigen Umbau- und Verbesserungsmaßnahmen. In üblichen CI- Umgebungen werden diese Werte nicht gemessen – daher müssen Sie als Saubermann hier selbst tätig werden.

## Stoppuhr und Co.
Als Nächstes messen Sie als Saubermann das Laufzeitverhalten Ihres Systems durch detailliertes Profiling: Messen Sie Laufzeiten einzelner Bausteine, die Häufigkeiten der Aufrufe und deren Speicher- oder Ressourcenverbrauch. Idealerweise messen Sie diese Größen regelmäßig (mindestens wöchentlich) in Last- oder Stresstests.

Auch hieraus können Sie „Reinigungsbedarf“ ableiten: Säubern Sie Bausteine, die besonders häufig aufgerufen werden, besonders lange Zeit oder viel Speicher benötigen.

## Höhe der Verantwortung
Kommen wir zu einem weiteren Aspekt der statischen Codeanalyse: Zur Identifikation von riskantem Code empfehlen wir Ihnen insbesondere die Messung der
_afferenten Kopplung_. Sie gibt die Anzahl der eingehenden Abhängigkeiten an, also derjenigen Bausteine, die vom jeweils vermessenen Baustein abhängig sind. Anders ausgedrückt misst sie die Höhe der „Verantwortung“ eines Bausteins.

Hohe afferente Kopplung bedeutet, dass im Fehler- oder Problemfall sehr
viele andere Bausteine betroffen sind.


## Fazit
Finden Sie riskanten oder schlechten Code durch eine Kombination technischer und organisatorischer Metriken: Beobachten Sie Abhängigkeiten und Komplexität, Fehlercluster und Laufzeit-/Performancewerte. Korrelieren Sie diese Metriken: Bausteine, die in mehr als einer der Metriken schlecht abschneiden, sollten Sie mit hoher Priorität verbessern (Stichwort: Refactoring).


{% include training-dates.html %}
