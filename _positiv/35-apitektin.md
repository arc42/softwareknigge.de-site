---
title: "35 – API-tektin"
layout: single
header:
  overlay_image: /images/header/softwareknigge-site-header-green.png

permalink: /35-apitektin
summary: "Unserer Einschätzung nach werden Schnittstellen oft als Angelegenheiten dritter Klasse behandelt. Technologie auswählen, Features bauen und Bugs fixen gehen vor. Wir wünschen Ihnen und uns die API-tektin, die den Schnittstellen auf die Sprünge hilft."

excerpt: ""
classes: wide

---
{% include you-read-an-extract.html %}

Unserer Einschätzung nach werden Schnittstellen oft als Angelegenheiten dritter Klasse behandelt. Technologie auswählen, Features bauen und Bugs fixen gehen vor. Wir wünschen Ihnen und uns die API-tektin, die den Schnittstellen auf die Sprünge hilft.

## Was ist eine Schnittstelle
Der einfachste Fall: Sie haben einen Consumer und einen Provider. Der Consumer benötigt irgendetwas vom Provider, seien es Rechen- oder Abfrageergebnisse, Daten oder Dateien, Messwerte von Sensoren oder Statusinformationen, also eine digitale Antwort auf eine ebenso digitale Frage.

Sie können diesen einfachen Fall durch Fragen von Zeitverhalten (Sync/Async) oder Antwortverhalten (Request/Response, Fire-and-Forget, Single-Consumer/Multiple-Consumer etc.) noch verkomplizieren. A

Schauen wir auf den einfachsten Fall: Ein Consumer muss die Anfrage irgendwie an den Provider übermitteln. Oft geschieht das über einen Funktions- oder Methodenaufruf mit Parametern und Rückgabewert. Viele der üblichen Interaktionen zwischen Consumern und Providern können wir auf solch einfache Aufrufe zurückführen. Zusammenarbeit zwischen Bausteinen (über Schnittstellen) ist die Grundlage von Modularisierung und Komponentenbildung und kommt in Systemen aller Art an beliebig vielen Stellen vor. Damit ist der Schnittstellenentwurf ein alltägliches Allerweltsproblem.

## Wer entscheidet über Schnittstellen
Überlegen wir, welche der Typen von Personen (Stakeholder) eigentlich an solchen Entscheidungen beteiligt sind?

Die folgende Abbildung zeigt diese Situation – völlig verallgemeinert –
mit möglichen Beteiligten: das Consumerteam **C**, Providerteam **P**, eine API-tektin **A**, Management **M** sowie sonstige Stakeholder **S**.

![Stakeholder bei Schnittstellen-Entscheidungen](/images/35-schnittstellen-stakeholder.png)

Zu jeder Schnittstelle gehören jede Menge Detailentscheidungen (u.a. Namensgebung, Parameter, Syntax, Semantik, sync/async, Interaktionsmuster, Vermittlung zwischen Consumer/Provider, Versionierung...). Nun könnten sich die Stakeholder A, C, P sowie M und S wie folgt einbringen:

|Wer? | Begründung |
|-----|-------------|
|C+P  | Consumer und Provider stimmen sich gegenseitig über Details ab. |
|-----|-------------|
|A+C+P|API-tektin sorgt bei der Schnittstelle für das Einhalten querschnittlicher Konzepte, die C oder P alleine möglicherweise nicht kennen oder beachten.|
|-----|-------------|
| A |API-tektin bestimmt allein; das reduziert den Abstimmungsaufwand für C und P.|
|-----|-------------|
| C |Consumer definiert, weil C am besten entscheiden kann, was wirklich benötigt wird.|
|-----|-------------|
| P |Provider entscheidet, weil P am besten entscheiden kann, was möglich ist.|
|-----|-------------|
| A+M |API-tektin beteiligt Management, weil die Schnittstelle möglicherweise mehr Geld oder Aufwand benötigt.|
|-----|-------------|
| A+S|Sonstige Stakeholder beteiligen sich, weil gegebenenfalls betriebliche, rechtliche, finanzielle oder sonstige Aspekte zu berücksichtigen sind. Insbesondere können das auch besondere Qualitätsanforderungen sein. |
|-----|-------------|
| A+C+P + M+S | Die große Runde, alle Stakeholder sind beteiligt, jeder darf seine Meinung und Wünsche äussern. Sehr aufwendig, aber manchmal aus "_politischen_" Gründen notwendig. Vorsicht: Diese Variante benötigt viel Zeit.|
|-----|-------------|

Entscheidet nur eine Partei, minimiert das den Abstimmungsaufwand. Entscheiden viele Parteien, steigert das den Aufwand, führt aber möglicherweise zu einer höheren Qualität der Entscheidungen, weil mehrere unterschiedliche Gesichtspunkte berücksichtigt werden können. Bedenken Sie: In jedem System gibt es Dutzende von Schnittstellenentscheidungen zu treffen, und jede davon lässt sich auf eine der genannten Arten entscheiden.

>Unser dringender Rat: Als API-tektin suchen Sie zuerst die besonders kritischen oder wichtigen Schnittstellen, die auf wesentliche Qualitätsmerkmale des Systems Einfluss nehmen könnten. Dann überlegen Sie für diese **Prio-1**-Schnittstellen, welche Personen oder Rollen an den jeweiligen Entscheidungen mitwirken sollten.
>Sie müssen dabei neben den rein architektonischen Anforderungen und Gegebenheiten noch Faktoren wie Zeit, Aufwand, Homogenität der Architektur, Umsetzungsgeschwindigkeit oder andere Qualitätsmerkmale berücksichtigen.

## Warum ist das kompliziert?
Neben den in der Realität gar nicht so banalen Fragen nach den Namen von Schnittstellen und Parametern taucht hier auch sofort die Frage nach der Fehler-
und Ausnahmebehandlung auf. In der Praxis beansprucht die Behandlung von Fehler- und Sonderfällen oft 80 Prozent des gesamten Aufwands.

In Remotesituationen muss der Consumer einen passenden Provider erst einmal finden – da helfen beispielsweise Registries oder Broker –, und sie müssen sich ausweisen (Authenticate) sowie ihre Berechtigung nachweisen (Authorize).

Dann wäre da noch die Frage nach dem technischen Kommunikations- oder Übertragungsprotokoll (Plain Sockets, FTP, HTTP etc.) oder möglichen Handshakeschritten vor der eigentlichen Kommunikation.

Bis hierhin ist es meist noch überschaubar. Aber dann kommen in schlimmen Fällen noch eines oder mehrere der folgenden Themen ins Spiel. Und dann es wird es richtig schwierig:

* Vertraulichkeit: Wenn an der Schnittstelle übertragene Daten oder sogar die Benutzung der Schnittstelle an sich vertraulich sind, müssen Sie gegebenenfalls in die Werkzeugkiste der Kryptografie greifen und dazu noch organisatorische Sicherheitsaspekte berücksichtigen. Schwierigkeitsgrad: extrem hoch
* Verfügbarkeit: Wenn die Schnittstelle niemals ausfallen darf, könnten Sie Redundanz in Software und Hardware einführen, einen Cluster und Load Balancer einsetzen oder weitere teure Maßnahmen starten. Schwierigkeitsgrad: hoch, Kosten: hoch bis sehr hoch
* Durchsatz, Antwortzeit: Sie können die Implementierung des Providers optimieren, Redundanz (z. B. Caching) einführen, extrem schnelle Hardware oder Netze kaufen. Schwierigkeitsgrad: mittel, Kosten: beliebig
* Flexibilität: Sie möchten Datenformate flexibel halten, die Provider oder Zugriffskanäle austauschbar gestalten. Theoretisch ist alles möglich, praktisch für Entwurf und Implementierung beliebig aufwendig. Testen wird aber zum Albtraum. Schwierigkeitsgrad: Umsetzung mittel, Test: extrem
* Versionierung: Sie können entscheiden, ob die Schnittstelle abwärtskompatibel, source- oder binärkompatibel sein soll, ebenso ob jede Änderung eine neue Version vom Provider erhalten soll. Die Versionskennung kann im Namen der Schnittstelle oder als Metainformation in den Parametern hinterlegt werden. Auch eine Kompatibilität zum OSGi-Standard ist möglich. Schwierigkeitsgrad: hoch, Aufwand: klein bis beliebig.

Diese Liste können Sie sicherlich noch verlängern :-)

## APIs in der Praxis
Einige Themen liegen uns nach langjähriger Beschäftigung mit Schnittstellen noch am Herzen. Diese möchten wir Ihnen ungeordnet mitgeben:

* Externe Schnittstellen sind viel schlimmer als interne Schnittstellen, weil wir auf die Außenwelt normalerweise kaum Einfluss haben, auf unsere inneren Komponenten aber schon.
* Consumer von Schnittstellen könnten ausführbare Tests (Consumer-Driven Contracts)[^cdc-viz] schreiben, die entsprechende Provider auf Einhaltung der jeweiligen Schnittstellenvereinbarungen überprüfen. Für solche Arten von Tests gibt es mit [Pact](https://docs.pact.io) einen schicken Open-Source-Ansatz[^pact].

* Das Thema API-Management ist zum Managementhype geworden, bei dem viele namhafte Softwarehersteller mitspielen. Wir geben erst gar keine Links an: IBM, SAP, Microsoft, CA, Software AG, HP, Intel und andere spielen mit. Big Money, big hype.

## Fazit
Schnittstellen Ihres Systems, interne wie auch externe, können über Erfolg und Misserfolg kräftig mitentscheiden. Widmen Sie ihnen angemessene Aufmerksamkeit und erheben Sie API-Design zu einem der wesentlichen Themen in Architektur- und Entwicklungsdiskussionen.

Kümmern Sie sich als API-tektin um die wesentlichen Schnittstellen. Manche können Sie durchaus an die Consumer- oder Providerteams delegieren. Aber bei einigen werden Sie selbst mitbestimmen müssen. API-tektin mag wie ein schwieriger Job klingen, aber Sie können damit für viel bessere Systeme sorgen.
In diesem Sinne: **Möge die Macht der Schnittstellen mit Ihnen sein**!

[^cdc-viz]: Michael Vitz: [Consumer-Driven Contracts – Testen von Schnittstellen](https://www.innoq.com/de/articles/2016/09/consumer-driven-contracts)

[^pact]: Eine schöne Einführung in Consumer-Driven und PACT von Ron Holshausen: „[Pact 101 – Getting started with Pact and Consumer Driven Contact Testing](https://dius.com.au/2016/02/03/microservices-pact)

## Verwandte Muster

* Sie sollten wichtige Schnittstellen grundsätzlich [proaktiv](/01-proaktive) angehen.
* Bei manchen Schnittstellen sind aufgrund der möglicherweise fundamentalen und richtungsweisenden Fragestellungen [Entscheider](/18-entscheider) gefragt.
