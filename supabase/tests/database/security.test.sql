BEGIN;

SELECT plan(13);

SELECT ok(
  to_regprocedure('private.has_role(uuid, public.app_role)') IS NOT NULL,
  'private role helper exists'
);

SELECT ok(
  to_regprocedure('public.has_role(uuid, public.app_role)') IS NULL,
  'legacy public role helper is absent'
);

SELECT ok(
  to_regprocedure('public.consume_contact_rate_limit(text, integer, integer)') IS NOT NULL,
  'atomic contact rate limiter exists'
);

SELECT ok(
  NOT has_function_privilege(
    'anon',
    'public.consume_contact_rate_limit(text, integer, integer)',
    'EXECUTE'
  ),
  'anonymous callers cannot invoke the rate limiter'
);

SELECT ok(
  NOT has_function_privilege(
    'authenticated',
    'public.consume_contact_rate_limit(text, integer, integer)',
    'EXECUTE'
  ),
  'authenticated callers cannot invoke the rate limiter'
);

SELECT ok(
  has_function_privilege(
    'service_role',
    'public.consume_contact_rate_limit(text, integer, integer)',
    'EXECUTE'
  ),
  'service role can invoke the rate limiter'
);

SELECT ok(
  (SELECT relrowsecurity FROM pg_class WHERE oid = 'public.leads'::regclass),
  'leads has row level security enabled'
);

SELECT ok(
  (SELECT relrowsecurity FROM pg_class WHERE oid = 'public.user_roles'::regclass),
  'user_roles has row level security enabled'
);

SELECT ok(
  (SELECT relrowsecurity FROM pg_class WHERE oid = 'public.contact_rate_limits'::regclass),
  'contact rate limits has row level security enabled'
);

SELECT ok(
  NOT has_table_privilege('anon', 'public.leads', 'SELECT'),
  'anonymous callers cannot select leads'
);

SELECT ok(
  NOT has_table_privilege('anon', 'public.user_roles', 'SELECT'),
  'anonymous callers cannot select user roles'
);

SELECT ok(
  NOT has_table_privilege('service_role', 'public.playbooks', 'INSERT, UPDATE, DELETE'),
  'service role cannot mutate playbooks'
);

SELECT ok(
  NOT has_table_privilege(
    'service_role', 'public.playbook_categories', 'INSERT, UPDATE, DELETE'
  ),
  'service role cannot mutate playbook categories'
);

SELECT * FROM finish();

ROLLBACK;
