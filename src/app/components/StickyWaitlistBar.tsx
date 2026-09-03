"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import WaitlistForm from "./WaitlistForm";
import icon from "../../../public/icon-512.png";

const DISMISS_KEY = "waitlist-bar-dismissed";
const listeners = new Set<() => void>();

/**
 * The dismissed flag lives in sessionStorage, which is external state React
 * cannot see. Reading it in a useState initializer would run during hydration
 * and disagree with the server's `false`, so it goes through
 * useSyncExternalStore instead: the server snapshot is always `false`, and
 * React re-reads the real value after hydrating without a mismatch.
 */
function subscribeToDismissed(onChange: () => void) {
  listeners.add(onChange);
  return () => listeners.delete(onChange);
}

function isDismissed() {
  return sessionStorage.getItem(DISMISS_KEY) === "1";
}

function setDismissedFlag(value: boolean) {
  if (value) sessionStorage.setItem(DISMISS_KEY, "1");
  else sessionStorage.removeItem(DISMISS_KEY);
  listeners.forEach((listener) => listener());
}

export default function StickyWaitlistBar({
  watchSelector,
  hideSelector,
}: {
  watchSelector: string;
  hideSelector: string;
}) {
  const [pastHero, setPastHero] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);
  const dismissed = useSyncExternalStore(
    subscribeToDismissed,
    isDismissed,
    () => false,
  );

  function dismiss() {
    setDismissedFlag(true);
  }

  function restore() {
    setDismissedFlag(false);
  }

  useEffect(() => {
    const heroTarget = document.querySelector(watchSelector);
    if (!heroTarget) return;

    const observer = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(heroTarget);
    return () => observer.disconnect();
  }, [watchSelector]);

  useEffect(() => {
    const footerTarget = document.querySelector(hideSelector);
    if (!footerTarget) return;

    const observer = new IntersectionObserver(
      ([entry]) => setNearFooter(entry.isIntersecting),
      { threshold: 0, rootMargin: "0px 0px 140px 0px" },
    );

    observer.observe(footerTarget);
    return () => observer.disconnect();
  }, [hideSelector]);

  const eligible = pastHero && !nearFooter;
  const visible = eligible && !dismissed;
  const showRestoreTab = eligible && dismissed;

  return (
    <>
      <div
        className={`fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-surface/95 px-6 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-8px_24px_-8px_rgba(0,0,0,0.35)] backdrop-blur transition-transform duration-300 motion-reduce:transition-none sm:px-8 ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
        aria-hidden={!visible}
        // aria-hidden alone leaves the email field and submit button inside
        // still focusable, so tabbing lands on controls a screen reader has
        // been told do not exist. inert removes the whole subtree from focus
        // order and the accessibility tree together.
        inert={!visible}
      >
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-3 xl:max-w-7xl sm:flex-row sm:justify-between sm:gap-6">
          <p className="flex shrink-0 items-center gap-2.5 font-display text-base font-bold text-ink sm:whitespace-nowrap">
            <Image src={icon} alt="" width={32} height={32} className="rounded-[28%]" />
            Get early access
          </p>
          <div className="flex w-full items-center gap-2 sm:w-auto">
            <div className="w-full sm:max-w-sm">
              <WaitlistForm />
            </div>
            {/* Absolute + corner on mobile, where the form stacks below the
                heading and a floating dismiss reads as the standard
                promo-bar affordance. Inline after the form from sm up,
                where the row has room and a floating corner would drift
                away from the content it belongs to. */}
            <button
              type="button"
              onClick={dismiss}
              aria-label="Dismiss waitlist bar"
              className="absolute right-0 top-0 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg leading-none text-ink/65 outline-none transition-colors duration-150 hover:bg-ink/5 hover:text-ink focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:ring-offset-surface sm:static sm:ml-1"
            >
              &times;
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={restore}
        aria-label="Show waitlist bar"
        tabIndex={showRestoreTab ? 0 : -1}
        className={`fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-50 rounded-full bg-navy px-5 py-2.5 font-display text-sm font-bold text-white shadow-[0_8px_20px_-6px_rgba(0,0,0,0.5)] outline-none transition-[transform,background-color] duration-300 hover:bg-navy-lift motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-teal ${
          showRestoreTab
            ? "translate-y-0"
            : "pointer-events-none translate-y-24 opacity-0"
        }`}
        aria-hidden={!showRestoreTab}
      >
        Join
      </button>
    </>
  );
}
