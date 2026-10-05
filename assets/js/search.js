/* ===========================================================================
 * Site search — lunr.js, incremental, no build step.
 *
 * Ported from examples.arc42.org-site/assets/js/search.js, the newest member
 * of the arc42 family's search (docs' lunr engine, quality's and arc42.de's
 * ergonomics). One engine serves two surfaces: the masthead combobox
 * (suggestions while typing) and /search/ (every hit, with text). They share
 * an index, so a suggestion and a result can never disagree about what
 * matches.
 *
 * NO GERMAN STEMMER, deliberately, although the previous search had one
 * (lunr-languages' lunr.de). A stemmer files "Entscheidungen" under
 * "entscheid", so "entscheidu" — half-typed — misses its own page, and
 * incremental search stops working mid-word. Instead every term also goes in
 * as a trailing wildcard. The price: a FINISHED inflected form does not find
 * another one ("Entscheidungen" does not match "Entscheidung"); typing less
 * of the word does. Same trade-off examples.arc42.org made.
 *
 * KEYBOARD (identical to arc42.de and examples.arc42.org, so the sites do not
 * teach different habits):
 *   Cmd/Ctrl-K            focus the field
 *   Up/Down               move the highlight
 *   Enter                 open the highlighted suggestion (the first by default)
 *   Cmd/Ctrl/Shift-Enter  skip the panel, go to /search/?q=… (all results)
 *   Escape                close the panel, then clear the field
 *
 * WITHOUT JAVASCRIPT the panel stays `hidden` and the masthead form submits
 * as an ordinary GET to /search/?q=…, which then says it needs JavaScript.
 *
 * Requires window.lunr (assets/lib/lunr/lunr.min.js, plain lunr 2.3.9 — the
 * same file docs.arc42.org, arc42.de and examples.arc42.org ship).
 * =========================================================================== */
(function () {
  "use strict";

  var DEBOUNCE_MS = 120;
  var EXCERPT_WORDS = 34;
  var EXCERPT_LEAD = 8;

  // The panel's groups, keyed on the `type` search.json emits. The panel
  // orders them by best hit (see bucket()), not by this list. A record
  // whose type is missing here renders nowhere — add the group in the same
  // commit that adds the type to search.json.
  //
  // Each group carries the site's colour code (green / red / yellow, see
  // _sass/_hero.scss), as a swatch on its label and a marker on its rows —
  // arc42.de's per-type marker, with this site's own legend.
  var GROUPS = [
    { type: "positiv", label: "Positive Muster" },
    { type: "negativ", label: "Negative Muster" },
    { type: "neutral", label: "Neutrale Beobachtungen" },
    { type: "page", label: "Seiten" }
  ];
  var LABELS = {};
  GROUPS.forEach(function (group) { LABELS[group.type] = group.label; });

  // Per group, so one crowded group cannot fill the panel and hide the others;
  // and overall, because a longer panel is a results page pretending to be a
  // suggestion list. Both numbers are arc42.de's.
  var PER_GROUP = 4;
  var TOTAL_VISIBLE = 12;

  // lunr's tokenizer splits on whitespace and hyphens; query terms are cut the
  // same way, or "Ad-hoc" typed into the box never meets the two tokens the
  // index holds.
  var SEPARATOR = /[\s\-]+/;
  var EDGES = /^[^0-9a-zÀ-ɏ]+|[^0-9a-zÀ-ɏ]+$/g;

  // "Not part of a word", i.e. what a word may start after. Same character
  // class as EDGES, which keeps markTerms() agreeing with the index tokens.
  var WORD_EDGE = /[^0-9a-zÀ-ɏ]/;

  // Diacritic folding, applied SYMMETRICALLY to the index pipeline and to the
  // query, so "uber" finds "Über" and "Über" finds "uber". Folding one side
  // only is worse than folding neither.
  function fold(value) {
    return (value || "").toLocaleLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  }

  function normalize(word) { return fold(word).replace(EDGES, ""); }

  function tokenize(value) {
    return fold(value).split(SEPARATOR)
      .map(function (part) { return part.replace(EDGES, ""); })
      .filter(Boolean);
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  // ---- the index ----------------------------------------------------------

  var Engine = {
    index: null,
    byUrl: {},
    loading: null,

    trimEdges: function (token) {
      return token.update(function (value) { return fold(value).replace(EDGES, ""); });
    },

    build: function (docs) {
      lunr.Pipeline.registerFunction(Engine.trimEdges, "arc42-trim-edges");
      return lunr(function () {
        // No stemmer, on both halves — see the header.
        this.pipeline.remove(lunr.stemmer);
        this.searchPipeline.remove(lunr.stemmer);
        this.pipeline.remove(lunr.trimmer);

        // Stopwords stay INDEXED. The query half runs usePipeline:false, so a
        // dropped stopword would arrive as a term the index cannot satisfy and
        // the AND filter below would return nothing. (lunr's list is English
        // anyway; on German text it only ever removed the odd "die" by luck.)
        this.pipeline.remove(lunr.stopWordFilter);
        this.pipeline.add(Engine.trimEdges);

        this.ref("url");
        this.field("title", { boost: 12 });
        this.field("summary", { boost: 4 });
        this.field("content");

        docs.forEach(function (doc) { this.add(doc); }, this);
      });
    },

    // Fetched on demand — on first focus, first keypress or Cmd-K — never on
    // page load. Every page would otherwise pay for a search most readers
    // never open.
    load: function (url) {
      if (Engine.loading) { return Engine.loading; }
      Engine.loading = window.fetch(url, { credentials: "same-origin" })
        .then(function (response) {
          if (!response.ok) { throw new Error("HTTP " + response.status); }
          return response.json();
        })
        .then(function (data) {
          var docs = (data || []).filter(function (d) { return d && d.title && d.url; });
          docs.forEach(function (doc) { Engine.byUrl[doc.url] = doc; });
          Engine.index = Engine.build(docs);
          return Engine.index;
        });
      // A failed fetch must not stick: the next focus tries again.
      Engine.loading.catch(function () { Engine.loading = null; });
      return Engine.loading;
    },

    search: function (raw) {
      var tokens = tokenize(raw);
      if (!Engine.index || !tokens.length) { return { tokens: tokens, matches: [] }; }

      var matches;
      try {
        matches = Engine.index.query(function (query) {
          tokens.forEach(function (token) {
            // The exact term, weighted up so a finished word beats a
            // coincidental prefix, and the trailing wildcard, which keeps
            // results flowing mid-word.
            query.term(token, { usePipeline: false, boost: 10 });
            query.term(token, {
              usePipeline: false, boost: 1,
              wildcard: lunr.Query.wildcard.TRAILING
            });
          });
        });
      } catch (error) {
        // lunr throws on malformed clauses (a lone "*", for instance).
        return { tokens: tokens, matches: [] };
      }

      // Multi-word queries are AND, not OR: lunr's default presence is
      // OPTIONAL, so "chef architekt" would score every document with either
      // word. A wildcard clause records the EXPANDED term, hence the prefix
      // test rather than equality.
      if (tokens.length > 1) {
        matches = matches.filter(function (match) {
          var matched = Object.keys(match.matchData.metadata);
          return tokens.every(function (token) {
            return matched.some(function (term) { return term.indexOf(token) === 0; });
          });
        });
      }
      return { tokens: tokens, matches: matches };
    }
  };

  // A word counts as a hit when a query token is a prefix of it — the same
  // relation the wildcard clause uses, so what gets marked is what earned the
  // match. Hyphenated compounds are checked per part, mirroring the tokenizer.
  function isHit(word, tokens) {
    var parts = normalize(word).split("-");
    return tokens.some(function (token) {
      return parts.some(function (part) { return part.indexOf(token) === 0; });
    });
  }

  // Marks the matched runs inside a title. Offsets are found in the folded
  // copy and applied to the original, which holds only while folding keeps the
  // length — true for precomposed umlauts, so a length change means "leave it
  // unmarked" rather than "mark the wrong letters". Only WORD-INITIAL runs are
  // marked: the wildcard matches "arch" in "Architekt", never in "Monarch".
  function markTerms(text, tokens) {
    var raw = String(text || "");
    var folded = fold(raw);
    if (!tokens.length || folded.length !== raw.length) { return escapeHtml(raw); }

    var marked = [];
    var found = false;
    tokens.forEach(function (token) {
      var at = folded.indexOf(token);
      while (at !== -1) {
        if (at === 0 || WORD_EDGE.test(folded.charAt(at - 1))) {
          for (var i = at; i < at + token.length; i++) { marked[i] = true; }
          found = true;
        }
        at = folded.indexOf(token, at + 1);
      }
    });
    if (!found) { return escapeHtml(raw); }

    var out = "";
    var runStart = -1;
    for (var i = 0; i <= raw.length; i++) {
      var on = marked[i] === true;
      if (on && runStart === -1) { runStart = i; }
      else if (!on && runStart !== -1) {
        out += "<mark>" + escapeHtml(raw.slice(runStart, i)) + "</mark>";
        runStart = -1;
      }
      if (!on && i < raw.length) { out += escapeHtml(raw.charAt(i)); }
    }
    return out;
  }

  // EXCERPT_WORDS words around the first hit, hits marked. With `whole`, the
  // text is returned in full rather than cut — for the summary, which is one
  // short paragraph written to be read whole.
  function excerpt(content, tokens, whole) {
    var words = String(content || "").split(/\s+/).filter(Boolean);
    if (!words.length) { return ""; }

    var hit = -1;
    for (var i = 0; i < words.length; i++) {
      if (isHit(words[i], tokens)) { hit = i; break; }
    }
    var start = whole || hit === -1 ? 0 : Math.max(0, hit - EXCERPT_LEAD);
    var end = whole ? words.length : start + EXCERPT_WORDS;
    var body = words.slice(start, end).map(function (word) {
      var safe = escapeHtml(word);
      return isHit(word, tokens) ? "<mark>" + safe + "</mark>" : safe;
    }).join(" ");
    return (start > 0 ? "… " : "") + body + (end < words.length ? " …" : "");
  }

  function hasHit(text, tokens) {
    return String(text || "").split(/\s+/).some(function (word) { return isHit(word, tokens); });
  }

  // The text under a hit on /search/. The summary says what the pattern is
  // about, so it wins whenever it carries the match (or the title does); only
  // when the match sits in the body is the body shown, around the match —
  // otherwise the reader cannot see why the pattern is listed.
  function hitText(doc, tokens) {
    if (doc.summary && (hasHit(doc.summary, tokens) || hasHit(doc.title, tokens) ||
                        !hasHit(doc.content, tokens))) {
      return excerpt(doc.summary, tokens, true);
    }
    return excerpt(doc.content, tokens, false);
  }

  // ---- the masthead combobox ---------------------------------------------

  function initCombobox() {
    var form = document.querySelector("[data-arc42-search]");
    if (!form) { return; }

    var input = form.querySelector("input[type=search]");
    var panel = form.querySelector("[data-arc42-search-panel]");
    var status = form.querySelector("[data-arc42-search-status]");
    var hint = form.querySelector("[data-arc42-search-hint]");
    var hintDesc = form.querySelector("[data-arc42-search-hint-desc]");
    var indexUrl = form.getAttribute("data-arc42-search");
    var resultsUrl = form.getAttribute("action");
    if (!input || !panel) { return; }

    var apple = /Mac|iPhone|iPad|iPod/.test(navigator.platform || "");
    if (hint) { hint.textContent = apple ? "⌘K" : "Strg K"; }
    if (hintDesc) {
      hintDesc.textContent = (apple ? "Befehlstaste-K" : "Strg-K") +
        " springt in die Suche. Enter öffnet den markierten Vorschlag, " +
        (apple ? "Befehlstaste-Enter" : "Strg-Enter") + " zeigt alle Treffer.";
    }
    var chordLabel = apple ? "⌘⏎" : "Strg ⏎";

    var rows = [];
    var active = -1;
    var timer = null;

    function close() {
      panel.hidden = true;
      panel.innerHTML = "";
      input.setAttribute("aria-expanded", "false");
      input.removeAttribute("aria-activedescendant");
      rows = [];
      active = -1;
    }

    function highlight(next) {
      if (!rows.length) { return; }
      if (active >= 0) { rows[active].setAttribute("aria-selected", "false"); }
      active = (next + rows.length) % rows.length;
      rows[active].setAttribute("aria-selected", "true");
      input.setAttribute("aria-activedescendant", rows[active].id);
      if (rows[active].scrollIntoView) {
        rows[active].scrollIntoView({ block: "nearest" });
      }
    }

    // Buckets the matches by type, capped per group and overall, keeping the
    // ranked order inside each bucket. Ranking decides WHICH rows survive the
    // caps, and also where the groups sit: each group appears where its best
    // hit ranks, so the top row is always the top hit. DIVERGENCE FROM arc42.de, whose
    // group order is fixed — with a fixed order, "elfen" put a positive
    // pattern that merely mentions the word above "02 – Elfenbeinturm", and
    // Enter, which opens the top row, opened the wrong page.
    function bucket(matches) {
      var buckets = {};
      var order = [];
      var total = 0;
      GROUPS.forEach(function (group) { buckets[group.type] = []; });
      for (var i = 0; i < matches.length && total < TOTAL_VISIBLE; i++) {
        var doc = Engine.byUrl[matches[i].ref];
        var into = doc && buckets[doc.type];
        if (!into || into.length >= PER_GROUP) { continue; }
        if (!into.length) { order.push(doc.type); }
        into.push(doc);
        total++;
      }
      var groups = order.map(function (type) {
        return GROUPS.filter(function (group) { return group.type === type; })[0];
      });
      return { groups: buckets, order: groups, shown: total };
    }

    // The key legend under the rows. Outside the scroll box, so it never
    // scrolls away; aria-hidden, because the input's description and the
    // live region already say all of it to assistive tech.
    function legend() {
      return '<div class="arc42-search__footer" aria-hidden="true">' +
        "<span><kbd>↑↓</kbd> auswählen</span>" +
        "<span><kbd>↵</kbd> öffnen</span>" +
        "<span><kbd>" + escapeHtml(chordLabel) + "</kbd> alle Treffer</span>" +
        "<span><kbd>esc</kbd> schließen</span>" +
        "</div>";
    }

    function render(result, raw) {
      var capped = bucket(result.matches);
      if (!capped.shown) {
        panel.innerHTML = '<p class="arc42-search__empty">Keine Treffer für <strong>' +
          escapeHtml(raw) + "</strong>.</p>" + legend();
        panel.hidden = false;
        input.setAttribute("aria-expanded", "true");
        input.removeAttribute("aria-activedescendant");
        rows = [];
        active = -1;
        if (status) { status.textContent = "Keine Treffer."; }
        return;
      }

      // Rows are real <a> elements (examples.arc42.org's choice over
      // arc42.de's <li data-href>), so middle-click and open-in-new-tab work.
      // tabindex -1 keeps them out of the Tab order: the arrows move through
      // the options, and Tab must LEAVE the combobox (and so close the panel)
      // rather than walk into it link by link.
      var index = 0;
      // The scroller gets tabindex -1 as well: Chrome makes a scrollable box
      // keyboard-focusable on its own, and Tab then stopped inside the panel.
      var html = '<div class="arc42-search__scroll" role="presentation" tabindex="-1">';
      capped.order.forEach(function (group) {
        var docs = capped.groups[group.type];
        html += '<div class="arc42-search__group arc42-search__group--' + group.type +
          '" role="group" aria-label="' + escapeHtml(group.label) + '">' +
          '<p class="arc42-search__group-label" aria-hidden="true">' +
          escapeHtml(group.label) + "</p>";
        docs.forEach(function (doc) {
          html += '<a class="arc42-search__row" role="option" aria-selected="false" tabindex="-1"' +
            ' id="arc42-search-row-' + index + '" href="' + escapeHtml(doc.url) + '">' +
            '<span class="arc42-search__row-title">' + markTerms(doc.title, result.tokens) +
            "</span></a>";
          index++;
        });
        html += "</div>";
      });

      // Everything the caps cut is still reachable, by keyboard too: this row
      // is inside the listbox, so Down past the last suggestion lands on it.
      var hidden = result.matches.length - capped.shown;
      if (hidden > 0) {
        html += '<div class="arc42-search__group arc42-search__group--all" role="group" aria-label="Mehr">' +
          '<a class="arc42-search__row arc42-search__row--all" role="option" aria-selected="false" tabindex="-1"' +
          ' id="arc42-search-row-' + index + '" href="' + escapeHtml(resultsUrl) +
          "?q=" + encodeURIComponent(raw) + '">' +
          '<span class="arc42-search__row-title">Alle <strong>' +
          result.matches.length + "</strong> Treffer für <strong>" +
          escapeHtml(raw) + "</strong> anzeigen</span></a></div>";
        index++;
      }
      html += "</div>";

      panel.innerHTML = html + legend();
      panel.hidden = false;
      input.setAttribute("aria-expanded", "true");
      rows = Array.prototype.slice.call(panel.querySelectorAll("[role=option]"));
      active = -1;
      highlight(0);   // Enter has something to open from the first keystroke.

      if (status) {
        status.textContent = result.matches.length + " Treffer, " + capped.shown + " angezeigt.";
      }
    }

    function run() {
      var raw = input.value.trim();
      if (!raw) { close(); if (status) { status.textContent = ""; } return; }
      if (!Engine.index) {
        Engine.load(indexUrl).then(run).catch(function () {
          panel.innerHTML = '<p class="arc42-search__empty">Die Suche ist gerade nicht verfügbar.</p>';
          panel.hidden = false;
        });
        return;
      }
      render(Engine.search(raw), raw);
    }

    function allResults() {
      window.location.href = resultsUrl + "?q=" + encodeURIComponent(input.value.trim());
    }

    // Warm the index on intent, not on load.
    input.addEventListener("focus", function () { Engine.load(indexUrl).catch(function () {}); });

    input.addEventListener("input", function () {
      window.clearTimeout(timer);
      timer = window.setTimeout(run, DEBOUNCE_MS);
    });

    input.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown") { e.preventDefault(); highlight(active + 1); return; }
      if (e.key === "ArrowUp") { e.preventDefault(); highlight(active - 1); return; }

      if (e.key === "Escape") {
        // First Escape closes the panel, a second clears the field.
        // preventDefault is load-bearing: <input type="search"> clears itself
        // on Escape, so without it the first press did both.
        if (!panel.hidden) {
          e.preventDefault();
          close();
        } else {
          input.value = "";
        }
        return;
      }

      if (e.key === "Enter") {
        if (e.metaKey || e.ctrlKey || e.shiftKey) {
          e.preventDefault();
          allResults();
          return;
        }
        if (active >= 0 && rows[active]) {
          e.preventDefault();
          window.location.href = rows[active].getAttribute("href");
          return;
        }
        // Nothing highlighted: the form submits to /search/?q=… on its own.
      }
    });

    // A click outside closes the panel. Not a blur handler: blur fires before
    // the click that follows it lands, so choosing a suggestion with the mouse
    // would close the panel out from under the pointer.
    document.addEventListener("click", function (e) {
      if (!form.contains(e.target)) { close(); }
    });

    // Tabbing out must close it too, or the listbox stays open over the page
    // with aria-expanded="true" (arc42.de commit 8bb2863). relatedTarget is
    // null when focus leaves the document, which counts as leaving the form.
    form.addEventListener("focusout", function (e) {
      if (!e.relatedTarget || !form.contains(e.relatedTarget)) { close(); }
    });

    // ...which needs focus to STAY in the field while the pointer picks a row.
    // Safari does not focus a link on click, so without this the mousedown
    // blurred the input, focusout closed the panel, and the click that
    // followed landed on nothing. Suppressing mousedown's focus move keeps the
    // input focused; the click (and middle-click) still follows the link.
    panel.addEventListener("mousedown", function (e) { e.preventDefault(); });

    document.addEventListener("keydown", function (e) {
      // Plain Cmd/Ctrl-K only: Ctrl-Shift-K is Firefox's web console.
      if ((e.metaKey || e.ctrlKey) && !e.shiftKey && !e.altKey &&
          (e.key === "k" || e.key === "K")) {
        e.preventDefault();
        input.focus();
        input.select();
      }
    });
  }

  // ---- /search/ -----------------------------------------------------------

  function initResultsPage() {
    var page = document.querySelector("[data-search-page]");
    if (!page) { return; }

    var input = document.getElementById("search-input");
    var countLine = document.getElementById("search-count");
    var results = document.getElementById("search-results");
    var indexUrl = page.getAttribute("data-search-index");
    if (!input || !countLine || !results) { return; }

    var timer = null;

    function rememberQuery(value) {
      if (!window.history || !window.history.replaceState) { return; }
      var address = new URL(window.location.href);
      if (value) { address.searchParams.set("q", value); }
      else { address.searchParams.delete("q"); }
      try {
        window.history.replaceState({}, "", address.pathname + address.search + address.hash);
      } catch (error) {
        // Safari rate-limits replaceState; a shareable URL is a nicety, a dead
        // search field until reload is not.
      }
    }

    function run() {
      var raw = input.value.trim();
      rememberQuery(raw);

      if (!raw) { results.innerHTML = ""; countLine.textContent = ""; return; }
      if (!Engine.index) { countLine.textContent = "Suchindex wird geladen …"; return; }

      var result = Engine.search(raw);
      if (!result.tokens.length || !result.matches.length) {
        results.innerHTML = "";
        countLine.textContent = "Keine Treffer für „" + raw + "“.";
        return;
      }

      results.innerHTML = result.matches.map(function (match) {
        var doc = Engine.byUrl[match.ref];
        if (!doc) { return ""; }
        var body = hitText(doc, result.tokens);
        return '<li class="search-hit search-hit--' + escapeHtml(doc.type) + '">' +
          '<p class="search-hit__where">' + escapeHtml(LABELS[doc.type] || "") + "</p>" +
          '<h2 class="search-hit__title"><a href="' + escapeHtml(doc.url) + '">' +
          escapeHtml(doc.title) + "</a></h2>" +
          (body ? '<p class="search-hit__text">' + body + "</p>" : "") +
          "</li>";
      }).join("");

      countLine.textContent = result.matches.length + " Treffer";
    }

    input.addEventListener("input", function () {
      window.clearTimeout(timer);
      timer = window.setTimeout(run, DEBOUNCE_MS);
    });

    // Arriving from the masthead lands here as /search/?q=… — pick the term up
    // and run it, or the reader types the same thing twice.
    var requested = new URLSearchParams(window.location.search).get("q");
    if (requested) { input.value = requested; countLine.textContent = "Suchindex wird geladen …"; }
    input.focus();

    Engine.load(indexUrl).then(run).catch(function (error) {
      countLine.textContent = "Der Suchindex konnte nicht geladen werden.";
      if (window.console && window.console.error) {
        window.console.error("arc42 search: " + indexUrl, error);
      }
    });
  }

  function init() {
    if (!window.lunr) { return; }
    initCombobox();
    initResultsPage();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
}());
