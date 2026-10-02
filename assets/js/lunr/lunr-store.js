---
layout: none
---
{%- comment -%}
  Overrides the theme's lunr-store.js. Indexes the full text as before, but
  drops the "Dies ist ein (unvollständiger) Auszug …" note that opens every
  pattern (it made every result excerpt look the same), and adds each
  pattern's `summary` so results can show what the pattern is about.
{%- endcomment -%}
var store = [
  {%- for c in site.collections -%}
    {%- if forloop.last -%}
      {%- assign l = true -%}
    {%- endif -%}
    {%- assign docs = c.docs | where_exp:'doc','doc.search != false' -%}
    {%- for doc in docs -%}
      {%- assign text = doc.content | newline_to_br |
            replace:"<br />", " " |
            replace:"</p>", " " |
            replace:"</h1>", " " |
            replace:"</h2>", " " |
            replace:"</h3>", " " |
            replace:"</h4>", " " |
            replace:"</h5>", " " |
            replace:"</h6>", " " |
            strip_html | strip_newlines |
            replace: "Dies ist ein (unvollständiger) Auszug aus dem", "" |
            replace: "gedruckten Buch.", "" -%}
      {
        "title": {{ doc.title | jsonify }},
        "excerpt": {{ text | normalize_whitespace | strip | jsonify }},
        "summary": {{ doc.summary | default: "" | strip_html | normalize_whitespace | strip | jsonify }},
        "categories": {{ doc.categories | jsonify }},
        "tags": {{ doc.tags | jsonify }},
        "url": {{ doc.url | absolute_url | jsonify }}
      }{%- unless forloop.last and l -%},{%- endunless -%}
    {%- endfor -%}
  {%- endfor -%}]
