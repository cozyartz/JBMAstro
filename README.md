# J&B McKinney Rentals

Welcome to the official web presence of **J&B McKinney Rental Properties**, an affordable housing initiative based in Tuscaloosa, Alabama. This Astro-powered site showcases property transformations, the mission of the founder, and investment opportunities that uplift underserved communities.

![Preview](https://imagedelivery.net/PocH-U7ndwJHixntYqkoZw/2af8a878-e51d-4c8d-17da-7a434e188500/public)

---

## 🚀 Project Overview

This project is built with [Astro](https://astro.build/), a fast static site generator, and styled with [Tailwind CSS](https://tailwindcss.com/). It includes:

- Reusable layout components (`Header`, `Footer`)
- A responsive Pinterest-style gallery powered by [Cloudflare Images](https://developers.cloudflare.com/images/)
- Mission-driven messaging and founder story
- Mobile-friendly design

---

## 🏗 Folder Structure

/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable Astro components
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── pages/            # Routes (.astro files)
│   │   ├── index.astro   # Home page
│   │   └── gallery.astro # Project gallery
│   └── styles.css        # Tailwind CSS file
├── astro.config.mjs
├── tailwind.config.js
├── package.json
└── README.md
```

---

## 🧑‍💻 Local Development

### Prerequisites
- Node.js `18+`
- npm

### Install Dependencies

```bash
npm install
```

### Run the Dev Server

```bash
npm run dev
```

> Visit `http://localhost:4321` to view the site locally.

---

## 🖼 Image Hosting (Cloudflare)

Images are delivered using [Cloudflare Image Delivery](https://developers.cloudflare.com/images/image-delivery/urls/).
Set `CLOUDFLARE_BASE` in an `.env` file to your account's delivery URL, e.g.:

```
CLOUDFLARE_BASE=https://imagedelivery.net/<account_hash>
```

Then image paths are generated with `<image_id>/<variant>`. If `CLOUDFLARE_BASE` is not set, local placeholder images are used instead.

---

## 🧱 Tech Stack

- **Astro**: static-first site generator
- **Tailwind CSS**: utility-first styling
- **Cloudflare Images**: global CDN image hosting
- **Cloudflare Pages**: for deployment

---

## 📞 Contact

J&B McKinney Rentals  
📍 Tuscaloosa, AL  
- **Deirdre Stokes, CEO**: (269) 317-5272  
- **Jonathan Stokes, COO**: (256) 651-7512

---

## 📝 License

© 2025 J&B McKinney Rentals. All rights reserved.  
Site design by [Cozyartz Media Group](https://cozyartz.com)

---

> Made with ❤️ for purpose-driven real estate.