---
sidebar_position: 2
title: GitHub Pages (Docs)
---

# Deploy Docs to GitHub Pages

This documentation site (Docusaurus) is configured to publish to **GitHub Pages** automatically via GitHub Actions. Every push to `main` rebuilds and deploys the docs.

## How it works

1. A GitHub Actions workflow at `.github/workflows/deploy-docs.yml` triggers on pushes to `main`
2. It installs dependencies, builds the Docusaurus site, and pushes the output to the `gh-pages` branch
3. GitHub Pages serves the site from that branch

## First-time setup

### 1. Enable GitHub Pages in your repo settings

1. Go to your repo on GitHub → **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Set the branch to `gh-pages` and folder to `/ (root)`
4. Click **Save**

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
