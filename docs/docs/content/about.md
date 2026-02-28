---
sidebar_position: 2
title: About & Hero
---

# Editing About & Hero

The file `content/about.md` drives **two** sections on the home page:

- **Hero** — the large intro area at the top (name, role, tagline)
- **About** — the detailed bio section below it

## Frontmatter fields

```yaml
---
name: Your Name
role: Your Job Title
tagline: A one-liner about what you do.
headshot: https://example.com/photo.jpg   # optional
---
```

| Field | Required | Description |
|---|---|---|
| `name` | Yes | Displayed as the large heading in the Hero section |
| `role` | Yes | Shown in the pill badge above your name |
| `tagline` | Yes | The subtitle text beneath your name |
| `headshot` | No | URL to a profile photo. Displayed in the About section. If omitted, the bio text spans the full width |

## Body content

Everything below the frontmatter `---` fence is rendered as Markdown in the **About** section. Write your bio, list your skills, describe your approach — whatever you like.

## Full example

```markdown
---
name: Jane Doe
role: Frontend Engineer
tagline: I build fast, accessible web experiences with modern tooling.
headshot: https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces
---

I'm a frontend engineer with 6 years of experience building
production apps in React and TypeScript.

## What I Do

- **Web Applications** — SPAs, SSR, and hybrid rendering
- **Design Systems** — Component libraries with Storybook
- **Performance** — Core Web Vitals, bundle optimization

## Tools

React, TypeScript, Next.js, Tailwind CSS, Figma, and a
lot of coffee.
```

## What it looks like

- **Hero section**: Shows the role badge, your name as a large heading, tagline as a subtitle, and two CTA buttons (View Work / Get in Touch).
- **About section**: Shows your headshot (if provided) alongside your rendered Markdown bio in a two-column layout on desktop.
