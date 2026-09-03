"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { initMotion, ScrollTrigger } from "../lib/motion";
import icon from "../../../public/icon-512.png";

const ITEMS = [
  { id: "board", label: "Board" },
  { id: "money", label: "Money" },
  { id: "chat", label: "Chat" },
  { id: "faq", label: "FAQ" },
];

/**
 * Site header. Always mounted (unlike the old SectionNav it replaces, which
 * stayed off-screen until the hero scrolled past) so the brand mark and the
 * "Join waitlist" CTA are reachable from first paint through to the footer,
 * not just once the visitor is deep in the page.
 *
 * It does slide out of view on scroll-down and back in on scroll-up, the
 * same reveal-on-intent pattern as most fixed headers: out of the way while
 * reading, back the moment the visitor's scroll direction says they want
 * navigation again.
 */
export default function Header() {
  const scope = useRef<HTMLElement>(null);
  const [active, setActive] = useState<string | null>(null);
  const [hidden, setHidden] = useState(false);

  useGSAP(
    () => {
      initMotion();

      const sectionTriggers = ITEMS.map(({ id }) => {
        const section = document.querySelector(`#${id}`);
        if (!section) return null;

        return ScrollTrigger.create({
          trigger: section,
          // A section counts as current once its top reaches the middle of
          // the viewport and until its bottom does, so exactly one is ever
          // active.
          start: "top center",
          end: "bottom center",
          onToggle: ({ isActive }) =>
            setActive((prev) => (isActive ? id : prev === id ? null : prev)),
        });
      });

      // Direction-based show/hide rather than a plain scroll listener, so it
      // shares ScrollTrigger's single rAF-batched scroll tick with the
      // section-highlight triggers above instead of adding a second one.
      // Pinned to the header's own height (its own scrollHeight) rather than
      // an offset guess, so "near the top" always means "the header would
      // overlap the hero" regardless of how tall the logo/CTA row ends up.
      const hideTrigger = ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          const headerHeight = scope.current?.offsetHeight ?? 0;
          if (self.scroll() <= headerHeight) {
            setHidden(false);
          } else {
            setHidden(self.direction === 1);
          }
        },
      });

      return () => {
        sectionTriggers.forEach((t) => t?.kill());
        hideTrigger.kill();
      };
    },
    { scope },
  );

  return (
    <header
      ref={scope}
      className={`fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-teal-deep/90 backdrop-blur transition-transform duration-300 motion-reduce:transition-none ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-3 xl:max-w-7xl">
        <a
          href="#"
          aria-label="Roomade"
          className="flex shrink-0 items-center gap-2.5"
        >
          <Image
            src={icon}
            alt=""
            width={28}
            height={28}
            className="rounded-[28%]"
          />
          <span className="font-display text-base font-bold text-white">
            Roomade
          </span>
        </a>

        <nav
          aria-label="Page sections"
          className="hidden min-w-0 flex-1 justify-center md:flex"
        >
          <ul className="flex items-center gap-1">
            {ITEMS.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`block rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-white/15 text-white"
                        : // white/75 measures 3.96:1 against the ground
                          // behind the translucent bar and fails AA at 14px.
                          // white/90 is 4.84:1.
                          "text-white/90 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <a
          href="#hero-waitlist"
          className="shrink-0 rounded-full bg-navy px-4 py-2 font-display text-sm font-bold text-white outline-none transition-colors duration-150 hover:bg-navy-lift focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-teal-deep"
        >
          Join waitlist
        </a>
      </div>
    </header>
  );
}
