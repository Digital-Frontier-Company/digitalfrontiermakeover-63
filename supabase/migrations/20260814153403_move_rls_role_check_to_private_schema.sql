CREATE SCHEMA IF NOT EXISTS private AUTHORIZATION postgres;
REVOKE ALL ON SCHEMA private FROM PUBLIC, anon, authenticated;
GRANT USAGE ON SCHEMA private TO authenticated, service_role;

CREATE OR REPLACE FUNCTION private.has_role(
  _user_id uuid,
  _role public.app_role
)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles AS ur
    WHERE ur.user_id = _user_id
      AND ur.role = _role
  )
$$;

REVOKE ALL ON FUNCTION private.has_role(uuid, public.app_role)
  FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION private.has_role(uuid, public.app_role)
  TO authenticated, service_role;

ALTER POLICY "Admins can view leads" ON public.leads
  USING (private.has_role((SELECT auth.uid()), 'admin'::public.app_role));
ALTER POLICY "Admins can update leads" ON public.leads
  USING (private.has_role((SELECT auth.uid()), 'admin'::public.app_role))
  WITH CHECK (private.has_role((SELECT auth.uid()), 'admin'::public.app_role));
ALTER POLICY "Admins can delete leads" ON public.leads
  USING (private.has_role((SELECT auth.uid()), 'admin'::public.app_role));

ALTER POLICY "Admins can insert playbooks" ON public.playbooks
  WITH CHECK (private.has_role((SELECT auth.uid()), 'admin'::public.app_role));
ALTER POLICY "Admins can update playbooks" ON public.playbooks
  USING (private.has_role((SELECT auth.uid()), 'admin'::public.app_role))
  WITH CHECK (private.has_role((SELECT auth.uid()), 'admin'::public.app_role));
ALTER POLICY "Admins can delete playbooks" ON public.playbooks
  USING (private.has_role((SELECT auth.uid()), 'admin'::public.app_role));

ALTER POLICY "Admins can insert playbook categories" ON public.playbook_categories
  WITH CHECK (private.has_role((SELECT auth.uid()), 'admin'::public.app_role));
ALTER POLICY "Admins can update playbook categories" ON public.playbook_categories
  USING (private.has_role((SELECT auth.uid()), 'admin'::public.app_role))
  WITH CHECK (private.has_role((SELECT auth.uid()), 'admin'::public.app_role));
ALTER POLICY "Admins can delete playbook categories" ON public.playbook_categories
  USING (private.has_role((SELECT auth.uid()), 'admin'::public.app_role));

ALTER POLICY "Users can view allowed roles" ON public.user_roles
  USING (
    (SELECT auth.uid()) = user_id
    OR private.has_role((SELECT auth.uid()), 'admin'::public.app_role)
  );
ALTER POLICY "Admins can insert roles" ON public.user_roles
  WITH CHECK (private.has_role((SELECT auth.uid()), 'admin'::public.app_role));
ALTER POLICY "Admins can update roles" ON public.user_roles
  USING (private.has_role((SELECT auth.uid()), 'admin'::public.app_role))
  WITH CHECK (private.has_role((SELECT auth.uid()), 'admin'::public.app_role));
ALTER POLICY "Admins can delete roles" ON public.user_roles
  USING (private.has_role((SELECT auth.uid()), 'admin'::public.app_role));

REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role)
  FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role)
  TO service_role;

NOTIFY pgrst, 'reload schema';

