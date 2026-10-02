---
title: "19 - Ständig Lernende"
layout: single
header:
  overlay_image: /images/header/softwareknigge-site-header-green.png

permalink: /19-staendig-lernende
summary: "Gute Softwarearchitekten lernen ständig weiter, sowohl in fachlicher wie auch technischer Hinsicht. "

excerpt: ""
classes: wide

---
{% include you-read-an-extract.html %}

Gute Softwarearchitekten lernen ständig weiter, sowohl in fachlicher wie auch technischer Hinsicht.

Die Grundlagen unserer Disziplin sind seit einigen Jahren zum Glück durch ein unabhängiges Gremium, den [iSAQB e. V.](https://isaqb.org), recht gut standardisiert – wir empfehlen diesbezüglich dringend einen Blick auf die [Homepage](https://isaqb.org) zu werfen.

Der iSAQB definiert für die Grundlagenausbildung für Softwarearchitekten einen Lehrplan, dessen Zusammensetzung in der nachfolgenden Abbildung zu sehen ist. Damit haben Sie dann solide Grundlagen, auf denen Sie Ihr ständiges Lernen prima aufbauen können!

![Struktur des iSAQB Foundation Lehrplan](/images/19-isaqb-foundation-struktur.png)

## Breite und Tiefe
Wir empfehlen Ihnen, bei Ihrer Aus- und Weiterbildung ein T-ähnliches Modell zu verfolgen, dargestellt in folgender Abbildung.

![T-Shaped Kompetenzmodell](/images/19-t-shape.jpg)

Der Querbalken dieses Ts symbolisiert die breiten Grundlagen, die Sie auf jeden Fall kennen sollten. Der senkrechte Balken bezieht sich auf Spezialwissen, dass Ihnen in einem oder mehreren Bereichen den Expertenstatus sichert. Diese Kombination charakterisiert unserer Erfahrung nach gute SoftwarearchitektInnen – wobei die Art der Spezialisierung kaum eine Rolle spielt.

Das T-Modell finden Sie übrigens bei Stefan Zörner[^zoerner] und
Elisabeth Heinemann[^heinemann] erläutert. Scott Ambler[^ambler] hat es als „_generalisierender Spezialist_“ bezeichnet.

[^zoerner]: Stefan Zörner: [„Sind Sie Architekt oder Entwickler?“](https://jaxenter.de/gretchenfrage-2-0-sind-sie-architekt-oder-entwickler-7636)
[^heinemann]: Heinemann, Elisabeth: „Jenseits der Programmierung. Mit T-Shaping erfolgreich in die IT-Karriere starten“, Carl Hanser Verlag, 2010
[^ambler]: Scott Ambler: [„The Generalizing Specialist“](https://www.agilemodeling.com/essays/generalizingSpecialists.htm)

## Programmieren
Offensichtlich die grundlegendste aller Grundlagen überhaupt. Mehrsprachigkeit gereicht Ihnen zum Vorteil. Ziemlich gut finden wir folgenden Mix:

* C, um die Niederungen von Speicherverwaltung und Pointern zu erleiden.
* Eine objektorientierte Sprache, es geht auch Java, C# oder Objective-C, um die Grundlagen von Klassen, Objekten, Methoden, Instanzen, Vererbung und Delegation kennen zu lernen. Am besten machen Sie sich mit den verschiedenen Arten der Vererbung (Instanzen, Prototyping) vertraut.
* Eine funktionale Sprache, oder einen Lisp-Dialekt (Clojure finden wir gut, ein modernes Lisp auf Basis der Java-VM) oder Haskell oder F#, um die Vorteile von unveränderlichen (immutable) Datenstrukturen, Rekursion und funktionaler Zerlegung zu lernen. Die Chancen stehen übrigens gut, dass Sie mit funktionaler Programmierung gleich den Emacs kennen lernen – mit dem Sie sich in jeder beliebigen Gruppe von Softwareentwicklern als cooler Geek profilieren können.
* Eine deklarative Sprache wie Prolog, Erlang oder eine Regelsprache wie JBoss-Drools.
* Eine Skriptsprache wie Perl, Python oder Groovy, um deren Einsatzmöglichkeiten abschätzen zu können. (ok - niemand sollte Perl im gleichen Atemzug nennen wir die anderen beiden wirklich schönen Sprachen, mit denen Sie großartig auch größere Systeme schaffen können... was wir bei Perl anzweifeln, weil wir so schlecht mit regulären Ausdrücken sind)

## Abstrahieren und Modellieren
Die Fähigkeit, im Chaos Struktur und Ordnung zu erkennen, und diese Ordnung verständlich darzustellen und zu vermitteln, sollten Sie üben, üben und nochmals üben.

Hierzu zählen wir diverse Grundlagen des Software-Engineerings, beispielsweise die Trennung von Verantwortlichkeiten (_Separation of Concerns_),
die Bildung und Definition klarer Schnittstellen, das Information-Hiding sowie
Prinzipien wie lose Kopplung, hohe Kohäsion und Einfachheit.

## Technische Konzepte
Neben der reinen Programmierung sollten Sie diverse typische Konzepte und deren Umsetzung kennen. Wir zählen mal wieder ohne Anspruch der Vollständigkeit einige unserer Lieblingsbeispiele auf:

* Persistenz und Datenspeicherung, SQL, NoSQL, Dateisysteme und Co.
* Grafische Oberflächen und entsprechende Muster und Frameworks
* Grundlagen vernetzter und verteilter Systeme: Das Internetprokoll und TCP/IP, Sockets, Ports und Datenpakete, Firewalls, Routing und die damit verbundenen Performance- und Sicherheitsprobleme.
* Grundlagen des Internets und der Entwicklung von Webanwendungen – insbesondere das zustandslose HTTP-Protokoll, Funktionsweise und Konfiguration von Webservern, User Agents (aka Browsern) mit HTML, CSS und JavaScript.
* Sicherheit und Kryptologie: Verschlüsselung mit symmetrischen und asymmetrischen Verfahren, Hash-Verfahren, digitale Signaturen und Zertifikate. Das Konzept von öffentlichen Algorithmen und geheimen Schlüsseln, mögliche Angriffe gegen kryptografische Verfahren.
* Nebenläufigkeit, Parallelität und die Schwierigkeit, eine einzelne CPU mehrere Dinge scheinbar gleichzeitig bearbeiten zu lassen. Synchronisation und Semaphore, Aktor-Modell, Threads, Prozesse und Kontextwechsel.
* Transaktionsmanagement und -monitore,
* Caching
* Logging und Protokollierung.
* Echtzeitsysteme, bei denen garantierte Antwortzeiten eine Rolle spielen.
* Betriebssysteme und ihre Eigenarten.

Interessante Dinge - die Sie bis ans Ende aller Tage intensiv beschäftigen können...


## Sonstiges Handwerkszeug

* Entwicklungsumgebungen, Editoren und Debugger haben Sie sicherlich schon beim Programmieren kennen und lieben gelernt. Für professionelles Arbeiten benötigen Sie Versionsverwaltung (Subversion, Git, Mercurial & Co), Buildmanagement (make, ant, maven), sowie eine grundsolide Testautomatisierung (für Unit-, System- und Lasttests).
* Der Himmel möge es Ihnen ersparen, aber es könnte durchaus geschehen, dass Sie als Softwarearchitekt gleichzeitig in die Rolle des technischen Managers kommen oder gar des technischen Projektleiters. Für solche Fälle wappnen Sie sich mit den Grundlagen von Projekt- und Risikomanagement und einer Prise Betriebswirtschaft.
* Wenn Sie noch ein paar Grundlagen agiler Vorgehensweisen (Scrum, Kanban) sowie
möglicher Rollen (Product-Owner, Scrum-Master)

## Voraussetzung: Ständige Neugier
Eine Grundvoraussetzung für das ständige Lernen heißt Neugierde. Das bedeutet Interesse daran, neue Ansätze, Technologien oder Methoden zu erlernen und mit eigener Erfahrung zu vergleichen. Ohne diese Bereitschaft, ständig zu lernen, nimmt der Wert von Architektenwissen und fähigkeiten mit der Zeit immer mehr ab. Sie kennen ja die kurzen Halbwertszeiten vieler Themen in der IT.


## Verwandte Muster
Der Trend zum Zweitbuch hat die Informatik erreicht: [Schmökern](/24-schmoekern) hilft beim Lernen.

{% include training-dates.html %}
