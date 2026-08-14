CREATE TABLE IF NOT EXISTS public.contact_rate_limits (
  key_hash text PRIMARY KEY CHECK (key_hash ~ '^[0-9a-f]{64}$'),
  window_started_at timestamptz NOT NULL,
  request_count integer NOT NULL CHECK (request_count > 0),
  updated_at timestamptz NOT NULL
);

ALTER TABLE public.contact_rate_limits ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON TABLE public.contact_rate_limits FROM PUBLIC, anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.contact_rate_limits TO service_role;

CREATE INDEX IF NOT EXISTS contact_rate_limits_updated_at_idx
  ON public.contact_rate_limits (updated_at);

CREATE OR REPLACE FUNCTION public.consume_contact_rate_limit(
  p_key_hash text,
  p_window_seconds integer,
  p_max_requests integer
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  v_now timestamptz := clock_timestamp();
  v_count integer;
BEGIN
  IF p_key_hash !~ '^[0-9a-f]{64}$'
     OR p_window_seconds NOT BETWEEN 60 AND 86400
     OR p_max_requests NOT BETWEEN 1 AND 1000 THEN
    RAISE EXCEPTION USING
      ERRCODE = '22023',
      MESSAGE = 'invalid rate-limit input';
  END IF;

  INSERT INTO public.contact_rate_limits AS rl
    (key_hash, window_started_at, request_count, updated_at)
  VALUES
    (p_key_hash, v_now, 1, v_now)
  ON CONFLICT (key_hash) DO UPDATE SET
    window_started_at = CASE
      WHEN rl.window_started_at <= v_now - make_interval(secs => p_window_seconds)
        THEN v_now
      ELSE rl.window_started_at
    END,
    request_count = CASE
      WHEN rl.window_started_at <= v_now - make_interval(secs => p_window_seconds)
        THEN 1
      ELSE rl.request_count + 1
    END,
    updated_at = v_now
  RETURNING request_count INTO v_count;

  IF random() < 0.01 THEN
    DELETE FROM public.contact_rate_limits
    WHERE updated_at < v_now - interval '7 days';
  END IF;

  RETURN v_count <= p_max_requests;
END;
$$;

REVOKE ALL ON FUNCTION public.consume_contact_rate_limit(text, integer, integer)
  FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.consume_contact_rate_limit(text, integer, integer)
  TO service_role;

