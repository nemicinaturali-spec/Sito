# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

Created a React/Vite website artifact for the band Nemici Naturali at `artifacts/nemici-naturali`, served from the root preview path `/`. The site is a presentation-focused band website with homepage, photos, and upcoming shows pages, plus outbound links for Spotify, Apple Music, YouTube Music, Facebook, and Instagram.
All visible site copy is localized in Italian.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)
- **Band website**: React + Vite + Tailwind CSS (`artifacts/nemici-naturali`)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/nemici-naturali run dev` — run Nemici Naturali website locally through its workflow configuration

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
