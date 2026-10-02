---
target: softwareknigge.arc42.org
total_score: 19
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 2
target_identity: "url:https://softwareknigge.arc42.org/"
timestamp: 2026-10-02T09-18-27Z
slug: softwareknigge-arc42-org
---
# Critique: softwareknigge.arc42.org
Method: dual-agent (A: design review · B: detector + rendered URL scan). Browser overlay unavailable (Chrome extension disconnected).

## Heuristics: 19/40 (Poor)
1 Status 2 · 2 Real world 3 · 3 Control 2 · 4 Consistency 1 · 5 Error prevention 2 · 6 Recognition 2 · 7 Efficiency 2 · 8 Minimalism 2 · 9 Error recovery 1 · 10 Help 2

## Priority issues
- [P1] White hero titles on yellow/green header bands fail contrast; /search header image path wrong (white on white).
- [P1] Broken/unfinished artefacts published: _positiv/??-positiv.md -> /xxx + empty link in /positiv list; /about undefined feature rows buecher/lebenslauf + "Site zuletzt generiert" line; logo img without alt (_includes/masthead.html:6); empty alts on graph/covers; 404 two h1s, no alt, no way home.
- [P2] Ported training box (maroon) + footer (INNOQ blue) form a third visual dialect; "Hinweis" h3 + kicker + h4 triple label; box out-shouts content; "Warteliste" 10.2px.
- [P2] Colour code inconsistent (neutral blue button vs yellow band), nav labels "Positives…", flat 21/14-item lists, English pager "Previous/Next" with hidden targets, no back-to-overview.
- [P2] Pattern-language graph is an inert PNG (linked SVG exists in _includes) and illegible on mobile; caricature cropped out of mobile heroes.

## Detector
43 findings static (cramped-padding 18, side-tab 10, undersized-ui-text 6, skipped-heading 5, low-contrast 4); rendered: line-length 50 (desktop), hero low-contrast 7, buried-raster 5 (fade-in artefact). False positives: side-tab on footer rule, feature__wrapper padding, buried-raster.
