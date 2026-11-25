# Svelte Portfolio

My personal portfolio, live at **[alfredm.me](https://alfredm.me)**.

It's built so the content lives apart from the layout: projects, skills, experience and the home page text are plain TypeScript files in `src/lib/data/`, and the pages read from them. If you like the site and want to make your own from it, those files are the place to start.

## Stack

- **SvelteKit** (Svelte 5) and **TypeScript**
- **Tailwind CSS 4** with [shadcn-svelte](https://www.shadcn-svelte.com) components (bits-ui)
- **Contact form:** sveltekit-superforms with Zod validation, sent through [Resend](https://resend.com)
- **Hosting:** Cloudflare Workers (`@sveltejs/adapter-cloudflare`)
- **Tests:** Playwright end-to-end tests

## Running it locally

```sh
pnpm install
cp .env.example .env   # then fill in the values below
pnpm dev
```

The contact form needs two environment variables:

| Variable         | What it's for                           |
| ---------------- | --------------------------------------- |
| `RESEND_API_KEY` | Resend API key used to send the message |
| `CONTACT_TO`     | Where contact messages are delivered    |

Other scripts:

| Command                       | What it does                                   |
| ----------------------------- | ---------------------------------------------- |
| `pnpm check`                  | Type-checks the project (svelte-check)         |
| `pnpm lint`                   | Prettier and ESLint                            |
| `pnpm test:e2e`               | Builds, previews and runs the Playwright tests |
| `pnpm build` / `pnpm preview` | Production build, and a local preview of it    |

## Making it yours

- **Text and links:** `src/lib/data/base.ts` (name, title, About Me) and `src/lib/data/home.ts` (hero and social links)
- **Projects, skills, experience:** `src/lib/data/projects.ts`, `skills.ts` and `experience.ts`
- **Logos:** add the file to `static/logos/` and register it in `src/lib/data/assets.ts`

## Deployment

Cloudflare Workers Builds deploys the `production` branch; other branches get preview deployments. Changes go feature branch → `dev` → `production`, each through a pull request.

## Credits

This site combines design ideas from two open-source portfolio templates. Thank you to both authors:

- **[slick-portfolio-svelte](https://github.com/RiadhAdrani/slick-portfolio-svelte)** by Riadh Adrani: the data-driven structure, where each page reads its content from `src/lib/data/`, and the `@riadh-adrani/utils` helpers.
- **[portfolio-template](https://github.com/SikandarJODD/portfolio-template)** by Sikandar S. Bhide (MIT License, © 2024 Sikandar.S.Bhide): the minimalist look built on shadcn-svelte components, itself inspired by Magic UI.

Logos are from [Devicon](https://devicon.dev) (MIT), apart from Zod's, which comes from the [Zod repository](https://github.com/colinhacks/zod) (MIT), and Neon's, which comes from Neon's [brand assets](https://neon.com/brand).
