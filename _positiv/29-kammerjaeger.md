---
title: "29 - Kammerjäger"
layout: single
header:
  overlay_image: /images/header/softwareknigge-site-header-green.png

permalink: /29-kammerjaeger
summary: "Die Situation sollten Sie kennen: Kurz vor der Auslieferung tritt ein kritischer Fehler auf. Die spontane Reaktion lautet: _Kann gar nicht sein_. Weder ein _Clean Build_ noch ein _Reboot_ helfen. Sie haben nur noch wenig Zeit, bis die Software ausgeliefert werden soll. Ihr Chef sitzt Ihnen im Nacken und ruft lautstark nach der Lösung. Die ganze Situation ist Ihnen unangenehm, leider fehlt Ihnen (noch) jegliche Idee, woher dieses Fehlverhalten kommen könnte. "

excerpt: ""
classes: wide

---
{% include you-read-an-extract.html %}

Die Situation sollten Sie kennen: Kurz vor der Auslieferung tritt ein kritischer Fehler auf. Die spontane Reaktion lautet: _Kann gar nicht sein_. Weder ein _Clean Build_ noch ein _Reboot_ helfen. Sie haben nur noch wenig Zeit, bis die Software ausgeliefert werden soll. Ihr Chef sitzt Ihnen im Nacken und ruft lautstark nach der Lösung. Die ganze Situation ist Ihnen unangenehm, leider fehlt Ihnen (noch) jegliche Idee, woher dieses Fehlverhalten kommen könnte.

Es schlägt die große Stunde des Kammerjägers – die Bugs dieser Welt erzittern vor Furcht.

## Selbstverständlich?
Selbstverständlich sollten unsere Ratschläge selbstverständlich sein. Wir erleben aber ständig, dass vermeintliche Selbstverständlichkeiten rundweg ignoriert werden – nicht nur bei der Fehlersuche. Wir möchten Sie hier vorsichtig an einige (vermeintlich) selbstverständliche Verhaltensweisen erinnern – denn eine kurze Auffrischung der wichtigen Verhaltensweisen könnte Lady Entwicklerin und Gentleman Entwickler die nächste Debugging-Session verkürzen.

## Fundamental!
Wir gehen davon aus, dass Sie eine klare, präzise Fehlerbeschreibung haben. Sie wissen genau, in welcher Situation der Fehler aufgetreten ist, mit welcher Version der Software, auf welcher Hardware, mit welchem Betriebssystem und welcher Netztopologie. Sie kennen den genauen Wortlaut der Fehlermeldung, besitzen Zugriff auf eventuelle Logfiles, ebenso auf die Eingabe- oder Eingangsdaten, die den Fehler verursacht haben.

Nein? Dann wird es Zeit, diese Informationen zu beschaffen. Wir wollen einen konkreten Bug jagen, nicht ein unbestimmtes Gerücht ...

## Chill’ mal
Können Sie sich einen echten Jäger vorstellen, der hektisch durch sein Jagdrevier keucht, laut flucht und alle paar Sekunden die Richtung ändert? Dessen Jagderfolg wird nahe Null bleiben. Daher empfehlen wir Ihnen
ruhige Chill-out-Musik[^chillout] und entspanntes Zurücklehnen.

Falls Ihnen nette Kollegen jetzt noch einen ordentlichen Espresso (oder grünen Tee) spendieren – um- so bessere Voraussetzungen. Schicken Sie Ihren hektischen Chef auf irgendeine wichtige Managementmission,
stellen Sie Telefon, Chat- und Twitter-Client aus.

Am besten suchen Sie sich eine gut gelaunte Kollegin zur Unterstützung.

## Fehler nachvollziehen
Stellen Sie als Nächstes sicher, dass Sie den gesuchten Bug zuverlässig reproduzieren können. Beschaffen Sie sich die betroffene Version des Quellcodes, passende Testdaten und mögliche Hardware- und Betriebssystemkonfigurationen.

Starten Sie das System und vollziehen sämtliche Schritte der Fehlersituation nach – ohne dass Sie irgendeine Änderung an Konfiguration oder Umgebung vornehmen.

Sie müssen den Fehler in Ihrer Entwicklungsumgebung selbst erleben können, sonst werden Sie ihn niemals finden!

Dadurch stellen Sie sicher, dass Sie den gleichen Bug jagen, den Ihre Anwender gemeldet haben.

[^chillout]: [Chillout bei radio.de](https://1fmchillout.radio.de/)

## Vorsicht – (falsche) Annahme
Das Antipattern der Fehlersuche lautet „falsche Annahme“:
Sie nehmen an, der Fehler lauert in Baustein X. Ihre Suche und Gedanken kreisen um dieses X, weil Sie andere Ursachen kategorisch ausschließen.

Viele Fehler sind in Wirklichkeit aber Konsequenzen (auch genannt „Folgefehler“). Diese lenken geschickt vom eigentlichen Problem ab, das ursprünglich an einer völlig anderen Stelle in völlig anderer Form auftrat. Stellen Sie daher Ihre Annahmen ausdrücklich in Frage. Erklären Sie Ihre Annahmen beispielsweise einem Kollegen – dieses „Vier-Augen-Prinzip“ hilft oftmals, irrige Annahmen als solche zu identifizieren.

## Szenario kennen
Sie müssen im System den Kontext des Fehlers kennen. Genauer: Sie müssen die Funktionen aller betroffenen Bausteine im System kennen, von Beginn der letztlich fehlerhaften Aufgabe bis zum Auftreten des Fehlers selbst.
Skizzieren Sie diesen Weg von Daten durch die Bausteine des Systems auf Papier. Machen Sie darin erwartete Zwischenergebnisse explizit – bevor Sie im Debugger diese Ergebnisse überprüfen (in arc42-Sprechweise: Analysieren Sie das Laufzeitszenario, in dem der Fehler auftrat). Das kann eine grobe Skizze sein – diese gibt Ihnen aber eine plausible Richtlinie, anhand derer Sie in die Tiefe des Quellcodes abtauchen können – und dort die aktuellen Daten mit den von Ihnen erwarteten vergleichen!

Versuchen Sie also, Ihre Reiseroute im Debugger zumindest in groben Zügen vorab zu planen – anstatt sich auf eine Last-Minute-Überraschungsreise ohne festes Ziel zu begeben.

>Wenn Sie wissen, dass Sie nach Pisa reisen, halten Sie den schiefen Turm auch nicht fälschlicherweise für einen Fehler.

## Gucken statt Denken
Sherlock Holmes[^holmes] hat in einem seiner Romane eine Grundregel erfolgreicher Kammerjäger formuliert:

>„It’s a capital mistake to theorize before one has data“.

Schauen Sie genau hin. Noch genauer, lesen Sie das, was der Stacktrace oder der Debugger anzeigt, und nicht das, was Sie gerne dort finden möchten.

Das menschliche Unterbewusstsein spielt uns in dieser Hinsicht gerne Streiche: Wir glauben fest, Dinge zu sehen, obwohl sie in Wirklichkeit ganz anders sind. Eine sehr überzeugende Vorstellung dieser Kategorie von Täuschung gibt [Apollo Robbins bei einem TED Talk](https://www.ted.com/talks/apollo_robbins_the_art_of_misdirection?language=en;) – absolut sehenswert.

Im konkreten Debugging von Quellcode müssen Sie vor dem „Gucken“ oftmals instrumentieren, entweder über Logging, Tracing oder banales System.out.

Wenn Sie Code nicht instrumentieren können, hilft Single- Stepping im Debugger.

## Ganz genau hingucken
Zum Thema „genau hingucken“ gefällt uns ein Sprichwort aus Sizilien, das wir bei David Agans[^agans] für Sie ausgegraben haben: „Nur der Kochlöffel weiß genau, wie es unten im Kochtopf aussieht!“

[^agans]: Agans, David J.: „Debugging: The 9 Indispensable Rules for Finding Even the Mose Elusive Software and Hardware Problems“, Amacom, 2002.

## Nur EINE Sache ändern
Nehmen wir an, Sie haben den leidigen Bug auf wenige Zeilen Code eingegrenzt. Nun setzen Sie zur finalen Entsorgung an. Zentraler Tipp dazu: Ändern Sie immer (wirklich immer) nur eine Sache auf einmal – danach testen Sie erneut. Falls Sie mehrere Dinge gleichzeitig modifizieren, wissen Sie später nicht mehr, welche Änderung denn nun wirklich das Problem behoben hat.

David Agans nennt das typisch amerikanisch: „Schießen Sie mit einer Kugel auf Bugs, nicht mit einer Schrotflinte.“

## Fazit

Das Lokalisieren und Entfernen von Fehlern gehört zu unserem Handwerkszeug. Der rein mechanische Umgang mit Debuggern ist, den IDEs sei Dank, einfach geworden.

Ein paar Grundregeln beherzigt, und schon wird das Kammerjägern zur reinen Freude. Wir alle wissen ja – nach der erfolgreichen Jagd sieht jeder Fehler banal und klein aus – auch wenn wir zwischendurch alle schon mal an Zufälle, Außerirdische oder dunkle Mächte geglaubt haben – weil Bugs sich manchmal sehr kreativ verstecken.

In diesem Sinne, **happy hunting**!


{% include training-dates.html %}
