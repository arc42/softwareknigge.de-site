---
title: "07 - Zu viel des Guten"
layout: single
header:
  overlay_image: /images/header/softwareknigge-site-header-red.png

permalink: /07-zuviel-des-guten
summary: "Softwarearchitekten verfügen über ein ganz besonderes Portfolio möglicher Exzesse: Zu viele Fesseln, zu viele Freiheiten, zu viel Dokumentation und so weiter... "

excerpt: ""
classes: wide

---
{% include you-read-an-extract.html %}


Softwarearchitekten verfügen über ein ganz besonderes Portfolio möglicher Exzesse: Zu viele Fesseln, zu viele Freiheiten oder zu viel Dokumentation. Doch eins nach dem anderen ...

Zu den schwersten Aufgaben von Softwarearchitekten gehört die Entscheidung, welche Maßnahme und wie viel davon in einer bestimmten Situation angemessen ist. Also nicht zu viel und nicht zu wenig. Für viele von Ihnen klingt das bestimmt wie der Ratschlag der guten Köchin: Würze so lange nach, bis es lecker schmeckt (aber wehe, Sie würzen zu viel – dann war’s das mit dem Süppchen).

## Zu viele Fesseln: Ideenstau

Ihr Team besteht aus jeder Menge kreativer und erfahrener Köpfe, die nur darauf brennen, ihre Ideen und Vorkenntnisse zum Wohl des Projekts oder Systems einbringen zu können. Dafür allerdings brauchen diese Köpfe ein gewisses Maß an Freiheit, diese Kreativität entfaltenzu können: Neue Ideen müssen reifen und ausprobiert (in IT-Slang: „evaluiert“) werden, bevor sie als gute Ideen in die Architektur einfließen können.

Geben Sie als Architekt zu viele Fesseln vor, so unterbindet das jegliche Form der positiven Kreativität. Ihr Team wird dann nur noch nach solchen Ideen suchen, die diese Fesseln, Vorgaben und Randbedingungen möglichst erträglich und schmerzfrei machen.

## Zu viel Freiheit: Anarchie

Wir haben schon erlebt, dass innerhalb eines recht kleinen Teams jeder Entwickler in seiner aktuell favorisierten Programmiersprache entwickelt hat
(wir fanden Perl, C, SQL-StoredProcedures, Java und XSLT), weil die Architekten des Systems sämtliche mögliche Freiheiten gelassen hatten. Diese Überfreiheit ist sicherlich in den meisten Fällen auch nicht angemessen.

Das Team wird viel Zeit darauf verschwenden, sinnvolle Grenzen selbst zu definieren, statt gute Lösungsideen zu entwickeln und umzusetzen.
Setzen Sie also Grenzen – aber fesseln Sie Ihr Team nicht!

>**aber wir arbeiten mit Microservices**
>Ja - diesen Vorschlag habe ich auch schon gehört: Bei Microservice-Architekturen sollen Teams fast beliebige Freiheiten bezüglich Technologieauswahl etc. erhalten,
und sich die für das jeweilige Problem angemessene Technologie selbst frei wählen können.
>Einige Internet-Größen (Netflix,  Uber) sollen das angeblich gemacht haben, ich selbst würde davon deutlich abraten. Wenn Vielfalt, dann _ausgesuchte_ und explizit entschiedene Vielfalt - aber bitte kein Wildwuchs.

## Zu viel Dokumentation

Unser Antimuster bezieht sich auf ein Übermaß an Architektur- und anderer Dokumentation, das das Erkennen des Waldes vor lauter Bäumen erschwert. Seiten um Seiten, schier endlose Beschreibung aller möglichen Sachverhalte, interessante wie uninteressante, wichtige wie unwichtige. Scheinbar alles nur Mögliche findet sich da, persistiert auf Druckerpapier oder in Write-only-Wikis.

>WAR STORY
>Abschreckendes Beispiel: Als Vorbereitung eines Architektur-Audits eines mittelgroßen Systems erhielten wir eine Kopie der gesamten Architekturdokumentation auf zwei DVDs – sage und schreibe 8 Gigabyte, verteilt auf mehrere Hundert einzelne Dokumente, ohne weitere Unterstruktur, ohne Navigationshilfe oder Übersichtsdokument.

## zu viel ...

* zu viel Prozess - d.h. schwergewichtige und aufwändige Abstimmungs-
oder Freigabeprozesse, die Fortschritt im Projekt eher behindern denn fördern.
* zu viel Innovation steigert Risiko und Heterogenität. Wird dann von Entwicklungsteams (kurzfristig) begrüßt, langfristig könnte es riskant und
aufwändig sein.

## Verwandte Muster

* [Blick in den Rückspiegel](06-blick-in-den-rueckspiegel) hilft, Angemessenheit zu entscheiden.

{% include training-dates.html %}
