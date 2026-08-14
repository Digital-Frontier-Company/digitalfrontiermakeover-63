# Security validation: MCP, public leads, and database helpers

Validated 2026-08-14 against merged GitHub `main` at `d50163ad1cb5eef7f93f615a0458953659d7b8f7`, GitHub Actions, and the production Supabase project. The frontend deployment remains a separate release gate because the installed Lovable connection cannot publish without `projects:write`.

## Conclusion

| Candidate | Repository result | Production result |
| --- | --- | --- |
| SEC-VAL-01 — unauthenticated MCP playbook writes | **Pass.** No write tool, database client, service-role secret, or alternate playbook mutation path exists; database grants also deny service-role writes. | **Pass.** MCP v14 exposes exactly five read-only tools. Live `search`/`fetch` passed, and `create_playbook` returns “Tool not found.” |
| SEC-VAL-02 — public lead abuse | **Pass with bounded residual abuse.** Requests fail closed on missing secrets, strict request checks, required Turnstile, and three atomic server-side limits before either side effect. | **Fail-closed, operationally incomplete.** v26 requires JWT and returns 401 without it. An authenticated invalid-origin probe returns 500 before the handler, proving at least one required production variable is absent. The hardened frontend is not published. |
| SEC-VAL-03 — helper ACLs and migration safety | **Pass.** Migration ordering, helper search paths/ACLs, the private role helper, and pgTAP coverage are committed. | **Pass.** Clean migration replay and 13 pgTAP assertions passed in GitHub; the migration is applied and live catalog checks confirm the expected helpers. |

No repository-reachable path from the three reviewed attacker sources to their protected mutation sinks survived tracing and tests. MCP and database closure are live-proven. Lead intake remains intentionally unavailable until its production variables and frontend deployment are completed.

## Validation rubric

Each candidate was evaluated against five criteria:

1. Identify an attacker-controlled source and the trust boundary it crosses.
2. Locate the closest effective control, distinguishing authorization from advisory metadata or browser-only CORS.
3. Trace the controlled value or request to the sensitive sink and check for alternate paths.
4. Exercise the narrowest available local proof without using production services or secrets.
5. Record counterevidence, assumptions, and deployment-dependent gaps; do not substitute configuration for runtime evidence.

## SEC-VAL-01 — unauthenticated MCP playbook writes

**Disposition:** repository and current production closure validated. **Confidence:** high.

- **Attacker source and boundary:** an unauthenticated JSON-RPC caller can reach `/functions/v1/mcp`; the manifest intentionally retains `auth.type = "none"` (`.lovable/mcp/manifest.json:4-7`) and the Edge Function retains `verify_jwt = false` (`supabase/config.toml:6-8`). These settings are acceptable only while the server remains strictly read-only.
- **Data flow:** public MCP request -> MCP tool router/explicit tool allowlist -> static marketing-page registry -> JSON response. There is no database branch in the handler.
- **Closest controls:** the manifest exposes exactly five tools, all annotated read-only and non-destructive (`.lovable/mcp/manifest.json:14-138`); the runtime registers the same five tools (`supabase/functions/mcp/index.ts:171-177`); and the handler imports no Supabase client or service-role secret. As defense in depth, `20260814155034_deny_service_role_playbook_writes.sql:1-7` revokes `INSERT`, `UPDATE`, `DELETE`, and related write privileges on both playbook tables from `service_role`.
- **Protected sinks:** mutation of `public.playbooks` or `public.playbook_categories`, previously reachable through `create_playbook`, `update_playbook`, and `delete_playbook` using `SUPABASE_SERVICE_ROLE_KEY`.
- **Alternate-path check:** a repository search found no application/Edge Function playbook mutation call or privileged RPC; the only remaining playbook inserts/updates are historical migration seed statements.
- **Focused proof:** `src/lib/security-contracts.test.ts:7-91` asserts the exact manifest tool list and annotations, and rejects the three write-tool names, `SUPABASE_SERVICE_ROLE_KEY`, and `createClient(` in the MCP source. The focused Vitest run passed.
- **Runtime proof and residual risk:** live MCP v14 returned only the five reviewed tools; `search` and `fetch` returned correct stable IDs/URLs; and a former write-tool name returned “Tool not found.” The superseded Lovable project still shares this backend and must be quarantined so it cannot redeploy obsolete function source.

## SEC-VAL-02 — public lead abuse

**Disposition:** repository controls pass; production is safely fail-closed but not operationally complete. **Confidence:** high for control ordering and gateway enforcement, medium for end-to-end behavior until secrets and frontend deployment are completed.

- **Attacker source and boundary:** an Internet client can POST to `send-contact-email`. `verify_jwt = true` is configured at `supabase/config.toml:3-4`, but the browser uses the public Supabase anon credential; this gateway check must not be treated as user authentication or the primary anti-abuse control.
- **Data flow:** HTTP request -> origin/method/content checks -> strict schema -> required HMAC-backed IP limit -> Turnstile verification -> HMAC-backed email and global limits -> `leads` insert -> Resend notification.
- **Closest controls before either sink:** required secrets fail module startup (`supabase/functions/send-contact-email/index.ts:6-20`); the handler rejects disallowed origins and methods (`:217-245`), wrong content type/oversized bodies (`:247-265`), unknown fields and invalid values (`:267-317`), then consumes an atomic IP limit (`:318-328`), requires a Turnstile result with the expected action and hostname (`:183-215`, `:330-336`), and consumes email/global limits (`:338-349`). A rate-limit dependency error fails closed with 503 (`:172-180`, `:432-438`).
- **Protected sinks:** the service-role `leads` insert at `supabase/functions/send-contact-email/index.ts:359-371` and Resend delivery at `:399-405`. Both occur only after all abuse controls. The honeypot branch at `:279-282` returns success without reaching either sink.
- **Database control:** `consume_contact_rate_limit` performs an atomic upsert, validates limits, fixes its search path, and grants execution only to `service_role` (`supabase/migrations/20260814152459_create_atomic_contact_rate_limiter.sql:15-67`). The backing table has RLS, revoked public/anon/authenticated privileges, and an explicit deny policy (`:8-10`; `20260814153427_deny_direct_contact_rate_limit_access.sql:1-6`).
- **Client wiring:** the shared Zod schema requires `turnstile_token` and rejects extra fields (`src/lib/contact-leads.ts:22-36`); submission uses the Supabase function client (`:58-62`). The Turnstile widget fixes the action to `contact_submission`, clears expired/error tokens, and fails closed when the site key or script is unavailable (`src/components/TurnstileWidget.tsx:3-14`, `:101-157`). Contract tests cover all six public forms (`src/lib/lead-security-contracts.test.ts:7-45`).
- **Focused proof:** the targeted Vitest run passed all 29 tests across `security-contracts`, `lead-security-contracts`, and `contact-leads`; `npm run typecheck` also passed.
- **Bounded residual abuse:** CORS/origin checking constrains browsers but is forgeable by a non-browser client. A determined caller who obtains valid Turnstile tokens can still submit within the configured limits (5/IP/10 minutes, 3/email/hour, 100 global/hour). IP limiting additionally depends on the Edge proxy replacing or sanitizing forwarding headers; that header provenance was not proven locally. The Turnstile network call and single-use-token behavior were not exercised.

## SEC-VAL-03 — database helper ACLs and migration safety

**Disposition:** migration ordering, clean replay, pgTAP, applied ledger, and live helper state pass. **Confidence:** high.

- **Attacker sources and boundaries:** anonymous/authenticated PostgREST/RPC calls, attempts to tamper with the rate-limit table, and untrusted objects resolved through a privileged function's search path. A separate reliability source is a clean database applying migrations in timestamp order.
- **Protected sinks:** role escalation through `user_roles`, lead/playbook mutation, direct rate-limit manipulation, and privileged maintenance functions that can alter RLS or broadcast database changes.
- **Reproducibility control:** `app_role`, `user_roles`, and the original role helper are created in `20260511230648_create_roles_and_admin_policies.sql:1-26`, before later migrations reference them. The historical hardening migration now guards maintenance-function ACL changes when those production-only objects are absent (`20260814152241_harden_public_api_and_rls.sql:1-20`). `20260814185510_restore_platform_maintenance_functions.sql:1-78` then defines the two maintenance helpers for clean builds and removes the obsolete public `has_role` wrapper.
- **Helper controls:** `private.has_role` is placed in a locked schema, uses an explicit `pg_catalog` search path, and grants execution only where RLS evaluation needs it (`20260814153403_move_rls_role_check_to_private_schema.sql:1-26`). All reviewed privileged public helpers have fixed search paths and explicit revokes/grants: the contact limiter (`20260814152459...:15-67`), owner-admin trigger (`20260814152241...:19-20`, after its definition), and maintenance functions (`20260814185510...:6-74`). The final migration drops `public.has_role` (`20260814185510...:76-78`).
- **Table controls:** RLS is enabled on `leads`, `user_roles`, and `contact_rate_limits`; anonymous reads of the two sensitive business tables are revoked; direct rate-limit access is denied; and service-role playbook writes are revoked.
- **Runtime proof:** `supabase/tests/database/security.test.sql:1-86` contains 13 pgTAP assertions for helper presence/absence, function ACLs, RLS, anonymous table privileges, and denial of service-role playbook mutation. Both pull-request and merged-main Database workflows replayed all migrations and passed all assertions. The production ledger includes `20260814185510_restore_platform_maintenance_functions`.
- **Live catalog proof:** `public.has_role(uuid, app_role)` is absent; `private.has_role(uuid, app_role)`, `public.broadcast_content_changes()`, and `public.rls_auto_enable()` are present.
- **Residual risk:** future direct dashboard edits or a deployment from the legacy Lovable project could create source drift. GitHub `main`, required migration checks, and legacy-project quarantine are the controls.

## Proof executed

```text
npm ci
Result: PASS — 473 locked packages, 0 vulnerabilities

npm run check
Result: PASS — zero-warning lint, typecheck, 6 files / 41 tests, production build

GitHub Database / migration-reset
Result: PASS — clean migration replay and 13 pgTAP assertions on PR and merged main

Production Supabase probes
Result: PASS for MCP and helper state; contact v26 correctly fail-closed pending configuration
```

Production mutations were limited to the reviewed migration and Edge Function deployments. No MCP write was attempted and no lead/email side effect was triggered.

## Remaining production closure checks

1. Re-authorize Lovable with `projects:write`, quarantine the legacy project, and publish authoritative commit `d50163ad1cb5eef7f93f615a0458953659d7b8f7`.
2. Configure `TURNSTILE_SECRET_KEY`, dedicated `RATE_LIMIT_HMAC_KEY`, `RESEND_API_KEY`, `LEADS_NOTIFICATION_EMAIL`, and `VITE_TURNSTILE_SITE_KEY`.
3. Run the full negative contact matrix plus one designated valid end-to-end lead/email test.
4. Refresh the installed app MCP catalog and verify the three obsolete write schemas disappear.
5. Capture the Lovable deployment ID, final contact evidence, and rollback point in the Notion production runbook.
