import { useEffect, useRef, useState } from "react";

const TURNSTILE_SCRIPT_URL =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
const TURNSTILE_ACTION = "contact_submission";

interface TurnstileRenderOptions {
  sitekey: string;
  action: string;
  theme: "auto" | "light" | "dark";
  callback: (token: string) => void;
  "expired-callback": () => void;
  "error-callback": () => boolean;
}

interface TurnstileApi {
  render: (container: HTMLElement, options: TurnstileRenderOptions) => string;
  remove: (widgetId: string) => void;
  reset: (widgetId: string) => void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

let loaderPromise: Promise<TurnstileApi> | null = null;

function loadTurnstile(): Promise<TurnstileApi> {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  if (loaderPromise) return loaderPromise;

  loaderPromise = new Promise((resolve, reject) => {
    const resolveApi = () => {
      if (window.turnstile) {
        resolve(window.turnstile);
      } else {
        loaderPromise = null;
        reject(new Error("Turnstile did not initialize"));
      }
    };

    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[data-df-turnstile="true"]',
    );
    if (existingScript) {
      existingScript.addEventListener("load", resolveApi, { once: true });
      existingScript.addEventListener(
        "error",
        () => {
          loaderPromise = null;
          reject(new Error("Turnstile failed to load"));
        },
        { once: true },
      );
      return;
    }

    const script = document.createElement("script");
    script.src = TURNSTILE_SCRIPT_URL;
    script.async = true;
    script.defer = true;
    script.dataset.dfTurnstile = "true";
    script.addEventListener("load", resolveApi, { once: true });
    script.addEventListener(
      "error",
      () => {
        loaderPromise = null;
        reject(new Error("Turnstile failed to load"));
      },
      { once: true },
    );
    document.head.appendChild(script);
  });

  return loaderPromise;
}

interface TurnstileWidgetProps {
  onTokenChange: (token: string | null) => void;
  resetSignal: number;
  className?: string;
}

export function TurnstileWidget({
  onTokenChange,
  resetSignal,
  className,
}: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const onTokenChangeRef = useRef(onTokenChange);
  const [loadFailed, setLoadFailed] = useState(false);
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY?.trim();

  useEffect(() => {
    onTokenChangeRef.current = onTokenChange;
  }, [onTokenChange]);

  useEffect(() => {
    if (!siteKey || !containerRef.current) return;

    let cancelled = false;
    setLoadFailed(false);

    loadTurnstile()
      .then((api) => {
        if (cancelled || !containerRef.current) return;
        widgetIdRef.current = api.render(containerRef.current, {
          sitekey: siteKey,
          action: TURNSTILE_ACTION,
          theme: "dark",
          callback: (token) => onTokenChangeRef.current(token),
          "expired-callback": () => onTokenChangeRef.current(null),
          "error-callback": () => {
            onTokenChangeRef.current(null);
            setLoadFailed(true);
            return true;
          },
        });
      })
      .catch(() => {
        if (!cancelled) {
          onTokenChangeRef.current(null);
          setLoadFailed(true);
        }
      });

    return () => {
      cancelled = true;
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
      }
      widgetIdRef.current = null;
    };
  }, [siteKey]);

  useEffect(() => {
    if (widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
      onTokenChangeRef.current(null);
    }
  }, [resetSignal]);

  if (!siteKey || loadFailed) {
    return (
      <p className={className} role="alert">
        Human verification is temporarily unavailable. Please contact us at
        {" "}
        <a className="underline" href="mailto:contact@digitalfrontier.app">
          contact@digitalfrontier.app
        </a>
        .
      </p>
    );
  }

  return (
    <div className={className}>
      <div ref={containerRef} aria-label="Human verification" />
    </div>
  );
}
