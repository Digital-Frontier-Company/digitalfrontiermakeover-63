# Production deployment runbook

## Authority map

| Concern | Authority |
| --- | --- |
| Application source and review | GitHub `Digital-Frontier-Company/digitalfrontiermakeover-63`, `main` |
| Application build and production hosting | Lovable project `fe32ed26-5837-4605-8222-0d59d2ebc19a` |
| Database and Edge Functions | Supabase project `uplseuoqgcwxpsylrirr` |
| DNS | Hostinger nameservers `ns1.dns-parking.com` and `ns2.dns-parking.com` |
| Primary URL | `https://digitalfrontier.app` |
| Operational documentation | Notion, linked from the release handoff |

Vercel is not an authority for the Digital Frontier marketing site. Do not create a second production deployment there.

### Legacy Lovable project quarantine

The superseded Lovable project `1db82747-ed75-4fb3-8187-a171129da250` (`digitalfrontiermakeover`) shares the production Supabase project but contains obsolete unauthenticated MCP write tools. Keep it unpublished/private and disconnected from production. Never publish or sync that project.

The current Lovable connector lacks `projects:write`. Remove and re-add the connector to grant the current scopes; disconnecting and reconnecting the existing authorization is insufficient. After the read-only MCP deployment, remove and reinstall cached Digital Frontier custom MCP connectors so their tool catalogs cannot retain the retired write schemas.

## Required production secrets

Configure these in the hosting provider named below. Never commit their values.

| Variable | Provider | Purpose |
| --- | --- | --- |
| `VITE_TURNSTILE_SITE_KEY` | Lovable build environment | Browser Turnstile widget |
| `TURNSTILE_SECRET_KEY` | Supabase Edge Function | Server-side Turnstile verification |
| `RATE_LIMIT_HMAC_KEY` | Supabase Edge Function | Dedicated HMAC key for pseudonymous rate-limit subjects |
| `RESEND_API_KEY` | Supabase Edge Function | Contact notification delivery |
| `LEADS_NOTIFICATION_EMAIL` | Supabase Edge Function | Private destination for lead notifications |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase managed secret | Server-only lead insert and rate-limit RPC |

Rotate or disable the legacy public Lindy webhook after the hardened contact flow is deployed.

## Release procedure

1. Quarantine the legacy Lovable project and disable or rotate the public Lindy webhook.
2. Create a pull request from a short-lived `codex/` branch.
3. Require the `CI / validate` and `Database / migration-reset` checks.
4. Review security-sensitive changes in `supabase/`, contact forms, and MCP tools.
5. Merge only after all checks pass and conversations are resolved.
6. Confirm Lovable has synchronized the exact merged GitHub SHA.
7. Apply new Supabase migrations once, then deploy changed Edge Functions.
8. Publish the synchronized Lovable build.
9. Verify the smoke-test matrix below from an uncached network.
10. Record the deployed GitHub SHA, Lovable deployment ID, Supabase function versions, and rollback point in Notion.

## Smoke-test matrix

- `https://digitalfrontier.app` returns 200 and the expected canonical URL.
- `https://www.digitalfrontier.app` resolves, serves a valid certificate, and redirects once to the apex.
- Representative deep routes return route-specific title, canonical URL, H1, and structured data in initial HTML.
- MCP `tools/list` contains only read-only tools, including standard `search` and `fetch`; unknown write tools fail.
- Every contact form requires Turnstile and creates exactly one sanitized lead/email on success.
- Missing or wrong origin, invalid JWT, oversized/unknown fields, failed CAPTCHA, and exceeded limits create no lead and no email.
- Supabase security advisors contain no unaccepted actionable warnings.

## DNS completion

The apex currently resolves to Lovable. The `www` hostname must first be added as a custom domain in Lovable so a certificate can be issued. Then create exactly the DNS record Lovable provides in Hostinger and configure a single permanent redirect from `www` to the apex. Do not point DNS before certificate validation.

## Rollback

- Revert the merge commit in GitHub; do not rewrite `main`.
- Publish the last known-good Lovable commit.
- Edge Functions can be redeployed from the previous GitHub revision.
- Database migrations are forward-only. Write an explicit compensating migration; never reset or repair the production ledger.
- Re-run the smoke-test matrix and document the incident and rollback in Notion.
