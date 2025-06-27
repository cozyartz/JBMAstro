# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static Astro website for J&B McKinney Rentals, a family-owned affordable housing company in Tuscaloosa, Alabama. The site showcases property transformations, company mission, and rental services using a modern tech stack optimized for performance and SEO.

## Common Development Commands

- **Development server**: `npm run dev` (serves at http://localhost:4321)
- **Build production**: `npm run build` 
- **Preview build**: `npm run preview`
- **Deploy to Cloudflare**: `wrangler pages deploy ./dist --project-name=jbm-astro-site --branch=main`

## Architecture Overview

### Tech Stack
- **Framework**: Astro 5.9+ with static output
- **Styling**: Tailwind CSS with custom brand colors and animations
- **UI Components**: Mix of Astro components and React components (via @astrojs/react)
- **Icons**: FontAwesome Pro (kit-4af6ceaa5a)
- **Images**: Cloudflare Images API for optimization and delivery
- **Video**: Cloudflare Stream for embedded content
- **Deployment**: Cloudflare Pages

### Key Architectural Patterns

1. **Image Management**: All images are served via Cloudflare Images API using IDs stored in `src/gallery-data.js`. Environment variable `CLOUDFLARE_BASE` controls the delivery URL.

2. **Component Structure**: 
   - Astro components (`.astro`) for static content and layouts
   - React components (`.jsx`) for interactive features like the masonry gallery
   - Shared layout components: `Header.astro`, `Footer.astro`, `Seo.astro`

3. **Styling System**: 
   - Custom Tailwind theme with brand colors (`brand-teal`, `brand-charcoal`, `brand-cream`, etc.)
   - Custom animations (`fade-in`, `zoom-in`, `slide-up`)
   - Responsive design with mobile-first approach

4. **Data Management**: Gallery images and asset IDs are centralized in `src/gallery-data.js` for easy management.

### Directory Structure
```
src/
├── components/          # Reusable UI components
│   ├── Header.astro    # Main navigation with mobile menu
│   ├── Footer.astro    # Site footer
│   ├── Seo.astro      # SEO meta tags component
│   ├── GalleryMasonry.jsx  # React masonry gallery
│   └── MotionFade.jsx  # Framer Motion animations
├── pages/              # Astro pages (file-based routing)
│   ├── index.astro     # Homepage with hero, video, services
│   ├── about.astro     # Company story and founders
│   ├── mission.astro   # Mission statement page
│   ├── gallery-masonry.astro  # Project gallery
│   └── contact.astro   # Contact information
├── lib/
│   └── images.ts       # Image utility functions
├── gallery-data.js     # Centralized image IDs and captions
└── styles.css          # Global styles and Tailwind base
```

## Environment Configuration

Required environment variables:
- `CLOUDFLARE_BASE`: Base URL for Cloudflare Images delivery (e.g., `https://imagedelivery.net/<account_hash>`)

## Image System

Images are managed through Cloudflare Images API:
- Image IDs are stored in `src/gallery-data.js`
- Images are served as `${CLOUDFLARE_BASE}/${imageId}/public`
- Fallback to local placeholder images when `CLOUDFLARE_BASE` is not set
- The gallery uses a Pinterest-style masonry layout with Framer Motion animations

## Styling Guidelines

- Use existing brand colors defined in `tailwind.config.js`
- Follow the established animation patterns (`animate-fade-in`, `animate-zoom-in`)
- Mobile-first responsive design with breakpoints at `sm:`, `md:`, `lg:`
- Use the custom `.btn-primary`, `.btn-secondary`, and `.card-enhanced` classes defined in `styles.css`

## FontAwesome Integration

- FontAwesome Pro is loaded centrally via the Seo component
- Icons use classes like `fas fa-home`, `fas fa-envelope`
- Icon patterns are safelisted in Tailwind config to prevent purging
- FontAwesome script is loaded once in `src/components/Seo.astro` and included on all pages