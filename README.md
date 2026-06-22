# Ajay Kumar Portfolio

Personal portfolio for Ajay Kumar, a frontend developer focused on React.js, Tailwind CSS, Flutter, responsive UI, and API integration work.

## Features

- Full-screen hero with availability, social links, contact CTA, and resume download.
- Selected work section with richer project details and live project links.
- Service, skills, experience, and contact sections built with reusable React components.
- SEO-friendly document metadata, Open Graph tags, and structured person data.
- Resume download points to the Vite public asset `ajaykumar.pdf`, so the live resume updates by replacing `public/ajaykumar.pdf`.

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

On Windows PowerShell, use `npm.cmd` if script execution policy blocks `npm.ps1`.

## Project Structure

```text
src/
  components/
    sections/      Page sections for hero, work, services, skills, experience, and contact
    ui.jsx         Shared section, pill, and button primitives
  data/
    portfolio.js   Portfolio profile, socials, projects, services, skills, and experience data
  lib/
    motion.js      Shared Framer Motion variants
public/
  ajaykumar.pdf    Latest resume PDF used by the site buttons
  RESUME-INSTRUCTIONS.md
  ajay-kumar-resume.html
```

## Updating Resume

Add or replace this file:

```text
public/ajaykumar.pdf
```

Keep the filename exactly `ajaykumar.pdf`. The portfolio buttons already use this path, so no React code changes are needed for future resume updates.

## Deployment

The production output is generated in `dist/` with:

```bash
npm run build
```
