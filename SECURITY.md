# Security Policy

## Supported version

The production deployment and the `main` branch are the only supported version.

## Report a vulnerability

Do not open a public issue or include secrets, personal data, exploit payloads, or customer records in a pull request.

Report suspected vulnerabilities privately to **david@digitalfrontier.app** with:

- the affected URL, component, or commit;
- a minimal reproduction that avoids modifying production data;
- the security impact and required preconditions; and
- any recommended remediation.

You should receive an acknowledgement within two business days.

## Security boundaries

- The public MCP endpoint is read-only. Any future write capability must use a separate authenticated and server-authorized endpoint.
- Contact submissions must pass JWT verification, strict origin/schema checks, Cloudflare Turnstile, and database-backed rate limits.
- Supabase service-role credentials are server-only and must never be included in browser code, tool schemas, logs, or repository files.
- Database changes are migration-only and must pass the clean-reset workflow before merge.
