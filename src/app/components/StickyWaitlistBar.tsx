"use client";

import { useEffect, useState } from "react";
import WaitlistForm from "./WaitlistForm";

export default function StickyWaitlistBar({
  watchSelector,
  hideSelector,
}: {
  watchSelector: string;
  hideSelector: string;
}) {
  const [pastHero, setPastHero] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);
  const [dismissed, setDismissed] = useState(
    () =>
      typeof window !== "undefined" &&
      sessionStorage.getItem("waitlist-bar-dismissed") === "1",
  );

  function dismiss() {
    setDismissed(true);
    sessionStorage.setItem("waitlist-bar-dismissed", "1");
  }

  function restore() {
    setDismissed(false);
    sessionStorage.removeItem("waitlist-bar-dismissed");
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
        className={`fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-paper/95 px-4 py-3 pr-10 shadow-[0_-8px_20px_rgba(43,36,32,0.25)] backdrop-blur transition-transform duration-300 motion-reduce:transition-none sm:px-6 sm:pr-12 ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
        aria-hidden={!visible}
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss waitlist bar"
          tabIndex={visible ? 0 : -1}
          className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-sm text-lg leading-none text-ink/50 outline-none transition-[color,transform] duration-150 hover:scale-110 hover:text-ink active:scale-90 motion-reduce:hover:scale-100 motion-reduce:active:scale-100 focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-paper sm:right-3"
        >
          &times;
        </button>
        <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-2 sm:flex-row sm:justify-between sm:gap-4">
          <p className="font-[family-name:var(--font-marker)] text-lg leading-none text-ink sm:whitespace-nowrap">
            Get on the board
          </p>
          <div className="w-full sm:max-w-xs">
            <WaitlistForm />
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={restore}
        aria-label="Show waitlist bar"
        tabIndex={showRestoreTab ? 0 : -1}
        className={`fixed bottom-4 right-4 z-50 rounded-full bg-coral px-4 py-2 font-[family-name:var(--font-label)] text-xs font-bold uppercase tracking-wide text-paper shadow-[0_6px_14px_rgba(43,36,32,0.35)] outline-none transition-transform duration-300 hover:opacity-90 motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper ${
          showRestoreTab
            ? "translate-y-0 hover:scale-110 active:scale-95"
            : "pointer-events-none translate-y-24 opacity-0"
        }`}
        aria-hidden={!showRestoreTab}
      >
        Join
      </button>
    </>
  );
}
