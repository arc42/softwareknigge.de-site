---
title: "32 - Flexibilisator"
layout: single
header:
  overlay_image: /images/header/softwareknigge-site-header-red.png

permalink: /32-flexibilisator

summary: "Kennen Sie diesen Drang nach Verallgemeinerung, den tiefen Wunsch etwas Großes zu schaffen? Der _Flexibilisator_ findet den ultimativen Kick, wenn er über den beschränkten Spezialfall der aktuellen User-Story hinaus quasi ein zeitloses Denkmal der Flexibilität erschaffen kann."

excerpt: ""
classes: wide

---
{% include you-read-an-extract.html %}

Kennen Sie diesen Drang nach Verallgemeinerung, den tiefen Wunsch etwas Großes zu schaffen? Der _Flexibilisator_ findet den ultimativen Kick, wenn er über den beschränkten Spezialfall der aktuellen User-Story hinaus quasi ein zeitloses Denkmal der Flexibilität erschaffen kann.

## Flexibilität
Wir möchten hier zuerst etwas über mögliche Arten der Flexibilität von Software klarstellen, auf einige Vor- und Nachteile davon eingehen und anschließend
kräftiges _Bashing_ von Flexibilisatoren betreiben.

* Flexibilität (Konfigurierbarkeit) zur Laufzeit: Zur Laufzeit der Komponente können unterschiedliche Parameter gesetzt und/oder verändert werden. Beispiele dafür sind konfigurierbare Benutzungsoberflächen (z. B. skinnable UI), konfigurierbare Abläufe, Prozesse, Pfade, Gültigkeitsregeln oder sogar Datenstrukturen.
* Flexibilität bei der Installation und Inbetriebnahme (Konfigurierbarkeit zum Lade- oder Startzeitpunkt): Die Komponente lässt sich in verschiedenen Umgebungen (z. B. verschiedene Hardware, Betriebs- systeme, Netztopologien o. ä.) in Betrieb nehmen.

* Flexibilität bei Tests: Die Komponente kann in verschiedenen Umgebungen oder Konfigurationen getestet werden. Beispielsweise ist sie unabhängig von konkreter Ressourcenausstattung oder Konfiguration der Testumgebung, oder es können zum Test Mocks oder Stubs für Teilsysteme eingesetzt werden.

* Flexibilität bezüglich der Entwicklungszeit: Eine Komponente bietet eine flexible oder universell verwendbare Schnittstelle an, sodass sie in unterschiedlichen Verwendungssituationen bzw. durch unterschiedliche Konsumenten benutzt werden kann, möglicherweise über Grenzen einzelner Programmiersprachen hinweg.

Es ist die **Laufzeit-Flexibilität**, der wir uns an dieser Stelle primär widmen.

## Overly Configurable... ORCS
Wenn der Flexibilisator voll zuschlägt, schenkt er den späteren Nutzern seiner Software eine Menge Freiheit, allerdings setzt er sie gleichzeitig gravierenden Risiken aus. Aber, denkt sich der meist jugendlich-leicht- sinnige Flexibilisator, _no risk, no fun_.

Hochgradig generisch oder allgemein verwendbar bedeutet, auf jede Menge Leitplanken zu verzichten, auf (teilweise sinnvolle oder sogar notwendige) Grenzen. Nennen wir die ultraflexiblen Produkte des Flexibilisators mal _übermäßig laufzeitkonfigurierbare Systeme_,
englisch _Overly Runtime Configurable Systems_, kurz **ORCS**.

Diese Abkürzung weckt doch hoffentlich auch bei Ihnen Assoziationen zum Filmepos Herr der Ringe[^lotr].

## Woher kommen ORCS?
Bekommen normale Entwicklungsteams halbwegs vernünftige Anforderungen,
so entsteht (hoffentlich) klar strukturierte Software, die eben genau diese Anforderungen erfüllt.

Schlimm wird es, wenn Anforderungen völlig vage oder unklar daherkommen, also im klassischen Fall „unterspezifiziert“ sind („die wissen nicht, was sie wollen“).
Daraus resultiert _wolkige Software_, die auf (zu) viele Eventualitäten vorbereitet ist, ohne klare Abgrenzung. ORCS eben.

Nun treibt unser Flexibilisator dieses Schema auf die Spitze. Er nämlich schafft es, aus einer glasklar und präzise formulierten Anforderung ein schwer fassbares
_Oeuvre_ zu produzieren – ein nach allen Seiten offenes Wunderding der Softwarekunst.

Ultraflexibel und ultrafragil.

## Verwandte Muster

* Der Flexibilisator ist ein konkretes Beispiel für [Zuviel des Guten](07-zuviel-des-guten).

* Falls Sie zu übermässiger Flexibilität tendieren, lesen Sie den [Vereinfachungskobold](12-vereinfachungskobold).

## Quellen

[^lotr]: [Filmtrilogie „Der Herr der Ringe“](https://de.wikipedia.org/wiki/Der_Herr_der_Ringe_(Filmtrilogie))

{% include training-dates.html %}
