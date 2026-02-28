# Greenlight

A modern, responsive portfolio built with React, TypeScript, Tailwind CSS, and shadcn/ui. All content is driven by Markdown files — no CMS required.

## Quick start

```bash
git clone https://github.com/adrock-miles/greenlight.git
cd greenlight
npm install
npm run dev
```

Open **http://localhost:5173** to see the site.

## Documentation

Full setup guides, content editing instructions, and deployment walkthroughs are available on the docs site:

**[adrock-miles.github.io/greenlight](https://adrock-miles.github.io/greenlight/)**

The docs cover:

- **Getting Started** — project structure and local development
- **Content Guide** — how to edit your about page, projects, and contact info using Markdown
- **Docker Setup** — installing Docker on macOS and running the site in a container
- **GitHub Pages** — how the docs auto-deploy via GitHub Actions

## Running with Docker

```bash
docker build -t greenlight .
docker run -p 3000:3000 greenlight
```

Open **http://localhost:3000**.

## Project structure

```
greenlight/
├── content/          ← portfolio content (Markdown + YAML frontmatter)
├── src/              ← React components, pages, styles
├── docs/             ← Docusaurus documentation site
├── Dockerfile        ← production container image
└── package.json
```

## License

MIT
