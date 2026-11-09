# muhshin.dev — Portfolio

A single-page developer portfolio built with **Next.js**, **TypeScript** and **Tailwind CSS v4**. Every section is an anchor target (`#home`, `#about`, `#skills`, `#projects`, `#contact`), so the whole site scrolls as one page with a fixed navbar on top.

## Features

- **Single-page layout** — Hero, About, Skills (+ Tools & Workflow), Projects and Contact sections.
- **Light / dark theme** — persisted theme toggle powered by `next-themes`.
- **Motion** — scroll-reveal and hover animations with `motion` (Framer Motion).
- **Responsive grid** — projects render in a 2-column grid, and an odd last card spans the full width as a horizontal feature card.
- **Data-driven content** — projects and skills live in plain data files, so updating the site needs no component edits.
- **shadcn/ui components** — a large set of ready-made components in `src/components/ui`.

## Tech stack

| Layer     | Tools                                                  |
| --------- | ------------------------------------------------------ |
| Framework | Next.js 16 (App Router), React 19                      |
| Language  | TypeScript (strict)                                    |
| Styling   | Tailwind CSS v4, custom `card-surface` component layer |
| Animation | `motion`                                               |
| UI kit    | shadcn/ui (Base UI), lucide-react, react-icons         |
| Theme     | `@teispace/next-themes`                                |

## Getting started

Requires **Node.js 20.9+** (as required by Next.js 16).

```bash
# 1. install dependencies
npm install

# 2. start the dev server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command             | Description                       |
| ------------------- | --------------------------------- |
| `npm run dev`       | Start the development server      |
| `npm run build`     | Create a production build         |
| `npm run start`     | Serve the production build        |
| `npm run lint`      | Run ESLint                        |
| `npm run typecheck` | Type-check without emitting files |
| `npm run format`    | Format the codebase with Prettier |

## Project structure

```
src/
├── app/
│   ├── globals.css        # theme tokens, .card-surface, utilities
│   ├── layout.tsx         # <html>, fonts, theme provider
│   └── page.tsx           # assembles all sections
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── sections/          # Hero, About, Skills, Tools, Projects, Contact
│   ├── animations/        # RevealText
│   ├── ui/                # shadcn/ui components
│   └── theme-provider.tsx
├── data/
│   ├── projects.ts        # project entries (title, image, tech, links)
│   └── skills.ts          # skill groups with icons and colours
├── hooks/                 # use-mobile, use-highlighted-code
└── lib/                   # utils, syntax highlighter
public/image/              # project screenshots and profile photo
```

The `@/*` alias maps to `./src/*` (see `tsconfig.json`), so imports look like:

```tsx
import Projects from "@/components/sections/Projects"
import { projects } from "@/data/projects"
```

## Customising the content

- **Projects** — edit `src/data/projects.ts`. Each entry has `title`, `description`, `image`, `category`, `technologies`, `github` and `live`. Screenshots go in `public/image/`.
- **Skills** — edit `src/data/skills.ts`. Icons come from `react-icons`, colours from Tailwind text utilities.
- **Colours & theme** — palette variables and the shared `.card-surface` style live in `src/app/globals.css`.
- **Contact links** — email, GitHub and LinkedIn URLs are defined in `src/components/sections/Contact.tsx` and `src/components/layout/Footer.tsx`.

## Adding shadcn/ui components

```bash
npx shadcn@latest add button
```

Components are written to `src/components/ui` and imported like this:

```tsx
import { Button } from "@/components/ui/button"
```
