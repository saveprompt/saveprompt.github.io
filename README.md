# SavePrompt | Minimalist AI Prompt Saver

> An ultra-minimal, 100% client-side web application built with **Astro**, **React**, and **Tailwind CSS**. Designed to instantly save, organize, and copy AI prompts with zero server dependencies, zero tracking, and complete local privacy.

[![Deploy to GitHub Pages](https://github.com/saveprompt/saveprompt.github.io/actions/workflows/deploy.yml/badge.svg)](https://saveprompt.github.io)
[![PWA Ready](https://img.shields.io/badge/PWA-Offline%20Ready-F2C46A?style=flat&logo=pwa&logoColor=4C4541)](https://saveprompt.github.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-AEAC78.svg)](./LICENSE)
[![Support](https://img.shields.io/badge/Support-Ko--fi-F2C46A?logo=kofi&logoColor=4C4541)](https://ko-fi.com/kishara)

---

## ✨ Features

- ⚡ **Instant Capture**: Auto-focused, minimal rapid-entry text area with optional comma-separated tags and 1-click save.
- 📋 **One-Click Copy**: Instant clipboard copying with visual confirmation feedback.
- 🔍 **Real-Time Local Search**: Filter your saved prompts instantly by text query and interactive tag pills.
- 📴 **100% Offline PWA**: Install to your home screen or desktop (`[+]` icon). Fully functional without an internet connection via Service Worker caching.
- 🔒 **Zero Tracking & Full Privacy**: All prompts stay 100% on your device inside `localStorage`. No backend databases, analytics, or third-party cookies.
- 💾 **Local Backup & Restore**: Export your entire prompt vault to a formatted `.json` file at any time and import back with automatic deduplication.
- 🎨 **Minimalist Design System**: Custom palette with Soft Cream (`#FCF0DA`), Muted Sage (`#AEAC78`), Warm Amber (`#F2C46A`), and Deep Charcoal (`#4C4541`) with seamless Light/Dark themes.
- 🌐 **7 Languages (i18n)**: Subpath routing with localized dictionaries for English (`/`), Spanish (`/es/`), Portuguese (`/pt/`), German (`/de/`), French (`/fr/`), Japanese (`/ja/`), and Simplified Chinese (`/zh/`).
- 🚀 **Technical SEO**: Valid `WebApplication`, `HowTo`, and `FAQPage` JSON-LD structured schemas, hreflang tags, Open Graph cards, and automated sitemaps.

---

## 🎨 Design System & Color Palette

| Token | Hex | Role | Light Theme | Dark Theme |
|---|---|---|---|---|
| **Soft Cream** | `#FCF0DA` | Background & Text Inverse | Main canvas background | High-contrast glowing typography |
| **Deep Charcoal** | `#4C4541` | Surfaces & Typography | Body text & primary icons | Dark mode surface background |
| **Warm Amber** | `#F2C46A` | Primary Action CTA | Save & Copy action buttons | Primary action buttons & highlights |
| **Muted Sage** | `#AEAC78` | Borders & Categorization | Tag badges & subtle borders | Tag badges & secondary borders |

---

## 🛠 Tech Stack

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation, Subpath i18n routing, Peak SEO)
- **UI Engine**: [React 19](https://react.dev/) (Islands Architecture via `@astrojs/react`)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **PWA / Service Worker**: [`@vite-pwa/astro`](https://vite-pwa-org.netlify.app/frameworks/astro.html) + `workbox`
- **Data Persistence**: Browser LocalStorage API
- **Deployment**: GitHub Pages via GitHub Actions

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 20 or higher recommended)
- `npm` (version 9 or higher)

### Installation

```bash
# Clone the repository
git clone https://github.com/saveprompt/saveprompt.github.io.git
cd saveprompt.github.io

# Install dependencies
npm install

# Start the local development server
npm run dev
```

Visit `http://localhost:4321` in your browser.

### Building for Production

```bash
npm run build
```

This compiles static HTML, client-side JS bundles, the Service Worker, Web App Manifest, and sitemaps into the `dist/` directory.

### Previewing the Production Build

```bash
npm run preview
```

---

## 🌐 Supported Languages

| Code | Badge | Language | Route |
|---|---|---|---|
| `en` | `US` | English (Default) | `https://saveprompt.github.io/` |
| `es` | `ES` | Español | `https://saveprompt.github.io/es/` |
| `pt` | `BR` | Português | `https://saveprompt.github.io/pt/` |
| `de` | `DE` | Deutsch | `https://saveprompt.github.io/de/` |
| `fr` | `FR` | Français | `https://saveprompt.github.io/fr/` |
| `ja` | `JP` | 日本語 | `https://saveprompt.github.io/ja/` |
| `zh` | `CN` | 简体中文 | `https://saveprompt.github.io/zh/` |

---

## ☕ Support the Developer

If SavePrompt helps your workflow, consider supporting future development:

👉 **[Support on Ko-fi](https://ko-fi.com/kishara)**

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).
