---
title: "37 - Fortschritt statt Verschlimmbesserung"
layout: single
header:
  overlay_image: /images/header/site-header.png

permalink: /37-fortschritt-statt-verschlimmbesserung

summary: "'Verschlimmbesserung' (Substantiv, feminin): beabsichtigte Verbesserung, die real aber eine Verschlechterung einer Sache, eines Prozesses usw. bewirkt."

excerpt: ""
classes: wide
---
{% include you-read-an-extract.html %}

„Verschlimmbesserung" (Substantiv, feminin): beabsichtigte Verbesserung, die real aber eine Verschlimmerung [oder] Verschlechterung einer Sache, eines Zustandes, eines Prozesses usw. bewirkt.[^wikipedia]


Ändern und erweitern unter Zeitdruck, das ist (traurige) Normalität für viele Softwerker. Ständig zwingen uns widrige Umstände oder dunkle Mächte dazu, mit zu wenigen Informationen oder zu wenig Zeit neue Features oder auch notwendige Änderungen suboptimal umzusetzen. Wir möchten gerne besser arbeiten, aber nur selten geben uns die _dunklen Mächte_ die Chance dazu.

## Dimensionen der Verbesserung
Bevor wir Ihnen Auswege aus dieser Misere verraten, wollen wir Ihnen die beiden Dimensionen aufzeigen, auf die es bei allen Verbesserungen ankommt. Meistens wollen wir ein System im Laufe der Zeit durch zusätzliche fachliche Funktionalität verbessern, die Performanz steigern, die Benutzerfreundlichkeit erhöhen, etc. Wir nennen das **äußere Qualitäten verbessern**, weil man dem Produkt diese Eigenschaften quasi von außen „ansehen“ kann.

Alternativ könnten wir daran arbeiten, die **innere Qualität** unserer Systeme systematisch zu verbessern: dafür sorgen, dass der Source Code sauber gehalten
wird, die Modularität verbessert wird, die Wiederverwendbarkeit für zukünftige
Systeme einen hohen Stellenwert bekommt, oder dass die Dokumentation aktuell bleibt
und neue Mitarbeiter sich leicht einarbeiten können. Als Entwickler wünschen wir
uns solche Verbesserung der zweiten Art.

Wir schaffen es zwar (unter Druck) meistens, die von Auftraggebern oder Management gewünschten (besser sollten wir sagen: _verlangten_) neuen Features und Performanceverbesserungen zu liefern, aber **oft auf Kosten der inneren Qualität**.

>Das bedeutet: Wir steigern unter Zeitdruck äußere Qualitäten auf Kosten der inneren Qualitäten.

Die Komplexität steigt, es bleibt keine Zeit fürs Refactoring, technische Schulden wachsen immer weiter. Kurzum: Die Erweiterbarkeit, Änderbarkeit und Verständlichkeit unseres Systems wird immer schlechter.

Wenn die innere Qualität abnimmt, dann wird Ihr Management schnell feststellen, dass die Kosten pro geliefertem Feature von Release zu Release drastisch steigen. Wir können nicht mehr so produktiv arbeiten wie früher, das Leben als Entwickler/-in wird ständig schwerer.

## Wir kennen (viele) Ursachen
Dabei wissen wir (Softwerker-innen) doch ziemlich genau, welche typischen Fehler
auf lange Sicht zu solchen desolaten Systemen führen, die wir im Team dann nur noch mit Schwierigkeiten erweitern (oder am Leben erhalten) können. Aus unserer Sicht sind dabei folgende Themen besonders gravierend:

* Mangelhafte Anforderungen: Garbage in, garbage out. Wenn uns Product Owner oder Fachbereiche unscharfe oder schwammige Anforderungen geben, werden wir möglicherweise stark konfigurierbare Systeme liefern, damit alle möglichen Interpretationen dieser Anforderungen noch erfüllbar sind.

* Unklare Qualitätsanforderungen: Teams haben immer „implizite“ Vorstellungen, welche Qualitätsanforderungen ein System denn erfüllen müsste. Leider unterscheiden sich diese impliziten Annahmen manchmal gravierend von denen der Fachabteilungen, Auftraggeber oder sonstigen Systemverantwortlichen.

* Arbeit unter Zeitdruck: Es existiert praktisch immer mehr Arbeit als Zeit. Daher gehen wir während der Arbeit an Systemen lauter kleine Kompromisse ein, die einzeln kaum auffallen, in ihrer Summe aber zu fatalen Mängeln führen... Ein anderer Begriff
hierfür sind **technische Schulden**.

* Kein Abbau technischer Schulden: Zu viele Abhängigkeiten, schlechte Modularisierung, geringe Konsistenz, Nutzung veralteter Frameworks oder Technologie, unzureichende automatische Tests, um nur einige solche Schulden aufzuzählen – das könnten wir ja alles bereinigen oder zumindest drastisch verbessern, sofern wir dafür etwas Zeit zugestanden bekämen. Aber:
>Der Abbau dieser technischen Schulden hat für unser Management kaum Priorität, ist mancherorts sogar als „nutzlose Zeitverschwendung“ verschrien, die,
so wörtlich, „ja keine neuen Features liefere“.


* Lokale statt globale Optimierung: Entwickler besitzen einen fast unbändigen Drang zur Verbesserung, den sie gerne in Form von Refactorings oder lokalen „Verbesserungen“ ausleben. Solange umfassende und komplett automatisierte Tests
diese Veränderungen auf mögliche Nebenwirkungen überprüfen, ist das gut. Manchmal verlieren Entwickler jedoch den Überblick über die negativen Konsequenzen ihrer lokalen Änderungen auf andere Teile des System.

* Over-Engineering: Dinge zu allgemeingültig, zu generisch, zu viele Abstraktionen,
goldene Wasserhähne... liegt oft an den oben genannten schlechten Anforderungen.


## Systematisch verbessern
Für das systematische Verbessern gibt es seit einiger Zeit einen systematischen
und frei verfügbaren (open-source) Ansatz:
[aim42, die Architecture Improvement Method](https://aim42.org).

Sie wurde initial von Gernot Starke (gemeinsam mit Stefan Tilkov) veröffentlicht und funktioniert komplett technologie- und herstellerunabhängig. Der Fokus liegt auf zur Zeit mehr als 90 verschiedenen bewährten Praktiken und Mustern.

* Mit [aim42](https://aim42.org) erreichen Sie systematisch sowohl betriebswirtschaftliche wie auch technische Qualitätsziele, beispielsweise reduzierte Wartungs- und Betriebskosten.
* [aim42](https://aim42.org) schlägt ein iteratives Vorgehen in drei Phasen vor, das sich in beliebige Entwicklungsprozesse leicht integrieren lässt.
aim42 kommt aus der Praxis und verwendet eine Vielzahl etablierter und erprobter Praktiken und Patterns.
* [aim42](https://aim42.org) schafft einen Überblick über bestehende Probleme eines Systems und die zugehörigen Lösungsoptionen. Sowohl Probleme als auch Lösungen bewertet aim42 in betriebswirtschaftlichen Größen wie Geld und/oder Zeit.
* Da [aim42](https://aim42.org) unter einer liberalen Open-Source-Lizenz veröffentlicht wird, dürfen Sie es frei verwenden, auch für den kommerziellen Einsatz.

## Das Vorgehen
Verbessern Sie iterativ, trennen Sie dabei die Erkennung von Problemen oder Risiken (= Analyse) von ihrer Bewertung (= Evaluierung) sowie ihrer Behebung (= Improvement).

Halten Sie sich an folgende einfache Schritte:
1. Sammeln Sie zuerst die Probleme, die Sie rund um das System und dessen Organisation finden (aim42 nennt das „Issue List“).

2. Jedes Problem bewerten Sie hinsichtlich seiner einmaligen und/oder wiederholten Kosten (wie schlimm ist das Problem, _Schmerzkosten_).
Nutzen Sie Schätzungen oder treffen Sie Annahmen und halten Sie diese
Bewertungen fest. Es geht weniger um Exaktheit, als darum, die Probleme relativ
zueinander priorisieren zu können.

3. Suchen Sie nach Maßnahmen, die diese konkreten Probleme oder deren Ursachen
lösen oder beheben. Zwischen Maßnahmen und Problemen respektive Ursachen besteht eine m:n-Beziehung – eine einzige Maßnahme kann mehrere Probleme adressieren und ein Problem kann zur Lösung mehrere Maßnahmen benötigen.

4. Auch Maßnahmen haben Kosten, die Sie systematisch ermitteln oder schätzen müssen (aim42 nennt das „Improvement Backlog“).

5. Die Gegenüberstellung von den Kosten der Maßnahmen und den Kosten des Problems gibt wertvolle Entscheidungshilfe für Budget- oder fachlich Verantwortliche. Damit müssen Softwarearchitekten endlich nicht mehr mit den schwer vermittelbaren inneren Qualitäten, Kopplung, Kohäsion oder Implementierungsdetails argumentieren, sondern können in „Businesssprache“ argumentieren.

## Verbessern funktioniert iterativ
Bewertungen von Problemen und Maßnahmen können sich über die Zeit ändern, wie sich in modernen Entwicklungsprozessen auch die Prioritäten von beispielsweise Anfor- derungen oder Zielen über die Zeit ändern können. Eine regelmäßige (iterative) Überprüfung der Issue List und des Improvement Backlog stellen deren Aktualität sicher.

>**Systematische Verbesserung**
>Der iSAQB e.V. schließt mit dem Modul „IMPROVE“ eine Lücke in der
klassischen Aus- und Weiterbildung für Softwarearchitekten; IMPROVE bietet einen kompakten Einstieg in die systematische Verbesserung unter realen Randbedingungen (knappe Budgets und enge Zeitvorgaben). Sie lernen, systematisch Systeme zu analysieren, Probleme, Risiken und Aufwände unter wirtschaftlichen Aspekten zu bewerten sowie Ideen, Strategien und Taktiken für evolutionäre Weiterentwicklungen, Modernisierungen und Verbesserungen zu entwickeln, zu planen und zielgerichtet umzusetzen.



## Verwandte Muster

* [Qualitätsverbesserer](/33-qualitaetsverbesserer) möchten unbedingt verbessern
* [Ändern ist der Normalfall](/25-aendern-ist-normalfall)


[^wikipedia]:  [Wiktionary zu Verschlimmbesserung](https://de.wiktionary.org/wiki/Verschlimmbesserung)

{% include training-dates.html %}
