REVOKE INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER
  ON TABLE public.playbooks, public.playbook_categories
  FROM service_role;

GRANT SELECT
  ON TABLE public.playbooks, public.playbook_categories
  TO service_role;
