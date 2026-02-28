---
slug: /
sidebar_position: 1
title: Getting Started
---

# Getting Started

Greenlight is a modern, responsive portfolio built with **React**, **Tailwind CSS**, and **shadcn/ui**. All of your content lives in plain Markdown files — no CMS, no database, no fuss.

## Prerequisites

- [Node.js](https://nodejs.org/) 20 or later
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (optional — for containerised builds)

## Quick start (local dev)

```bash
# 1. Clone the repo
git clone https://github.com/adrock-miles/greenlight.git
cd greenlight

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Vite will open the site at **http://localhost:5173**. Edits to any file — including the Markdown in `content/` — hot-reload instantly.

## Project structure

```text
greenlight/
├── content/            ← your portfolio content (Markdown)
│   ├── about.md
│   ├── contact.md
│   └── projects/
│       ├── project-1.md
│       └── project-2.md
├── src/
│   ├── components/     ← React components (shadcn/ui)
│   ├── pages/          ← route-level page components
│   ├── styles/         ← design tokens & global CSS
│   └── lib/            ← content loader utilities
├── docs/               ← this documentation site (Docusaurus)
├── Dockerfile          ← production container image
└── package.json
```

## Next steps

| Guide | What you'll learn |
|---|---|
| [Content Overview](./content/overview) | How the Markdown content system works |
| [Edit About & Hero](./content/about) | Update your name, role, tagline, and bio |
| [Add Projects](./content/projects) | Create and manage project case studies |
| [Edit Contact Info](./content/contact) | Set up email, socials, and availability |
| [Docker Setup](./deployment/docker) | Run the site in Docker (macOS walkthrough) |
| [GitHub Pages](./deployment/github-pages) | Deploy these docs to GitHub Pages |
