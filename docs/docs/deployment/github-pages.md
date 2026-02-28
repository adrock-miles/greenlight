---
sidebar_position: 2
title: GitHub Pages (Docs)
---

# Deploy Docs to GitHub Pages

This documentation site (Docusaurus) is configured to publish to **GitHub Pages** automatically via GitHub Actions. Every push to `main` rebuilds and deploys the docs.

## How it works

1. A GitHub Actions workflow at `.github/workflows/deploy-docs.yml` triggers on pushes to `main`
2. It installs dependencies, builds the Docusaurus site, and uploads it as a GitHub Pages artifact
3. GitHub Pages deploys the artifact automatically — no extra branch needed

## First-time setup

### 1. Enable GitHub Pages in your repo settings

1. Go to your repo on GitHub → **Settings** → **Pages**
2. Under **Build and deployment → Source**, select **GitHub Actions**

### 2. Push to main

The workflow runs automatically. After the first successful run your docs will be live at:

```
https://<your-username>.github.io/greenlight/
```

### 3. Verify

Wait a minute or two for the action to complete, then visit the URL above. You should see this documentation site.

## Updating the docs

The docs live in `docs/docs/`. Edit any Markdown file, commit, and push to `main`. The workflow rebuilds and deploys automatically.

To preview locally before pushing:

```bash
cd docs
npm install
npm start
```

This opens the Docusaurus dev server at **http://localhost:3000/greenlight/**.

## Configuration

The key settings are in `docs/docusaurus.config.ts`:

```ts
url: 'https://adrock-miles.github.io',
baseUrl: '/greenlight/',
organizationName: 'adrock-miles',
projectName: 'greenlight',
```

If you fork this repo, update these four values to match your own GitHub username and repo name.
