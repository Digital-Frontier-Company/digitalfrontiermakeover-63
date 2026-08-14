CREATE POLICY "No direct API access"
  ON public.contact_rate_limits
  FOR ALL
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

