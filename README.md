# Website für "Knigge für Softwarearchitekten"

> currently available on [softwareknigge.arc42.org](https://softwareknigge.arc42.org)



## Grundlagen

### Hosting

* Die Website wird über [GitHub Pages](https://pages.github.com) gehostet
  (Repository `arc42/softwareknigge.de-site`).
* Jeder Push auf `main` startet den Workflow
  `.github/workflows/build-deploy-gh-pages.yml`: er baut die Site mit Jekyll
  aus genau den Gems in `Gemfile.lock` (wie lokal mit `make dev`) und
  veröffentlicht sie. Manuell auslösbar per „Run workflow“ im Actions-Tab.
* Die Subdomain `softwareknigge.arc42.org` ist bei GoDaddy (DNS von `arc42.org`)
  per CNAME-Eintrag auf `arc42.github.io` geroutet.
* Die Datei `CNAME` im Repository-Root legt die Custom Domain für GitHub Pages fest –
  nicht löschen!

* home.md is the homepage, it's mapped (via permalink) to "/".

### Lokale Entwicklung

Voraussetzung: Docker (mit `docker compose`) und `make`. Ruby/Jekyll werden
nicht lokal installiert, sondern laufen in einem eigenen Dev-Image
(`softwareknigge-site:latest`, Ruby 3.2, Gems exakt aus `Gemfile.lock`).

```bash
make dev     # Dev-Server mit Live-Reload starten
make down    # wieder stoppen
make help    # alle Targets anzeigen
```

`make dev` liefert die Site unter <http://localhost:4280> aus (nicht
`0.0.0.0:4280` – Firefox verbindet sich dorthin nicht). Der Port ist fest auf
**4280** gesetzt statt auf Jekylls Default 4000, damit dieser Dev-Server
parallel zu denen der anderen arc42-Sites laufen kann – siehe
`raw/port-assignment.md` in meta.arc42.org. Die Portnummer steht an drei
Stellen, die zusammenpassen müssen: `SITE_PORT` im `Makefile`, Mapping und
`--port` in `docker-compose.yml`, `EXPOSE`/`CMD` im `Dockerfile`.

Weitere Targets:

| Target         | Zweck                                                              |
|----------------|--------------------------------------------------------------------|
| `make build`   | Dev-Image neu bauen                                                |
| `make install` | Gems ins Image übernehmen, nachdem das `Gemfile` geändert wurde    |
| `make update`  | Gems auf neueste erlaubte Versionen heben (schreibt `Gemfile.lock`) |
| `make clean`   | `_site` und die Docker-Cache-Volumes löschen (echter Reset)        |
| `make shell`   | Shell im Dev-Container öffnen                                      |
| `make logs`    | Logs des laufenden Containers verfolgen                            |
| `make check`   | Einfache Plausibilitätsprüfungen                                   |

Passt `Gemfile.lock` nicht mehr zum gebauten Image, bricht der Container beim
Start mit einem Hinweis ab – dann `make install` oder `make build` ausführen.

### Kurs-Termine

Die Box mit den nächsten fünf arc42-Trainingsterminen (unter den Mustern und
auf den Übersichts-, Buch- und About-Seiten) wird beim Build aus
`_data/trainings.json` erzeugt – kein Laden zur Laufzeit, die Termine stehen im HTML.
Gleiches Verfahren wie auf faq.arc42.org und docs.arc42.org:

* `_data/trainings.json` ist eine Kopie von
  <https://trainings.arc42.org/api/trainings.json> ohne abgelaufene Termine.
* `.github/workflows/refresh-trainings.yml` aktualisiert sie montags um
  06:17 UTC, manuell per „Run workflow“ oder per `trainings-updated`-Dispatch
  aus dem Trainings-Repo. Ein Commit erfolgt nur, wenn sich Termine geändert
  haben; danach wird der Pages-Deploy angestoßen.
* `_includes/training-dates.html` rendert die Box (deutsche Fassung der
  FAQ-Variante), `_sass/_training-dates.scss` enthält die Styles.
* Termine werden im Trainings-Repo (`_data/trainings.yml`) gepflegt, nie hier.
* Auf Musterseiten kommt die Box aus `_includes/post_pagination.html` (nach
  den Vor/Zurück-Links), auf den Übersichtsseiten aus deren Markdown.

### Anpassungen am Theme

Das Theme (minimal-mistakes 4.21) wird als `remote_theme` geladen. Diese
Dateien überschreiben bzw. ergänzen es – bei einem Theme-Update prüfen:

| Datei | Zweck |
|---|---|
| `_data/ui-text.yml` | deutsche Oberflächentexte (die Datei des Remote-Themes wird nicht geladen) |
| `_includes/page__hero.html` | Kopfband: dunkle Titel auf hellen Bändern, Bandfarbe, „Negatives Muster · 2 von 14“ |
| `_includes/post_pagination.html` | Vor/Zurück mit Mustername und „Übersicht“, danach die Trainings-Box |
| `_includes/page__date.html` | kein „Aktualisiert: <Build-Datum>“ mehr |
| `_includes/skip-links.html` | Sprunglinks ohne Überschrift, deutsch |
| `_includes/search/lunr-search-scripts.html`, `assets/js/lunr/*` | deutsche Suche (Stemming, Zusammenfassung als Treffertext) |
| `_includes/pattern-index.html` | Register der Übersichtsseiten |
| `_sass/_*.scss` (Import in `assets/css/main.scss`) | Layout, Farben, Box, Footer, Mobil |

Kategoriefarben: positiv `#a0bf80`, negativ `#c6041b`, neutral `#ffd401`
(`_sass/_hero.scss`). Neue Musterseiten brauchen keine Trainings-Box im
Markdown; Titel im Format `"NN – Name"` (Halbgeviertstrich).

## Credits

##### Michael Rose, creator of the Minimal-Mistakes Jekyll Theme

- <https://mademistakes.com>
- <https://twitter.com/mmistakes>

#### Icons + Images:

* Free images can be found at [Unsplash](https://unsplash.com/)
* I generated the various favicon files with [RealFavIconGenerator](http://realfavicongenerator.net/).


---

## Licenses


### Das Buch
Sämtliche Inhalte des Buches sind geistiges Eigentum von Dr. Peter Hruschka
und Dr. Gernot Starke (aka **die Autoren**). Nutzung nur mit schriftlicher Genehmigung der Autoren innerhalb der engenen Grenzen des Urheberrechts.

Teile der Inhalte sind in der Zeitschrift "JavaMagazin" (Software & Support Verlag)
erschienen.

(c) 2014 und Folgejahre Dr. Peter Hruschka und Dr. Gernot Starke.



### [Minimal Mistakes Jekyll Theme](https://mmistakes.github.io/minimal-mistakes/)


##### The MIT License (MIT)

Copyright (c) 2016 Michael Rose

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
