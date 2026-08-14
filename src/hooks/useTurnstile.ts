import { useCallback, useState } from "react";

export function useTurnstile() {
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [turnstileReset, setTurnstileReset] = useState(0);

  const resetTurnstile = useCallback(() => {
    setTurnstileToken(null);
    setTurnstileReset((value) => value + 1);
  }, []);

  return {
    turnstileToken,
    setTurnstileToken,
    turnstileReset,
    resetTurnstile,
  };
}
