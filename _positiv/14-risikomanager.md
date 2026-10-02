---
title: "14 - (technischer) Risikomanager"
layout: single
header:
  overlay_image: /images/header/softwareknigge-site-header-green.png

permalink: /14-risikomanager
summary: "Sicher kennen Sie Murphy: Ein Fehler tritt immer dann auf, wenn Sie es am wenigsten gebrauchen können. Und der Rauch zieht immer zum Nichtraucher."

excerpt: ""
classes: wide

---
{% include you-read-an-extract.html %}

Sicher kennen Sie Murphy: Ein Fehler tritt immer dann auf, wenn Sie es am wenigsten gebrauchen können. Und der Rauch zieht immer zum Nichtraucher.

In jedem Projekt oder System drohen solche „Murphy-Effekte“, egal mit welcher Technologie, Infrastruktur oder Organisationsform Sie arbeiten. Erfolgreiche ArchitektInnen gehen ganz bewusst mit Murphy (= Risiken) um. Zwischen „Yes, we can“ und „Das haben wir schon immer so gemacht“ finden sie einen angemessenen Weg.

## Architekten = Berater der Managements

Was haben Softwarearchitekten mit Risikomanagement zu tun? Diese
Aufgabe erfüllen doch die Projektleitung, oder? Wir sehen das auch so –
aber Softwarearchitekten müssen die technischen und architektonischen _Murphy-Drohungen_ in Systemen finden und behandeln.

Softwarearchitekten sollten das Management auf technische Risiken aufmerksam machen und bezüglich des Umgangs mit ihnen beraten.

## Risiken durch Bewertung finden
Ein Risiko (= _Murphy-Drohung_) ist ein potenzielles Problem. Und ein Problem ist ein eingetretenes Risiko. Wie finden Sie jedoch die Risiken in Ihrer Architektur? Im Muster
[_Blick in den Rückspiegel_](/06-blick-in-den-rueckspiegel) haben wir Ihnen systematische Architekturbewertung ans Herz gelegt. Sie bringt vor allem Risiken (und Chancen!) Ihrer Architektur ans Tageslicht. Integrieren Sie also qualitative Bewertung, etwa mit ATAM, zur Offenlegung von Stärken und Schwächen, Chancen und Risiken in Ihre Arbeit als Softwarearchitekt.

## Was tun mit Risiken?
Eine Übersicht der technischen Risiken ist die notwendige Voraussetzung, um gezielt mit ihnen umgehen zu können. Sie können grundsätzlich eine der folgenden vier Möglichkeiten für jedes Risiko ergreifen:

* Vermeiden (Risk Avoidance)
* Bewusst in Kauf nehmen (Risk Taking): Risiken bewusst in Kauf zu nehmen, heißt, die Auswirkung des Risikos ertragen zu können. Das ist eine gute Taktik, wenn die Vermeidung dieses Risikos für das Projekt teurer ist als dessen Beseitigung oder dessen Auswirkung. 
* Durch gezielte Maßnahmen abmildern (Risk Mitigation): sich mit dem Risiko auseinandersetzen und gezielte Maßnahmen  einplanen, die das Risiko oder seine Auswirkung abmildern. Und zwar zu einem Zeitpunkt, _bevor_ das Risiko zum Problem wird!
* Ignorieren (Waghalsigkeit)


## Verwandte Muster
* Der technische Risikomanager erkennt Komplexität in Systemen als Risiko und triggert den [Vereinfachungskobold](/12-vereinfachungskobold).
* Ein hoher Grad an [Ignoranz](/21-ignorant) erhöht oftmals das Risiko – was technischen Risikomanagern sofort auffallen sollte.


{% include training-dates.html %}
