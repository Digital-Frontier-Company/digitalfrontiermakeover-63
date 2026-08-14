-- Prevent public/API callers from invoking privileged maintenance functions.
REVOKE ALL ON FUNCTION public.broadcast_content_changes() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.grant_admin_for_verified_owner() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.rls_auto_enable() FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.broadcast_content_changes() TO service_role;
GRANT EXECUTE ON FUNCTION public.grant_admin_for_verified_owner() TO service_role;
GRANT EXECUTE ON FUNCTION public.rls_auto_enable() TO service_role;

-- has_role is deliberately available only to signed-in callers and the service role.
REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated, service_role;

-- Sensitive tables must never be readable by the anonymous API role.
REVOKE SELECT ON TABLE public.leads FROM anon;
REVOKE SELECT ON TABLE public.user_roles FROM anon;

-- Supports the durable IP-window check in the public contact Edge Function.
CREATE INDEX IF NOT EXISTS leads_ip_rate_limit_idx
  ON public.leads ((payload ->> '_client_ip_hash'), created_at DESC);

-- Cache auth.uid() once per statement in RLS policies.
DROP POLICY IF EXISTS "Admins can view leads" ON public.leads;
CREATE POLICY "Admins can view leads"
  ON public.leads FOR SELECT TO authenticated
  USING (public.has_role((SELECT auth.uid()), 'admin'::public.app_role));

DROP POLICY IF EXISTS "Admins can update leads" ON public.leads;
CREATE POLICY "Admins can update leads"
  ON public.leads FOR UPDATE TO authenticated
  USING (public.has_role((SELECT auth.uid()), 'admin'::public.app_role))
  WITH CHECK (public.has_role((SELECT auth.uid()), 'admin'::public.app_role));

DROP POLICY IF EXISTS "Admins can delete leads" ON public.leads;
CREATE POLICY "Admins can delete leads"
  ON public.leads FOR DELETE TO authenticated
  USING (public.has_role((SELECT auth.uid()), 'admin'::public.app_role));

DROP POLICY IF EXISTS "Admins can insert playbooks" ON public.playbooks;
CREATE POLICY "Admins can insert playbooks"
  ON public.playbooks FOR INSERT TO authenticated
  WITH CHECK (public.has_role((SELECT auth.uid()), 'admin'::public.app_role));

DROP POLICY IF EXISTS "Admins can update playbooks" ON public.playbooks;
CREATE POLICY "Admins can update playbooks"
  ON public.playbooks FOR UPDATE TO authenticated
  USING (public.has_role((SELECT auth.uid()), 'admin'::public.app_role))
  WITH CHECK (public.has_role((SELECT auth.uid()), 'admin'::public.app_role));

DROP POLICY IF EXISTS "Admins can delete playbooks" ON public.playbooks;
CREATE POLICY "Admins can delete playbooks"
  ON public.playbooks FOR DELETE TO authenticated
  USING (public.has_role((SELECT auth.uid()), 'admin'::public.app_role));

DROP POLICY IF EXISTS "Admins can insert playbook categories" ON public.playbook_categories;
CREATE POLICY "Admins can insert playbook categories"
  ON public.playbook_categories FOR INSERT TO authenticated
  WITH CHECK (public.has_role((SELECT auth.uid()), 'admin'::public.app_role));

DROP POLICY IF EXISTS "Admins can update playbook categories" ON public.playbook_categories;
CREATE POLICY "Admins can update playbook categories"
  ON public.playbook_categories FOR UPDATE TO authenticated
  USING (public.has_role((SELECT auth.uid()), 'admin'::public.app_role))
  WITH CHECK (public.has_role((SELECT auth.uid()), 'admin'::public.app_role));

DROP POLICY IF EXISTS "Admins can delete playbook categories" ON public.playbook_categories;
CREATE POLICY "Admins can delete playbook categories"
  ON public.playbook_categories FOR DELETE TO authenticated
  USING (public.has_role((SELECT auth.uid()), 'admin'::public.app_role));

-- Collapse overlapping user_roles SELECT policies while retaining admin access.
DROP POLICY IF EXISTS "Admins can manage all roles" ON public.user_roles;
DROP POLICY IF EXISTS "Users can view their own roles" ON public.user_roles;

CREATE POLICY "Users can view allowed roles"
  ON public.user_roles FOR SELECT TO authenticated
  USING (
    (SELECT auth.uid()) = user_id
    OR public.has_role((SELECT auth.uid()), 'admin'::public.app_role)
  );

CREATE POLICY "Admins can insert roles"
  ON public.user_roles FOR INSERT TO authenticated
  WITH CHECK (public.has_role((SELECT auth.uid()), 'admin'::public.app_role));

CREATE POLICY "Admins can update roles"
  ON public.user_roles FOR UPDATE TO authenticated
  USING (public.has_role((SELECT auth.uid()), 'admin'::public.app_role))
  WITH CHECK (public.has_role((SELECT auth.uid()), 'admin'::public.app_role));

CREATE POLICY "Admins can delete roles"
  ON public.user_roles FOR DELETE TO authenticated
  USING (public.has_role((SELECT auth.uid()), 'admin'::public.app_role));

