---
sidebar_position: 1
title: Docker Setup
---

# Running with Docker

This guide walks through getting Docker on **macOS** and running the portfolio in a container. If you already have Docker installed, skip to [Build and run](#build-and-run).

## Install Docker on macOS

### Option A — Docker Desktop (recommended)

1. Go to [docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop/)
2. Click **Download for Mac** — choose **Apple Silicon** (M1/M2/M3/M4) or **Intel** depending on your Mac
3. Open the downloaded `.dmg` and drag **Docker** to your Applications folder
4. Launch **Docker** from Applications — it will ask for your password to install helper components
5. Wait for the Docker icon in your menu bar to show "Docker Desktop is running"

Verify it works:

```bash
docker --version
# Docker version 27.x.x, build ...
```

### Option B — Homebrew (one command)

If you use [Homebrew](https://brew.sh/):

```bash
brew install --cask docker
```

Then open **Docker** from Applications and wait for it to finish starting.

:::tip
Docker Desktop includes both `docker` and `docker compose`. No extra installs needed.
:::

## Build and run

From the project root:

```bash
# Build the image
docker build -t greenlight .

# Run the container
docker run -p 3000:3000 greenlight
```

Open **http://localhost:3000** in your browser. That's it.

## What happens under the hood

The included `Dockerfile` is a two-stage build:

```dockerfile
# Stage 1 — build the app
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2 — production server (small image)
FROM node:22-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY server.js .
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD ["node", "server.js"]
```

- **Stage 1** installs all dependencies, compiles TypeScript, and bundles with Vite
- **Stage 2** copies only production dependencies and the built `dist/` folder — keeping the final image small

## Useful commands

| Command | What it does |
|---|---|
| `docker build -t greenlight .` | Build the image |
| `docker run -p 3000:3000 greenlight` | Start a container on port 3000 |
| `docker run -d -p 3000:3000 greenlight` | Start in the background (detached) |
| `docker ps` | List running containers |
| `docker stop <container-id>` | Stop a container |
| `docker compose up` | Build + run (if you add a `compose.yaml`) |

## Optional: add a compose file

For convenience you can create a `compose.yaml` in the project root:

```yaml
services:
  web:
    build: .
    ports:
      - "3000:3000"
```

Then just run:

```bash
docker compose up
```

## Troubleshooting

### "Cannot connect to the Docker daemon"

Docker Desktop isn't running. Open it from Applications and wait for the menu bar icon to show a steady state.

### Port 3000 already in use

Either stop whatever's using the port, or map to a different one:

```bash
docker run -p 8080:3000 greenlight
```

Then visit **http://localhost:8080** instead.
