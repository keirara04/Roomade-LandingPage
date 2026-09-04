"use client";

/**
 * A boolean that lives in sessionStorage and can be read from React safely.
 *
 * Reading sessionStorage in a useState initializer also runs during
 * hydration, where it can disagree with the `false` the server rendered and
 * make React throw the tree away. useSyncExternalStore solves that properly:
 * the server snapshot is always `false`, and React re-reads the real value
 * after hydrating without a mismatch.
 *
 * Extracted from StickyWaitlistBar so the announcement bar gets the same
 * behaviour rather than a second, subtly different copy of it.
 */
export function createSessionFlag(key: string) {
  const listeners = new Set<() => void>();

  return {
    subscribe(onChange: () => void) {
      listeners.add(onChange);
      return () => listeners.delete(onChange);
    },
    get() {
      return sessionStorage.getItem(key) === "1";
    },
    getServerSnapshot() {
      return false;
    },
    set(value: boolean) {
      if (value) sessionStorage.setItem(key, "1");
      else sessionStorage.removeItem(key);
      listeners.forEach((listener) => listener());
    },
  };
}
