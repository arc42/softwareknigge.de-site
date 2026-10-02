---
title: "36 – arc42 Elevator Pitch"
layout: single
header:
  overlay_image: /images/header/site-header.png

permalink: /36-arc42-elevator-pitch  

summary: "Falls Sie im Aufzug mit Ihrem IT-Boss über die Einführung pragmatischer Softwarearchitektur plaudern wollen – hier unser Vorschlag..."
excerpt: ""
classes: wide

---
{% include you-read-an-extract.html %}

Falls Sie sich wundern, warum wir dauernd [arc42](https://arc42.org) zitieren
oder falls Sie im Aufzug mit Ihrem IT-Boss über die Einführung pragmatischer Softwarearchitektur plaudern wollen – hier unser Vorschlag:

* arc42 enthält ein praktisches und pragmatisches Template zur Entwicklung, Dokumentation und Kommunikation von Softwarearchitekturen.
* arc42 schlägt einen Prozess zur Entwicklung und Konstruktion effektiver Softwarearchitekturen vor.
* arc42 unterstützt Software- und Systemarchitekten. Es kommt aus der Praxis und basiert auf Erfahrungen aus vielen Architekturprojekten sowie Rückmeldungen vieler Anwender.
* arc42 eignet sich für beliebige Technologien und Werkzeuge.
* Sie dürfen arc42 kostenfrei verwenden, auch für den kommerziellen
Einsatz. Wirklich und ohne Kleingedrucktes.
* arc42 sorgt für bessere Software- und Systemarchitekturen (wenn wir bessere Verkäufer wären, hätten wir diesen Satz an den Anfang gestellt!)
* Für arc42 finden Sie ausgiebige [Dokumentation](https://docs.arc42.org), mehr als 120 beantwortete Fragen in den [FAQ](https://faq.arc42.org).

## Die Grundidee
Eine feste Struktur für alle Ergebnisse, Dokumente, Modelle und Entscheidungen, die im Rahmen Ihrer Softwarearchitektur entstehen.

Durch diese feste Struktur (Template, Gliederungsvorlage) finden alle Beteiligten leicht die gewünschten Informationen - beziehungsweise eine passende Stelle,
an der sie solche Informationen ablegen können.

## Die Vogelperspektive
Softwarearchitekturen jeglicher Ausprägung enthalten vier Arten von Informationen:
1. Anforderungsbezogene Informationen
2. Strukturen des Systems
3. Übergreifende (querschnittliche, oftmals technische) Konzepte
4. Entwurfsentscheidungen und Risiken

In den meisten Fällen können Sie ein Arbeitsergebnis, ein Diagramm oder einen bestimmten Teil der Lösung eindeutig einem dieser Bereiche zuordnen.

>HINWEIS
>Betrachten Sie arc42 als einen offenen Schrank mit Fächern. Jedes Fach entspricht einem der oben genannten „Kapitel“. Immer, wenn Sie ein Thema innerhalb der Architektur bearbeiten, können Sie das Ergebnis in dem entsprechenden „Fach“ ablegen.
>Der arc42-Schrank gibt Ihnen völlige Freiheit, wie Sie Ihre Architekturarbeit organisieren.
>Auf der anderen Seite hilft Ihnen der Schrank dabei, Ordnung in architekturrelevanten Ergebnissen, Dokumenten, Modellen und Entscheidungen zu halten:
>Für jedes gibt’s in arc42 einen festen Platz – sodass andere
Stakeholder diese Ergebnisse leicht wieder finden oder weiter bearbeiten können.

## Die Details
arc42 unterteilt diese vier Arten von Architekturinformation in insgesamt 12
Teile (in einem Dokument wären das Kapitel, in einem Wiki Seiten oder Teilbäume).

Die Nummerierung zeigt die empfohlene _Lesereihenfolge_,  **NICHT** die
Reihenfolge, in der die Inhalte erarbeitet werden!)

1. **Einführung und Ziele**: Aufgabenstellung, zentrale Funktionen des Systems, Qualitätsziele, Stakeholder.
2. **Randbedingungen**: Technische und organisatorische Einschränkungen, Konventionen.
3. **Kontextabgrenzung**: fachlicher und technischer Kontext des Systems, externe Schnittstellen, Nachbarsysteme.
4. **Lösungsstrategie**: Zentrale Lösungsideen, grundlegende Entscheidungen und Technologien.
5. **Bausteinsicht**: Statische Zerlegung des Systems (Module, Komponenten, Subsysteme, Schichten, Partitionen o. Ä.), hierarchisch dargestellt. Wechselweise Black- und Whitebox-Darstellungen.
6. **Laufzeitsicht**: Dynamik des Systems, Zusammenarbeit der Laufzeitinstanzen der Bausteine, wesentliche Abläufe innerhalb des Systems.
7. **Verteilungssicht**: In welcher Hardwareumgebung läuft das System? Zuordnung von Softwarebausteinen auf Hardware, Zusammenbau mehrerer Bausteine zu Deployment-Einheiten.
8. **Querschnittliche Konzepte**: Übergreifende technische Lösungen oder Ansätze, beispielsweise zur Datenspeicherung, der Umsetzung grafischer Benutzeroberflächen, der Integration mit Fremdsystemen, Protokollierung, Fehlerbehandlung etc.
9. **Entwurfsentscheidungen**: Die wesentlichen (globalen!) Architekturentscheidungen!
Teilweise bereits in der Lösungsstrategie (Abschnitt 4) erläutert.
10. **Qualitätsszenarien**: Konkrete Qualitätsziele in operationalisierter, konkreter Form (als Qualitätsbaum oder Qualitätsmerkmal sowie Szenarien). Grundlage für qualitative Architekturbewertung und -entwicklung.
11. **Risiken und technische Schulden**: Wichtige technische oder strukturelle Risiken.
12. **Glossar**

## Verwandte Muster

* [Vielsehende](/03-vielsehende) nutzen mehrere der Perspektiven oder Sichten,
die arc42 anbietet.
* Auch die [Jongleuse](/11-jongleuse) profitiert von den unterschiedlichen "Fächern" im arc42 Schrank - weil Sie damit ggfs. unterschiedliche Stakeholderinteressen repräsentieren kann.

## Quellen
* ausgiebige [Dokumentation](https://docs.arc42.org) der einzelnen Teile, mit vielen Tipps
* mehr als 120 beantwortete Fragen in den [FAQ](https://faq.arc42.org)
* [Praktische Beispiele als eBook](http://leanpub.com/arc42byexample)
* Die [deutsche Homepage von arc42](https://arc42.de) enthält auch Hinweise auf Trainings und Schulungen rund um arc42 und Softwarearchitektur.
