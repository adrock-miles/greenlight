---
sidebar_position: 3
title: Projects
---

# Managing Projects

Each project is a single Markdown file inside `content/projects/`. To add a new project, create a new `.md` file in that directory. To remove one, delete the file.

## Frontmatter fields

```yaml
---
title: My Project
description: A short summary shown on the card.
image: https://example.com/screenshot.jpg    # optional
tags:
  - React
  - TypeScript
date: "2025-06-15"
featured: true       # optional — show on home page
order: 1             # optional — sort order (lower = first)
---
```

| Field | Required | Description |
|---|---|---|
| `title` | Yes | Project name, shown on the card and detail page |
| `description` | Yes | Short summary (1–2 sentences) for the card view |
| `image` | No | Cover image URL. Displayed on both the card and detail page |
| `tags` | Yes | Array of technology/skill tags. Rendered as badges |
| `date` | Yes | Project date in `YYYY-MM-DD` format (used for reference) |
| `featured` | No | Set to `true` to display the project in the "Featured Work" section on the home page |
| `order` | No | Sort position. Lower numbers appear first. Defaults to `99` |

## Body content

The Markdown body becomes the **project detail page** — your full case study. Structure it however you like. A common pattern:

```markdown
## The Challenge

What problem were you solving?

## My Role

What did you do?

## Process

1. **Research** — ...
2. **Design** — ...
3. **Build** — ...

## Results

- **Metric** — improvement
- **Metric** — improvement
```

## Adding a new project

1. Create a new file in `content/projects/`, e.g. `content/projects/my-new-project.md`
2. Add frontmatter with at least `title`, `description`, `tags`, and `date`
3. Write the body content
4. The project will appear at `/projects/my-new-project` (the filename minus `.md` becomes the URL slug)

## Making a project featured

Set `featured: true` in the frontmatter. Up to 3 featured projects are shown on the home page in the "Featured Work" section. Use the `order` field to control which ones appear first.

## Full example

```markdown
---
title: Waypoint Travel App
description: A mobile-first travel planning app for adventure travelers.
image: https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=400&fit=crop
tags:
  - Mobile Design
  - UX Research
  - Prototyping
  - iOS
date: "2025-03-10"
featured: true
order: 2
---

## The Challenge

Existing travel apps focus on mainstream tourism. Waypoint needed
to serve adventure travelers who prefer unique, local experiences.

## Results

- **4.8/5** average usability score
- **92% task completion** rate for core booking flow
```
