---
title: "12 – Vereinfachungskobold"
layout: single
header:
  overlay_image: /images/header/softwareknigge-site-header-green.png

permalink: /12-vereinfachungskobold
summary: "Im Kopf von Softwarearchitekt:innen sollte es mehrere parallel ablaufende Demon-Prozesse geben (beispielsweise `speakd, seed, feeld, thinkd`). Die höchste Priorität erhält dabei der `simplifyd`, der überflüssige Komplexität erkennt und automatisch reduziert."

excerpt: ""
classes: wide

---
{% include you-read-an-extract.html %}

**Frage**: Wie booten Softwarearchitekt:innen?

**Antwort**: Nach dem meist akustischen Wake-up-Event erfolgt der Übergang von Runlevel 0 auf Runlevel 1. Darin findet sich das noch schlaftrunkene Individuum kurze Zeit später vis-à-vis der durch eine Zeitschaltuhr bereits eingeschalteten Kaffeemaschine. Es fordert per Knopfdruck ein koffeinhaltiges Heißgetränk und führt die statische Methode `drinkSlurp( coffee )` aus. Dadurch gelangt das Wesen in Runlevel 2, den vorläufigen Wachzustand. Jetzt starten diverse Daemon-Prozesse (speakd, seed, feeld, thinkd). Die höchste Priorität erhält dabei der simplifyd, der überflüssige Komplexität erkennt und automatisch reduziert. simplifyd ist non-interruptible.

## simplifyd: Der Vereinfachungskobold
Wir nennen den simplifyd auch den Vereinfachungskobold, der tief eingebettet in Ihrem Architektengehirn im Hintergrund ständig nach Vereinfachungspotenzial sucht.

Dummerweise gibt es im realen Leben keine Kobolde in Ihrem Gehirn,
sodass Sie die mit der Vereinfachung verbundenen Aufwände doch
noch selbst leisten müssen.

## Einfach ist gut
Einfachheit ist grundsätzlich ein erstrebenswertes Entwurfsziel für
Softwarearchitekt:innen. Einfache Systeme sind leichter verständlich,
enthalten weniger Risiko, lassen sich mit weniger oder leichter
verständlichem Code implementieren und sind meistens leichter erweiterbar.

In einfacheren Systemen können Sie leichter Fehler finden, und
höchstwahrscheinlich sind auch erheblich weniger Fehler darin enthalten.

Einfache Systeme reduzieren Kosten und Aufwand gegenüber komplizierten.

Einfachere Systeme sind schlichtweg besser als komplizierte Systeme.

## Ziel: Einfache Lösung
Wir merken in der Praxis oft leichte Verwirrung der Begriffe „kompliziert“ und „komplex“ – beides Antagonisten unserer gewünschten Einfachheit:

* **Kompliziert** sind Dinge, die viele Einflussfaktoren in nachvollziehbaren,
linearen Zusammenhängen enthalten. Komplizierte Systeme können wir mit „Wissen“ verstehen. Zur Behandlung komplizierter Situationen genügen Regelwerke.
**Komplex** sind Dinge, bei denen viele Einflussfaktoren in nicht linearen, meist dynamischen Zusammenhängen stehen. Zur Behandlung komplexer Situationen benötigen Sie Erfahrung und Heuristiken – aber selbst dann gibt es keine Garantie für Erfolg.


## Einfachheit wertschätzen
Erziehen Sie sich selbst und Ihre Teams dazu, Einfachheit wertzuschätzen.
Nutzen Sie die ohnehin regelmäßigen Treffen in der Kaffeeküche zu einem
kurzen Gespräch und fragen Ihr Team nach Vereinfachungsmöglichkeiten.
Gezielt darauf angesprochen, kann Ihnen jedes Teammitglied Stellen im Quellcode nennen,
die es wert wären, vereinfacht zu werden. Wir nennen ein solches Ritual die
„Vereinfachungsminute“ – das geht schnell und liefert (praktisch garantiert)
gute Anregungen.

## Verwandte Muster

Dem Vereinfachungskobold graut vor zwei Dingen:

1. dem [Zuviel des Guten](07-zuviel-des-guten) und dem
2. [Flexibilisator](32-flexibilisator):

## Quellen
