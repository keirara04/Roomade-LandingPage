"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

/**
 * Registers ScrollTrigger once, in the browser only, and schedules the
 * refreshes the page needs to measure correctly.
 *
 * Call from any client component that creates ScrollTriggers. Repeat calls
 * are free.
 */
export function initMotion() {
  if (registered || typeof window === "undefined") return;
  registered = true;

  gsap.registerPlugin(ScrollTrigger);

  // Trigger positions are computed from layout, and this page's layout is not
  // final at hydration: Inter Tight swaps in after first paint and changes
  // every heading's height, and the screenshots change section heights as they
  // arrive. Without these refreshes, triggers near the bottom of a 10,000px
  // page are measured against stale positions.
  //
  // Both pass `safe`. refresh() restores the saved scroll position, which
  // cancels a smooth scroll that is mid-flight: click a nav link before the
  // screenshots finish loading and the late refresh throws the visitor back to
  // where they started. `safe` defers the refresh instead of firing during a
  // scroll.
  document.fonts?.ready.then(() => ScrollTrigger.refresh(true));
  window.addEventListener("load", () => ScrollTrigger.refresh(true), {
    once: true,
  });
}

/** True when the visitor has asked for reduced motion. */
export function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export { gsap, ScrollTrigger };
