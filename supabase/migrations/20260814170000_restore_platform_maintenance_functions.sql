-- Reconcile privileged platform-maintenance objects that existed in production
-- before the migration ledger was captured. Keeping their definitions here
-- makes a clean local reset converge on the production schema without repairing
-- or rewriting the remote ledger.

CREATE OR REPLACE FUNCTION public.broadcast_content_changes()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $function$
BEGIN
  PERFORM realtime.broadcast_changes(
    'topic:content',
    TG_OP,
    TG_OP,
    TG_TABLE_NAME,
    TG_TABLE_SCHEMA,
    NEW,
    OLD
  );
  RETURN NULL;
END;
$function$;

CREATE OR REPLACE FUNCTION public.rls_auto_enable()
RETURNS event_trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'pg_catalog'
AS $function$
DECLARE
  command record;
BEGIN
  FOR command IN
    SELECT *
    FROM pg_event_trigger_ddl_commands()
    WHERE command_tag IN ('CREATE TABLE', 'CREATE TABLE AS', 'SELECT INTO')
      AND object_type IN ('table', 'partitioned table')
  LOOP
    IF command.schema_name = 'public' THEN
      BEGIN
        EXECUTE format(
          'ALTER TABLE IF EXISTS %s ENABLE ROW LEVEL SECURITY',
          command.object_identity
        );
      EXCEPTION
        WHEN OTHERS THEN
          RAISE LOG 'rls_auto_enable could not enable RLS on %', command.object_identity;
      END;
    END IF;
  END LOOP;
END;
$function$;

DO $block$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_event_trigger
    WHERE evtname = 'ensure_rls'
  ) THEN
    CREATE EVENT TRIGGER ensure_rls
      ON ddl_command_end
      WHEN TAG IN ('CREATE TABLE', 'CREATE TABLE AS', 'SELECT INTO')
      EXECUTE FUNCTION public.rls_auto_enable();
  END IF;
END
$block$;

REVOKE ALL ON FUNCTION public.broadcast_content_changes() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.rls_auto_enable() FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.broadcast_content_changes() TO service_role;
GRANT EXECUTE ON FUNCTION public.rls_auto_enable() TO service_role;

-- All RLS policies now use private.has_role. Removing the obsolete public
-- SECURITY DEFINER wrapper keeps it out of the API schema entirely.
DROP FUNCTION IF EXISTS public.has_role(uuid, public.app_role);
