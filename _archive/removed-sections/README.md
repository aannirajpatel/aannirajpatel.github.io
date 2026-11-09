# Removed homepage sections (kept for a future decision)

Removed from `index.html` on 2026-11-08:

- `photo-gallery-section.html` - "Photo Gallery" carousel (5 slides)
- `audio-podcast-section.html` - "Audio Podcast" player (origin story)

The media they used was moved here too, so it is no longer served:

- `res/photo-gallery/` (originally `res/photo-gallery/`)
- `res/origin_story_audio.mp3` (originally `res/origin_story_audio.mp3`)

## Why this is not public
This folder starts with an underscore, so Jekyll (GitHub Pages) does not publish it. No page links to it and none of its files are reachable on aanpatel.tech. It stays in the git repo only.

## To restore
1. Move the media back: `git mv _archive/removed-sections/res/photo-gallery res/photo-gallery` and `git mv _archive/removed-sections/res/origin_story_audio.mp3 res/`.
2. Paste the section HTML back into `index.html` inside the `<section>` after the last `<div class="row">` (paths in the snippets already use `./res/...`).
