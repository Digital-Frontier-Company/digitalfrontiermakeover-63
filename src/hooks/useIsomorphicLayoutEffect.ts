import { useEffect, useLayoutEffect } from 'react';

/**
 * Safe isomorphic layout effect that prevents SSR hydration mismatches
 * Uses useLayoutEffect on client, useEffect on server
 */
export const useIsomorphicLayoutEffect = 
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * Safe window access hook that prevents SSR errors
 */
export function useSafeWindow() {
  return typeof window !== 'undefined' ? window : undefined;
}

/**
 * Hook to safely check if code is running on client side
 */
export function useIsClient() {
  return typeof window !== 'undefined';
}