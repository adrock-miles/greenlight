---
sidebar_position: 4
title: Contact Info
---

# Editing Contact Info

The file `content/contact.md` powers the **Contact** page.

## Frontmatter fields

```yaml
---
email: you@example.com
location: San Francisco, CA        # optional
availability: Open to new work     # optional
social:                             # optional
  - label: GitHub
    url: https://github.com/you
  - label: LinkedIn
    url: https://linkedin.com/in/you
---
```

| Field | Required | Description |
|---|---|---|
| `email` | Yes | Your contact email. Rendered as a `mailto:` link |
| `location` | No | Where you're based. Shown with a map pin icon |
| `availability` | No | Current status (e.g. "Open to freelance"). Shown in an accent-coloured banner |
| `social` | No | Array of social links. Each needs a `label` and `url`. Rendered as buttons with external-link icons |

## Body content

The Markdown body is rendered alongside your contact details. Use it for a short personal message, office hours, or anything else.

## Full example

```markdown
---
email: hello@janedoe.dev
location: Portland, OR
availability: Available for freelance starting March 2026
social:
  - label: GitHub
    url: https://github.com/janedoe
  - label: LinkedIn
    url: https://linkedin.com/in/janedoe
  - label: Dribbble
    url: https://dribbble.com/janedoe
---

I'd love to hear about your project! Whether you need a
full build or just a second pair of eyes on a design, drop
me a line.

I typically respond within 24 hours.
```
