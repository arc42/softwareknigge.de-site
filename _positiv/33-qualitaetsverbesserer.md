---
title: "33 - Qualitätsverbesserer"
layout: single
header:
  overlay_image: /images/header/softwareknigge-site-header-green.png

permalink: /33-qualitaetsverbesserer
summary: "Systematische Architekturbewertung gehört zu den Aufgaben verantwortungsbewusster SoftwarearchitektInnen. Leider sind ATAM und Co. relativ formal und aufwendig, sodass wir Ihnen eine pragmatische Alternative für den Alltagseinsatz vorstellen möchten, die wir _Mikrobewertung_ nennen."

excerpt: ""
classes: wide

---
{% include you-read-an-extract.html %}

Systematische Architekturbewertung gehört zu den Aufgaben verantwortungsbewusster SoftwarearchitektInnen. Leider sind ATAM[^atam] und Co. relativ formal und aufwendig, sodass wir Ihnen eine pragmatische Alternative für den Alltagseinsatz vorstellen möchten, die wir Mikrobewertung nennen.

[^atam]: ATAM steht für **Architecture Tradeoff Analysis Method**, und stammt vom [SEI](https://www.sei.cmu.edu/architecture/tools/evaluate/atam.cfm). Wikipedia hat einen kurzen Artikel über „[Szenariobasierte Architekturbewertung](https://de.wikipedia.org/wiki/Szenariobasierte_Architekturbewertung), der ATAM recht gut beschreibt.

### Was wird bewertet?
Durch eine Architekturbewertung sollten Sie die **Eignung der Architektur für die Erreichung der wesentlichen Qualitätsziele** prüfen. Obwohl der Begriff Bewertung stark nach Schulnoten klingt, ist in der Praxis damit oft die qualitative Bewertung gemeint – also die Einschätzung von Qualitätsrisiken. Wir nennen diese Aktivität
mittlerweile oft "Architekturanalyse".

In der Praxis hat sich dazu die Methode ATAM (_Architecture Tradeoff Analysis Method_[^atam]) durchgesetzt, entwickelt vom renommierten Software Engineering Institute (SEI) der Carnegie Mellon University.

Dieses Kapitel ist viel zu kurz, um Ihnen ATAM ausführlich erklären zu können.
Die Erfinder der Methode benötigen dazu immerhin fast einhundert Buchseiten, daher bekommen Sie hier eine Super-Mini-Kurz-Version.

Qualitative Bewertung besteht im Groben aus zwei Phasen:

1. Konkretisieren Sie mithilfe so genannter Szenarien die Qualitätsanforderungen (Sollzustand) an das System.

2. Vergleichen Sie diese Anforderungen Stück für Stück mit dem Istzustand, der (bereits implementierten oder avisierten) Architektur des Systems. Dabei stoßen Sie für jede der konkreten Qualitätsanforderungen auf die folgenden Situationen:

* Risiken oder Probleme, falls sich die gerade überprüfte Anforderung mit der gegebenen Architektur nicht erfüllen lässt,
* Kompromisse, die für das gerade überprüfte Qualitätsmerkmal in der Architektur eingegangen wurden, etwa dass Performance auf Kosten höherer Codekomplexität erkauft wurde, oder
* erfüllte oder erfüllbare Qualitätsanforderungen, falls die Architektur das jeweilige Qualitätsmerkmal unterstützt.


Puh, das klingt (verständlicherweise) alles abstrakt und fürchterlich aufwendig. Unserer Erfahrung nach scheuen viele (agile) Projekte diesen Aufwand und verzichten daher auf eine entwicklungsbegleitende Architekturbewertung. Das führt zielsicher zu Qualitätsmängeln, denn die wesentlichen Qualitätsanforderungen erfüllen sich ja nicht von allein. Kein System wird rein zufällig „robust genug“ oder „sicher“.

### Konstruktiv statt analytisch
ATAM wurde entwickelt, um nachträglich oder auch während der Entwicklung zu prüfen, ob bestimmte Qualitätsanforderungen an Systeme besser oder schlechter erreicht wurden. Grundsätzlich schätzen wir diese szenarienbasierte Methode sehr, möchten aber **Qualität konstruktiv erreichen** – und nicht nur im Nachhinein Risiken suchen.

Daher schlagen wir vor, konkrete Qualitätsanforderungen zum Ausgangspunkt von
Architektur- und Implementierungsentscheidungen zu machen, also während der Entwicklung bereits expliziten Fokus auf diese Qualitätsanforderungen zu legen.

### Qualität systematisch erreichen
[Quality-Driven Software Architecture (QDSA)](https://www.innoq.com/de/articles/2012/04/quality-driven-software-architecture/)
greift die grundsätzliche Idee des (analytischen) ATAM auf und wandelt sie in konstruktives Vor- gehen um. Die Qualitätsziele werden in Form von Szenarien frühzeitig definiert und konkretisiert, im Idealfall als Bestandteil der normalen An- forderungen. Während der Entwicklung bilden sie dann kontinuierlich die Basis der wesentlichen Architektur- und Entwurfsentscheidungen.

QDSA basiert in hohem Maße auf der Arbeit von Christine Hofmeister[^hofmeister],
auch beschrieben in einem
[INNOQ-Blogpost](https://www.innoq.com/de/articles/2012/04/quality-driven-software-architecture/)

[^hofmeister]: Hofmeister, Christine: „Applied Software Architecture“, Pearson, 2000. Das Buch ist mittlerweile nicht mehr im Handel.

### Best-of-Both-Worlds
Wir schlagen vor, einen pragmatischen Extrakt aus ATAM und QDSA in den Entwicklungsalltag zu integrieren, um die geforderten Qualitätseigenschaften von Systemen zielsicher zu erreichen: Sie benötigen zwei sehr pragmatische Schritte, die nahezu keinerlei zusätzlichen Aufwand erzeugen:

1. Diskutieren Sie mit Ihren Stakeholdern sowie dem Entwicklungsteam die wesentlichen Themen in puncto Qualität, die das System erreichen muss, beispielsweise hinsichtlich Performance, Robustheit, Flexibilität, Sicherheit oder Korrektheit. Dazu formulieren Sie jeweils einige Szenarien, die diese Qualitätsanforderungen konkretisieren. Wir haben einige Beispiele dazu [online bei Github](https://github.com/arc42/quality-requirements)

2. Nun wählen Sie mit dem Team eines dieser Qualitätsthemen aus, das eine Zeitlang im Fokus stehen soll (etwa zwei bis drei Sprints, ein Quartal o. ä.). In diesem Zeitraum konzentriert sich das Team neben den regulären Features auf die zugehörigen Qualitätsanforderungen genau dieses Themas. Diese Fokussierung hat den Vorteil, dass Ihr Team nicht mehr alle einzelnen (möglicherweise Dutzende bis Hunderte) Qualitätsszenarien im Blick behalten muss.

### Mikrobewertung

Legen Sie beispielsweise mit Ihrem Team fest, die ersten sechs Wochen des Jahres primär auf Robustheit zu achten. Treffen Sie sich in dieser Zeit mit dem Team, beispielsweise am ersten Februar, zu einer Viertelstunde Mikrobewertung: Gehen Sie gemeinsam einige der zugehörigen Qualitätsszenarien durch und überlegen Sie, wo im System noch Risiken oder Unwägbarkeiten hinsichtlich dieser Szenarien liegen könnten. Suchen Sie primär nach _Risiken und Problemen_ – die Lösungen folgen später. Wir haben solche thematisch strikt fokussierten Diskussionen in Teams von vier bis acht Personen erfolgreich innerhalb von nur zehn bis fünfzehn Minuten geführt, mehr Zeit sollten Sie nicht investieren.

### Abilfen finden

Als Ergebnis jeder kurzen Mikrobewertung erhalten Sie eine informelle Liste mit Risiken oder Problemen, basierend auf konkreten Qualitätsanforderungen oder -szenarien. Das ist eine gute Basis, um daraufhin Lösungsoptionen für genau diese Qualitätsrisiken zu entwickeln. Auch hier bietet sich ein Workshop mit dem Team an, eventuell in reduzierter Runde. Legen Sie solche Solution-Workshops
unmittelbar hinter Ihre Mikrobewertungen; dann sind alle Beteiligte noch im Thema und die Lösungsvorschläge kommen fast von allein.

### Fazit
Mikrobewertungen sind eine preiswerte und pragmatische Art, die Qualität Ihrer Produkte regelmäßig und nachhaltig zu verbessern. Nebenbei auch noch eine prima Quelle zur Steigerung der Motivation im Entwicklungsteam, das durch solche Mikrobewertungen die Message erhält: „**Qualität ist unserer Organisation etwas wert.**“ Sie können morgen mit Ihrer ersten Mikrobewertung anfangen.  


### Verwandte Muster

* Qualitätsverbesserer sind spezielle [Fahnder](/26-fahnder) für Qualitätsmängel.
* Lässt man sie oft genug (timeboxed) arbeiten, so wird sich (auch bei bestehenden Applikationen) systematisch [Fortschritt statt Verschlimmbesserung](/37-fortschritt-statt-verschlimmbesserung) einstellen.

### Quellen

### Hinweis
{% include training-dates.html %}
