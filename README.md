# Digital Frontier

Digital Frontier's production marketing platform for AI visibility, answer-engine optimization, generative-engine optimization, and digital marketing services.

- Production: https://digitalfrontier.app
- Source of truth: https://github.com/Digital-Frontier-Company/digitalfrontiermakeover-63
- Lovable project: https://lovable.dev/projects/fe32ed26-5837-4605-8222-0d59d2ebc19a
- Operations: [docs/deployment.md](docs/deployment.md)

## Architecture

| Layer | Technology |
| --- | --- |
| Web application | React 18, TypeScript, Vite, React Router |
| UI | Tailwind CSS, shadcn/ui, Radix UI |
| Data and auth | Supabase Postgres, RLS, Auth |
| Server functions | Supabase Edge Functions |
| Production hosting | Lovable |
| DNS | Hostinger |
| CI and review | GitHub Actions |

GitHub `main` is authoritative. Lovable receives the merged GitHub revision and publishes that exact revision. Vercel is not a production target for this repository.

## Local development

Requirements:

- Node.js 22.22.x
- npm 11.13.x
- Docker only when running the local Supabase stack

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Fill the public browser values in `.env.local`. Edge Function secrets belong in Supabase and must never be stored in the repository.

## Validation

```sh
npm run check
```

This runs lint, TypeScript checks, tests, and the production Vite build.

For a clean database replay:

```sh
npx supabase@2.114.0 db start
npx supabase@2.114.0 test db supabase/tests/database
```

The GitHub database workflow performs this replay on every pull request and every push to `main`.

## Security model

- The public MCP endpoint is strictly read-only and exposes standard `search` and `fetch` tools plus documented read-only helpers.
- Contact submissions go through `send-contact-email`; browsers never call a public third-party webhook directly.
- Contact requests require JWT verification, strict origin and schema validation, Cloudflare Turnstile, and atomic database rate limits.
- Service-role credentials are server-only. Database authorization is enforced with grants and RLS.
- Database changes are forward-only migrations and must pass a clean reset before merge.

See [SECURITY.md](SECURITY.md) for private vulnerability reporting and the maintained trust boundaries.

## Release

All production changes use a pull request with green application and database checks. After merge, confirm Lovable synchronized the exact SHA, apply pending Supabase migrations and Edge Functions, publish, and execute the smoke-test matrix in [docs/deployment.md](docs/deployment.md).

Do not edit production schema directly or deploy an unreviewed Lovable revision.
