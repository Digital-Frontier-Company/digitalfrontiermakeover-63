
import * as React from "react"
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  useIsomorphicLayoutEffect(() => {
    // Ensure window is available (SSR safety)
    if (typeof window === 'undefined') return;
    
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
      }
    }
    
    // Set initial state safely
    onChange()
    
    mql.addEventListener("change", onChange)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

// Add alias export for backward compatibility
export const useMobile = useIsMobile;
