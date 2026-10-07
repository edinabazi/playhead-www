# Playhead Website

Marketing website for Playhead, a local-first waveform music player.

## Stack

- Astro
- React islands
- Tailwind CSS
- Motion
- Lucide React

## Setup

```sh
bun install
bun run dev
```

The local dev server runs at `http://localhost:4321`.

## Scripts

| Command | Description |
| --- | --- |
| `bun run dev` | Start the Astro dev server |
| `bun run build` | Build the static site into `dist/` |
| `bun run preview` | Preview the production build locally |
| `bun run astro` | Run Astro CLI commands |

## Project Structure

```text
src/
  components/
    landing/      Landing page sections and shared UI
  content/        Page copy, links, feature data, and SEO config
  layouts/        Shared HTML document layout
  lib/            Small utilities
  pages/          Astro routes
  styles/         Global CSS and Tailwind import
```

## SEO

The site is static and SEO-first. Copy and metadata live in `src/content/site.ts`, with rendering handled by `src/layouts/BaseLayout.astro`. All sections render into the initial HTML.

Structured data (`src/lib/seo.ts`):

- `SoftwareApplication`, `WebSite` and `Person` JSON-LD describing the app, its platforms, price and downloads
- `FAQPage` JSON-LD generated from the FAQ

Crawler files in `public/`:

- `robots.txt` allows all crawlers, including AI assistants, and points to the sitemap
- `sitemap.xml` lists the page; update `lastmod` when the content changes
- `llms.txt` is a plain-text summary for AI assistants. Keep it in step with the features and FAQ when the app changes

The canonical site URL is `https://playheadapp.com`.
