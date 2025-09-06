# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `pnpm dev`
- **Build project**: `pnpm build`
- **Preview production build**: `pnpm preview`
- **Run all tests**: `pnpm test` (runs both integration and unit tests)
- **Run unit tests**: `pnpm test:unit` (Vitest)
- **Run integration tests**: `pnpm test:integration` (Playwright)
- **Type checking**: `pnpm check` (SvelteKit sync + svelte-check)
- **Type checking with watch**: `pnpm check:watch`
- **Lint code**: `pnpm lint` (Prettier + ESLint)
- **Format code**: `pnpm format` (Prettier)

## Architecture Overview

This is a personal website built with **SvelteKit** using the following key technologies:

- **Framework**: SvelteKit with TypeScript
- **Styling**: Tailwind CSS v4 + DaisyUI
- **Content**: MDSveX for Markdown-based blog posts
- **Code Highlighting**: Shiki with Nord theme
- **UI Components**: bits-ui (headless components) + custom UI components
- **Image Optimization**: @zerodevx/svelte-img
- **Package Manager**: pnpm

### Project Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── ui/           # Reusable UI components (dropdown-menu, etc.)
│   │   ├── cv/           # Resume/CV specific components
│   │   ├── logos/        # Logo components
│   │   ├── navbar/       # Navigation components
│   │   └── work/         # Work/project related components
│   ├── data/             # Static data (projects, art)
│   ├── seo/              # SEO utilities (JSON-LD)
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Utility functions
├── routes/
│   ├── api/              # API endpoints (OG images, posts, sitemap)
│   ├── blog/
│   │   └── pages/        # Blog posts in Markdown (.md files)
│   ├── art/              # Art gallery page
│   └── resume/           # Resume/CV page
└── static/               # Static assets (images, icons)
```

### Key Configuration Files

- **svelte.config.js**: SvelteKit configuration with MDSveX preprocessing
- **vite.config.ts**: Vite configuration with plugins (imagetools, tailwind)
- **highlighter.mjs**: Custom Shiki highlighter for code blocks
- **src/lib/config.ts**: Site configuration (title, URL, description)

### Blog System

Blog posts are stored in `src/routes/blog/pages/` as Markdown files with frontmatter metadata. The blog system uses:
- MDSveX for processing Markdown with Svelte components
- Custom post utilities in `src/lib/utils/posts.ts`
- Automatic post discovery via `import.meta.glob()`
- Post metadata includes: title, description, date, tags, modified

### Theme System

The site supports light/dark themes using DaisyUI themes:
- Light theme: `fantasy`
- Dark theme: `dim`
- Theme switching via `src/lib/components/themeSwitch.svelte`
- Theme mappings in `src/lib/themes.ts`

### Content Management

- **Projects**: Defined in `src/lib/data/projects.ts` with project metadata
- **Art Gallery**: Image references in `src/lib/data/art.ts`
- **Static Assets**: Stored in `static/` directory for direct access

### SEO Features

- Open Graph image generation via `/api/og` endpoint
- JSON-LD structured data in `src/lib/seo/ld.ts`
- Sitemap generation via `/sitemap.xml` endpoint
- Google Analytics integration in `src/app.html`