"use client";

import { useSyncExternalStore } from "react";
import { createSessionFlag } from "../lib/sessionFlag";

const dismissedFlag = createSessionFlag("announcement-dismissed");

/**
 * Slim strip above the header.
 *
 * Coral with ink text: measured 5.55:1. White on coral is 3.16:1 and must
 * never be used here.
 *
 * The copy is deliberately "the waitlist is open" rather than "early access
 * is open". There is no public build yet, and the FAQ only ever promises that
 * the waitlist gets the first invites, so claiming early access is open would
 * read as "you can install this now" and be wrong.
 */
export default function AnnouncementBar() {
  const dismissed = useSyncExternalStore(
    dismissedFlag.subscribe,
    dismissedFlag.get,
    dismissedFlag.getServerSnapshot,
  );

  if (dismissed) return null;

  return (
    <div className="relative bg-coral text-ink">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center gap-2 px-10 py-2 text-center xl:max-w-7xl">
        <a
          href="#hero-waitlist"
          className="group py-1 text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-coral"
        >
          <span className="font-bold">The waitlist is open.</span>{" "}
          <span className="hidden sm:inline">
            First invites go out on TestFlight.
          </span>{" "}
          <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-0.5">
            &rarr;
          </span>
        </a>
      </div>

      <button
        type="button"
        onClick={() => dismissedFlag.set(true)}
        aria-label="Dismiss announcement"
        // Full ink, not ink/70: at 70% over coral the glyph measures 3.54:1
        // and fails AA. Solid ink is 5.55:1.
        className="absolute right-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-lg leading-none text-ink outline-none transition-colors hover:bg-ink/10 focus-visible:ring-2 focus-visible:ring-ink sm:right-2"
      >
        &times;
      </button>
    </div>
  );
}
