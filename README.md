# Website für "Knigge für Softwarearchitekten"

> currently available on [softwareknigge.arc42.org](https://softwareknigge.arc42.org)



## Grundlagen

### Hosting

* Die Website wird über [GitHub Pages](https://pages.github.com) gehostet,
  direkt aus dem Branch `main` (Pfad `/`) dieses Repositories (`arc42/softwareknigge.de-site`).
  Jeder Push auf `main` baut und veröffentlicht die Site automatisch.
* Die Subdomain `softwareknigge.arc42.org` ist bei GoDaddy (DNS von `arc42.org`)
  per CNAME-Eintrag auf `arc42.github.io` geroutet.
* Die Datei `CNAME` im Repository-Root legt die Custom Domain für GitHub Pages fest –
  nicht löschen!

* home.md is the homepage, it's mapped (via permalink) to "/".

### Lokal bauen

```bash
docker compose up
```

Danach ist die Site unter <http://localhost:4000> erreichbar.

### Kurs-Termine

Die Termine der folgenden arc42-Kurse (`_includes/subtle-ads/subtle-ads.html`)
werden zur Laufzeit per htmx von einem externen Backend geladen.

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
