---
layout: none
---
// Search for this site: the theme's lunr-en.js with the German pipeline
// (lunr.de: stemmer, stop words, trimmer) and the pattern summary as the
// result text. Loaded by _includes/search/lunr-search-scripts.html.

var idx = lunr(function () {
  this.use(lunr.de)
  this.field('title', { boost: 10 })
  this.field('summary', { boost: 3 })
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')

  for (var item in store) {
    this.add({
      title: store[item].title,
      summary: store[item].summary,
      excerpt: store[item].excerpt,
      categories: store[item].categories,
      tags: store[item].tags,
      id: item
    })
  }
});

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

function resultText(doc) {
  if (doc.summary) return doc.summary;
  var words = doc.excerpt.split(" ");
  return words.slice(0, 30).join(" ") + (words.length > 30 ? " …" : "");
}

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val().toLowerCase().trim();
    resultdiv.empty();
    if (query === "") return;

    var result = idx.query(function (q) {
      query.split(lunr.tokenizer.separator).forEach(function (term) {
        if (term === "") return;
        q.term(term, { boost: 100 })
        q.term(term, { usePipeline: false, wildcard: lunr.Query.wildcard.TRAILING, boost: 10 })
        q.term(term, { usePipeline: false, editDistance: 1, boost: 1 })
      })
    });

    if (result.length === 0) {
      resultdiv.append('<p class="results__found">Keine Treffer für „' + escapeHtml(query) +
        '“. Versuchen Sie einen anderen Begriff oder stöbern Sie in den <a href="{{ "/positiv" | relative_url }}">positiven</a>, <a href="{{ "/negativ" | relative_url }}">negativen</a> und <a href="{{ "/neutral" | relative_url }}">neutralen</a> Mustern.</p>');
      return;
    }

    resultdiv.append('<p class="results__found">' + result.length + ' {{ site.data.ui-text[site.locale].results_found | default: "Treffer" }}</p>');
    result.forEach(function (r) {
      var doc = store[r.ref];
      resultdiv.append(
        '<div class="list__item">' +
          '<article class="archive__item">' +
            '<h2 class="archive__item-title"><a href="' + doc.url + '">' + escapeHtml(doc.title) + '</a></h2>' +
            '<p class="archive__item-excerpt">' + escapeHtml(resultText(doc)) + '</p>' +
          '</article>' +
        '</div>');
    });
  });
});
