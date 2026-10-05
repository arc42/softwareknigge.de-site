---
title: Suchen und finden!
layout: single
permalink: /search/
# Not the theme's `search` layout: that one pulls the theme's lunr scripts in
# again. Results are rendered by assets/js/search.js into the markup below.
# Kept out of its own index — a hit leading back to the search form answers
# nothing.
search: false
sitemap: false
header:
  overlay_image: /images/header/softwareknigge-site-header-search.png
---
<div class="searchpage" data-search-page data-search-index="{{ '/search.json' | relative_url }}">

  <form class="searchpage__form" role="search" onsubmit="return false;">
    <label class="searchpage__label" for="search-input">Suchbegriff</label>
    <input class="searchpage__input" type="search" id="search-input" name="q"
           autocomplete="off" autocorrect="off" autocapitalize="off"
           spellcheck="false" placeholder="z. B. Entscheidung, Dokumentation, Meeting …">
  </form>

  <noscript>
    <p class="searchpage__note"><strong>Die Suche braucht JavaScript.</strong>
    Ohne JavaScript finden Sie alle Muster in den Übersichten:
    <a href="{{ '/positiv' | relative_url }}">positive</a>,
    <a href="{{ '/negativ/' | relative_url }}">negative</a> und
    <a href="{{ '/neutral' | relative_url }}">neutrale</a>.</p>
  </noscript>

  <p class="searchpage__count" id="search-count" role="status" aria-live="polite"></p>
  <ol class="searchpage__results" id="search-results"></ol>
</div>
