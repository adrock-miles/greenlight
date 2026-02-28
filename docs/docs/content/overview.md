---
sidebar_position: 1
title: Content Overview
---

# Content Overview

All portfolio content is stored as **Markdown files** in the `content/` directory at the project root. There is no database and no CMS — you edit plain text files, commit, and deploy.

## How it works

Each Markdown file has two parts:

1. **Frontmatter** — a YAML block between `---` fences at the top of the file. This holds structured data like your name, project title, tags, etc.
2. **Body** — standard Markdown below the frontmatter. This is rendered as rich HTML on the page.

```markdown
---
title: My Project
description: A short summary
tags:
  - React
  - TypeScript
---

## The Challenge

Body content goes here. Full Markdown supported.
```

## Content files at a glance

| File | Used by | What it controls |
|---|---|---|
| `content/about.md` | Hero section + About section | Name, role, tagline, headshot, bio |
| `content/contact.md` | Contact page | Email, location, availability, social links |
| `content/projects/*.md` | Projects page + Featured Work | Individual project case studies |

## Supported Markdown features

The site uses [GitHub Flavored Markdown](https://github.github.com/gfm/) via `remark-gfm`, so you can use:

- **Bold**, *italic*, ~~strikethrough~~
- Headings (`## H2`, `### H3`, etc.)
- Ordered and unordered lists
- [Links](https://example.com) and images
- Code blocks with syntax highlighting
- Tables
- Task lists

## Tips

- **Images**: Use full URLs for images (Unsplash, Cloudinary, etc.) or place files in `public/` and reference them with an absolute path like `/my-image.jpg`.
- **Preview changes**: Run `npm run dev` and edits hot-reload instantly — no restart needed.
- **File names matter**: Project file names become URL slugs. `content/projects/my-cool-app.md` renders at `/projects/my-cool-app`.
