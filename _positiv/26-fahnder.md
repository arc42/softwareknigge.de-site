---
title: "26 - Fahnder"
layout: single
header:
  overlay_image: /images/header/softwareknigge-site-header-green.png

permalink: /26-fahnder
summary: "Architekten als Fahnder sucht nach Softwareverbrechen, Codesünden
oder risikoträchtigen Teilen der Software."

excerpt: ""
classes: wide

---
{% include you-read-an-extract.html %}

Architekten als Fahnder sucht nach Softwareverbrechen, Codesünden
oder risikoträchtigen Teilen der Software.

### Mehr als nur Motiv und Gelegenheit
Bei klassischen Delikten haben Fahnder es meistens mit der Einzahl zu tun:
**Ein** Täter, **ein** einziges Verbrechen. Nehmen wir als Beispiel die mutwillig zerschlagene Fensterscheibe: Ein Täter, ein Tatwerkzeug, ein beschädigtes Fenster.

Bei Software verursachen meistens viele Täter jeweils nur Teile des Gesamtschadens.
An einer einzigen Sache werden sozusagen beliebig viele Verbrechen unterschiedlicher Arten begangen.

Etwa so, als würde unser Steinewerfer auch noch falsch parken, das Haus mit Graffiti beschmieren und die Haustüre mit Sekundenkleber an ihrem Rahmen fixieren.
Statt also klassisch nur nach Motiv und Gelegenheit zu suchen, müssen wir als IT-Fahnder zuerst einmal die (**Vielzahl der**) begangenen Verbrechen untersuchen:

* Qualitative Sünden: Wo werden welche Qualitätsanforderungen verletzt?
* Funktionale Sünden: Wo verhält sich ein System fehlerhaft, stellt nicht die notwendige Funktionalität bereit oder arbeitet falsch?
* Kostensünden: Wo wird Geld verschwendet – durch überteuerten Betrieb oder aufwendige Wartung/Erweiterung?
* Codesünden: Wo steckt unverständlicher, schlechter Code?
* Architektursünden: Welche Entscheidungen, Frameworks, Technologien, Schnittstellen oder Strukturen erscheinen mangelhaft?
* Prozesssünden: Wo behindern starre oder aufgeblähte Prozesse die effektive Arbeit am System? Welche notwendigen Aufgaben werden vernachlässigt?
* Managementsünden: Wo fehlt es an notwendiger Unterstützung?

Wir haben schon Systeme erlebt (ähm – erlitten), an denen sämtliche dieser Sünden und Vergehen in wechselnden Mengenverhältnissen begangen wurden.

Finden Sie die begangenen Softwareverbrechen eines Systems
(in IT- Speak: Probleme, Risiken und technische Schulden) durch zwei verschiedene Ansätze: Einerseits durch _Vernehmung_ von Opfern und relevanten Zeugen,
andererseits über _Spurensicherung_ am echten System.


### Opfer und Zeugen vernehmen
Den Tatort, oder besser den „Gegenstand der Verbrechen“, inspizieren Sie am besten aus unterschiedlichen Perspektiven. Zuerst sollten Sie sich live ein Bild von seinem Zustand machen – am besten haben Sie vorher aus Berichten der Beteiligten den ursprünglichen Zweck des Systems verstanden.

Jetzt sind Sie gut gerüstet für die Vernehmung der ersten Opfer und Zeugen: Befragen Sie Anwender, Betreiber und Auftraggeber. Führen Sie Interviews mit Entwicklern und Testern des Systems bzw. direkter Nachbarsysteme. Fragen Sie nach deren Einschätzung der „schlimmsten Sünden“, fragen Sie ob Technologie und Organisation überhaupt zu den Anforderungen passen.

### Spurensicherung
Mit den gezielten Hinweisen der betroffenen Stakeholder sind Sie bestens gewappnet für die Spurensuche am System selbst. Wir empfehlen Ihnen dringend, auch hier unterschiedliche Fahndungsansätze zu verfolgen: Zuerst untersuchen Sie die qualitativen Sünden: Die pragmatische Anwendung der erprobten ATAM-Methode hilft Ihnen, die geforderten und real vorhandenen Qualitätseigenschaften des Systems detailliert zu untersuchen.

Besonders mögen wir an der Methode, dass sie ohne besondere Werkzeuge auf praktisch alle Arten von Systemen anwendbar ist. Sie lernen daraus viel über die Architektur des Systems.

### Follow the Money
Krimiautoren erklären ihren Lesern oftmals, dass die Fahnder und Kommissare „der Spur des Geldes folgen sollen“. Diesen Aspekt der Fahndung sollten Sie auf jeden Fall berücksichtigen: Stellen Sie fest, in welchen Bereichen von Konzeption, Entwicklung, Test und Betrieb für das System welche Kosten entstehen – und wodurch. Vergleichen Sie dies auch mit dem durch das System erzeugten (finanziellen) Nutzen.

Die [aim42](https://aim42.org) Methodik zur Architekturverbesserung spricht in diesem
Zusammenhang auch von "Schmerzkosten", d.h. den durch Probleme (aka "Sünden")
verursachten Kosten oder zusätzlichen Aufwänden.

### Sachdienliche Hinweise und Ablenkungsmanöver
Sie haben als Softwarefahnder unterschiedliche Aussagen und Spuren erhalten. Einige davon werden identische Sachverhalte betreffen („alle Befragten beschwerten sich über den zu langsamen CI-Server“), andere werden sich widersprechen (Zeuge A antwortet auf eine Frage mit Ja, Zeuge B auf dieselbe Frage mit Nein).

Manche Ihrer Zeugen lenken – bewusst oder unbewusst – die Aufmerksamkeit von eigenen Schwachstellen oder Fehlern ab: Kritische Probleme oder Risiken bezeichnen sie als Lappalien, bauschen aber Mücken zu Elefanten auf.

Eine Ihrer Aufgaben als gründlicher Fahnder besteht darin, solche
_reality distortions_ zu entlarven: Prüfen Sie Alibis,
verifizieren Sie Zeugenaussagen durch gezielte Prüfungen des
betroffenen Quellcodes oder anderer objektiver Informationsquellen.


### Verwandte Muster
Fahnder korrelieren mit vielen der positiven Muster in unserem Knigge:

* Sie halten die Augen in alle Richtungen offen ([Vielsehende](/13-vielsehende)),
* Sie wägen Kosten und Risiken ab ([technische Risikomanager](/14-risikomanager)),
* Sie vermeiden [Perfektion](/13-perfektionist) , aber vor allem sorgen
sie dafür, dass Architektur, Sourcecode und auch der Entwicklungsprozess ständig einfacher, überschaubarer und daher wartbarer werden
(Siehe [Der Vereinfachungskobold](/12-vereinfachungskobold)).



### Hinweis
{% include training-dates.html %}
