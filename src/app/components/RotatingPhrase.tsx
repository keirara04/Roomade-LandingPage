"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/motion";

// One per card type: issue, spend, heads-up, reminder. Deliberately not house
// chatter, so this does not repeat the marquee sitting just below it.
const PHRASES = [
  "the things that break",
  "the money that's shared",
  "the plans nobody told you about",
  "the dates everyone forgets",
];

const HOLD = 2.4;

export default function RotatingPhrase({
  className = "",
}: {
  className?: string;
}) {
  const scope = useRef<HTMLParagraphElement>(null);
  const slot = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = slot.current;
      if (!el) return;

      const items = gsap.utils.toArray<HTMLElement>(".rotating-phrase-item");
      if (!items.length) return;

      // Every item is absolutely positioned so they stack, which means the
      // slot collapses to zero height unless we give it one. Lock it to the
      // tallest phrase, re-measured on resize because a phrase that fits on
      // one line at 1440px wraps to two on a phone. The waitlist card sits
      // directly below this, so an unlocked height would shove the page's
      // only CTA every couple of seconds.
      function lockHeight() {
        const tallest = Math.max(...items.map((item) => item.offsetHeight));
        el!.style.height = `${tallest}px`;
      }

      lockHeight();
      window.addEventListener("resize", lockHeight);

      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(items, { opacity: 0, y: 8 });
        gsap.set(items[0], { opacity: 1, y: 0 });

        const tl = gsap.timeline({ repeat: -1 });

        items.forEach((item, i) => {
          const next = items[(i + 1) % items.length];
          tl.to(
            item,
            { opacity: 0, y: -8, duration: 0.4, ease: "power2.in" },
            `+=${HOLD}`,
          ).fromTo(
            next,
            { opacity: 0, y: 8 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
            "<0.1",
          );
        });

        return () => tl.kill();
      });

      // Reduced motion: first phrase shown, no timeline created at all.
      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(items, { opacity: 0, y: 0 });
        gsap.set(items[0], { opacity: 1 });
      });

      return () => {
        window.removeEventListener("resize", lockHeight);
        media.revert();
      };
    },
    { scope },
  );

  return (
    <p ref={scope} className={`text-lg leading-relaxed text-white/90 ${className}`}>
      <span ref={slot} className="relative block" aria-hidden="true">
        {PHRASES.map((phrase, i) => (
          <span
            key={phrase}
            className="rotating-phrase-item absolute inset-x-0 top-0"
            // The first phrase is the one that renders before hydration, so
            // it is the only one visible in the server HTML.
            style={i === 0 ? undefined : { opacity: 0 }}
          >
            For <span className="font-semibold text-cream-text">{phrase}</span>.
          </span>
        ))}
      </span>
      {/* The animated slot swaps a phrase every couple of seconds, which is
          useless to a screen reader and wrong as a live region. This carries
          the whole claim as one stable sentence instead. */}
      <span className="sr-only">
        For {PHRASES.slice(0, -1).join(", ")}, and {PHRASES[PHRASES.length - 1]}.
      </span>
    </p>
  );
}
