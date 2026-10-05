---
title: "25 – Ändern ist Normalfall"
layout: single
header:
  overlay_image: /images/header/softwareknigge-site-header-green.png

permalink: /25-aendern-ist-normalfall

summary: "Haben Sie sich schon einmal gefragt, warum wir in der IT andauernd unsere Systeme ändern oder anpassen?"

excerpt: ""
classes: wide

---
{% include you-read-an-extract.html %}

Haben Sie sich schon einmal gefragt, warum wir in der IT andauernd unsere Systeme ändern oder anpassen?

Die Frage könnte auch lauten: Warum beauftragen die Eigentümer von Software Änderungen, die wir als Entwicklungsteam dann umsetzen? Dazu gibt es eine Reihe unterschiedlicher Antworten – von denen die meisten mehr mit Geld als mit Technik zu tun haben:

1. Fehler: Unsere Software enthält Fehler, die Einsatz oder Benutzung der Software verhindern oder erschweren.
2. Neue Anforderungen: Es gibt neue oder geänderte Anforderungen an unsere Software. Dies umfasst sowohl funktionale Erweiterungen (sprich: die Software soll zukünftig neue Aufgaben lösen) wie auch nichtfunktionale Merkmale (landläufig auch Qualitätsmerkmale genannt).
3. Änderungen in Ablauf-/Betriebsumgebung: Technische Änderungen an der Infrastruktur (Hardware, Betriebssystem oder irgendwelche Basissoftware) erfordern Änderungen.

4. Änderungen externer Schnittstellen: Relevante externe Systeme ändern ihre Schnittstellen – unsere Software ist davon betroffen.
5. Änderungen im organisatorischen Umfeld: Neue Nutzende, neues Management, neue Sponsoren – ein Spezialfall von Punkt 2 (neue Anforderungen).
6. Hohe Betriebskosten: Betrieb und Administration der Software sind zu teuer.
7. Hohe Änderungs- oder Reparaturkosten: Bugfixing, Weiterentwicklung, Erweiterung oder Änderung der Software (aus den Gründen 1 bis 6) sind zu teuer.
8. Intrinsische Motivation des Entwicklungsteams: Die innere Struktur oder der Quellcode der Software entsprechen nicht den Zielvorstellungen des Teams.

Bei den ersten sieben Gründen spielen Geld und Zeit eine tragende Rolle. Die Art, wie wir in der Entwicklung Änderungen umsetzen, wird dabei sehr stark durch finanzielle oder zeitliche Randbedingungen bestimmt (sprich: Wir arbeiten praktisch immer unter Zeitdruck). Lediglich bei intrinsisch motivierten Änderungen könnten Entwicklungsteams ohne Blick auf die Uhr Software ändern.

## Theoretisch ist Änderung leicht
Wenn ein eingespieltes, sachkundiges und motiviertes Team nach konsistenten, expliziten Anforderungen und unter Nutzung effizienter Technologien ein System domänen- und testgetrieben entwickelt, konzeptionell durchgängig arbeitet und dazu angemessen dokumentiert, dann ist dieses System (zumindest von diesem Team) leicht änderbar.

Keine Leichen im Keller, keine unschönen Altlasten, keine störenden
Randbedingungen, keine versteckte Komplexität und keine unbeherrschten
Risiken – welch eine wunderbare Situation zur Änderung von Software ...

In über zwanzig Jahren Berufspraxis haben wir dieses Softwareschlaraffenland leider (extrem) selten angetroffen. Entweder wir sind vom Pech verfolgt oder in der Praxis funktioniert Softwareentwicklung _suboptimal_ :-( mit dem Resultat schlecht strukturierter, übermäßig komplexer und unverständlicher Systeme, deren Wartung und Pflege sehr viel Mühe bereitet.

## Änderung als Normalfall
An solchen Systemen (zu denen manche im Team despektierlich „Altlasten“ sagen,
andere „Legacy“) arbeiten wir den größten Teil unseres Berufslebens in Informatik, Entwicklung oder Architektur, unter so verschiedenen Bezeichnungen wie Änderung, Erweiterung, Pflege, Wartung, Evolution oder Sanierung.

> Daher wagen wir die These, dass für Entwicklungsteams die Fähigkeit, Software zu ändern, langfristig wichtiger ist, als Software komplett neu zu konstruieren und zu bauen.


## Verwandte Muster

* Änderungen und [Perfektionisten](13-perfektionist) passen schlecht zusammen, da es für Perfektion meistens kein Budget gibt.
* [Fahnder](/26-fahnder), [Kammerjäger](/29-kammerjaeger) und
[Saubermann](27-saubermann) sind großartige Ansätze für systematische Änderungen.
* [Schmutzfinken](/28-schmutzfink) sind natürliche Feinde von Änderungen, allerdings auch aller anderen positiv gesonnenen Rollen in der IT.
* [Fortschritt statt Verschlimmbesserung](37-fortschritt-statt-verschlimmbesserung) zeigt, wie Sie Systeme systematisch verbessern. Siehe auch [aim42](https://aim42.org), eine frei verfügbare Sammlung von Praktiken zur Verbesserung von Software.
