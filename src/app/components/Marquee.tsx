"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, initMotion, ScrollTrigger } from "../lib/motion";

// Fragments of the messages Roomade replaces. The point of the band is made
// by the content, not by a sentence explaining it.
const LINES = [
  "bin day is Thursday",
  "who bought the milk",
  "RM 12.50 to Ezzy",
  "guest staying Friday",
  "the tap is still dripping",
  "we're out of dish soap",
  "paid, thanks",
  "aircon service due",
];

function Track() {
  return (
    <ul className="flex shrink-0 items-center gap-10 pr-10">
      {LINES.map((line) => (
        <li key={line} className="flex shrink-0 items-center gap-10">
          <span className="whitespace-nowrap font-display text-lg font-bold text-ink sm:text-xl">
            {line}
          </span>
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-coral-deep"
            aria-hidden="true"
          />
        </li>
      ))}
    </ul>
  );
}

/**
 * Full-bleed coral band between the hero and the argument.
 *
 * Coral on ink is the only readable pairing here: ink on coral measures
 * 5.55:1, white on coral is 3.16:1 and fails. Do not invert it.
 *
 * The whole band is aria-hidden. It repeats itself and says nothing the
 * sections below do not already say, so announcing eight fragments twice
 * would be noise.
 */
export default function Marquee() {
  const scope = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = track.current;
      if (!el) return;

      initMotion();

      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        // Two identical copies sit side by side, so shifting the pair by
        // exactly half its width lands copy two where copy one started. The
        // wrap is invisible.
        const tween = gsap.to(el, {
          xPercent: -50,
          duration: 40,
          ease: "none",
          repeat: -1,
        });

        // An infinite tween nobody can see is pure battery cost, so pause it
        // whenever the band is off screen or the tab is in the background.
        const trigger = ScrollTrigger.create({
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          onToggle: ({ isActive }) =>
            isActive ? tween.play() : tween.pause(),
        });

        function onVisibility() {
          if (document.hidden) tween.pause();
          else if (trigger.isActive) tween.play();
        }

        document.addEventListener("visibilitychange", onVisibility);

        return () => {
          document.removeEventListener("visibilitychange", onVisibility);
          trigger.kill();
          tween.kill();
        };
      });

      return () => media.revert();
    },
    { scope },
  );

  return (
    <div
      ref={scope}
      aria-hidden="true"
      className="w-full overflow-hidden bg-coral py-5"
    >
      <div ref={track} className="flex w-max">
        <Track />
        {/* The second copy is what makes the loop seamless. Under reduced
            motion it is inert extra width inside an overflow-hidden box,
            which costs nothing and keeps the markup identical. */}
        <Track />
      </div>
    </div>
  );
}
