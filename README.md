<div align="center">
  <br/>
  <img src="https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white" alt="Flutter" />
  <img src="https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white" alt="Dart" />
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
</div>

<br/>

<div align="center">
  <h1>Abdallah Medhat Kamel</h1>
  <h3>Junior Flutter Developer &bull; Mobile Application Developer</h3>
  <br/>
  <a href="https://linkedin.com/in/abdallah-medhat1/">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://github.com/Abdalla-Medhat">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="mailto:abdallahmedhat.dev@gmail.com">
    <img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
</div>

<br/>
<hr/>

## Overview

Personal portfolio website built with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**.

The site showcases my work as a Mobile Application Developer, including projects, technical skills, experience, certifications, and education &mdash; all in a modern, responsive design with smooth animations and a premium dark-themed UI.

<br/>

## Tech Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion |
| **Icons** | Lucide React + Custom SVG |
| **Fonts** | Geist (Vercel) |

<br/>

## Features

- **Responsive Design** &mdash; Seamless experience across mobile, tablet, laptop, and desktop
- **Dark Theme** &mdash; Premium dark UI with electric blue &amp; cyan accents
- **Glassmorphism** &mdash; Subtle glass effects on key components (Hero, About, Contact, Navigation)
- **Smooth Animations** &mdash; Scroll reveals, fade, slide, and blur transitions via Framer Motion
- **Aurora Gradients** &mdash; Animated mesh gradient backgrounds for visual depth
- **SEO Optimized** &mdash; Semantic HTML, Open Graph metadata, accessibility-first markup
- **Contact Form** &mdash; Integrated with mailto for direct communication
- **Statistics** &mdash; Auto-derived stats from portfolio data (projects, skills, certifications)

<br/>

## Sections

| Section | Description |
|---|---|
| **Hero** | Profile image, animated blobs, title, social links, CTA buttons |
| **About** | Bio, quick info cards (location, phone, languages, education) |
| **Skills** | 8 technology categories with skill badges |
| **Statistics** | Project count, certification count, skill count, language count |
| **Projects** | Featured + other projects with tech tags and GitHub links |
| **Experience** | Professional timeline with responsibilities list |
| **Education** | Academic background |
| **Certificates** | 3 professional certifications with verification links |
| **Contact** | Contact form + direct info + social links |

<br/>

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

<br/>

## Project Structure

```
portfolio/
├── public/
│   └── images/          # Static assets (profile image)
├── src/
│   ├── app/
│   │   ├── globals.css  # Tailwind theme, animations, glass effects
│   │   ├── layout.tsx   # Root layout, fonts, SEO metadata
│   │   └── page.tsx     # Section composition
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Certificates.tsx
│   │   ├── Statistics.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Icons.tsx
│   │   ├── AnimatedSection.tsx
│   │   └── GlassCard.tsx
│   └── data/
│       └── portfolio.ts # Single source of truth for all content
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── eslint.config.mjs
```

<br/>

## Design

Built with a hybrid design philosophy:

- **70%** Modern Dark UI &mdash; `#030712` primary background, `#F8FAFC` text
- **20%** Soft Glassmorphism &mdash; Backdrop blur on key components
- **10%** Premium Glow Effects &mdash; Subtle blue/cyan glows, aurora gradients

### Color Palette

| Role | Color |
|---|---|
| Primary Background | `#030712` |
| Secondary Background | `#0B1220` |
| Surface | `#111827` |
| Primary Accent (Electric Blue) | `#2563EB` |
| Secondary Accent (Cyan) | `#06B6D4` |
| Success | `#22C55E` |
| Warning | `#F59E0B` |
| Text Primary | `#F8FAFC` |
| Text Secondary | `#9CA3AF` |

<br/>

## Deployment

Deploy to [Vercel](https://vercel.com/) with zero configuration:

```bash
npm i -g vercel
vercel
```

<br/>
<hr/>

<div align="center">
  <sub>Built with Next.js &bull; Designed with care</sub>
</div>
