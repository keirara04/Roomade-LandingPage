"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { initMotion, ScrollTrigger } from "../lib/motion";
import AnnouncementBar from "./AnnouncementBar";
import MobileMenu from "./MobileMenu";
import icon from "../../../public/icon-512.png";

const ITEMS = [
  { id: "board", label: "Board" },
  { id: "money", label: "Money" },
  { id: "chat", label: "Chat" },
  { id: "faq", label: "FAQ" },
];

/**
 * Site header: announcement strip, then a floating pill.
 *
 * The pill is not just a Raycast/Framer borrow. The iOS app's own tab bar is a
 * floating rounded pill, visible in all eight screenshots on this page, so the
 * shape makes the header read as part of the product rather than site chrome.
 *
 * It slides out of view on scroll-down and back in on scroll-up: out of the
 * way while reading, back the moment the scroll direction says the visitor
 * wants navigation again.
 */
export default function Header() {
  const scope = useRef<HTMLElement>(null);
  const hamburger = useRef<HTMLButtonElement>(null);
  const [active, setActive] = useState<string | null>(null);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // The header's height is not a constant: the announcement strip can be
  // dismissed, and the pill wraps differently across breakpoints. Publishing
  // the measured height lets the page's top padding and every anchor's
  // scroll-margin follow it instead of guessing at 4.5rem.
  useEffect(() => {
    const node = scope.current;
    if (!node) return;

    const observer = new ResizeObserver(([entry]) => {
      document.documentElement.style.setProperty(
        "--header-offset",
        `${Math.round(entry.contentRect.height)}px`,
      );
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

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

  // A hidden header must not keep its links in the tab order, and the menu
  // must never be openable from a bar the visitor cannot see.
  const offscreen = hidden && !menuOpen;

  return (
    <>
      <header
        ref={scope}
        className={`fixed inset-x-0 top-0 z-40 transition-transform duration-300 motion-reduce:transition-none ${
          offscreen ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <AnnouncementBar />

        <div className="px-3 pt-3 sm:px-6">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 rounded-full border border-white/10 bg-teal-deep/85 py-2 pl-4 pr-2 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)] backdrop-blur xl:max-w-7xl sm:gap-4 sm:pl-5 sm:pr-3">
            <a
              href="#"
              aria-label="Roomade, back to top"
              className="flex shrink-0 items-center gap-2.5 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-white"
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
                              // behind the translucent bar and fails AA at
                              // 14px. white/90 is 4.84:1.
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

            <div className="flex shrink-0 items-center gap-1.5">
              <a
                href="#hero-waitlist"
                className="rounded-full bg-navy px-4 py-2 font-display text-sm font-bold text-white outline-none transition-colors duration-150 hover:bg-navy-lift focus-visible:ring-2 focus-visible:ring-white"
              >
                Join waitlist
              </a>

              <button
                ref={hamburger}
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                className="flex h-10 w-10 items-center justify-center rounded-full text-white/90 outline-none transition-colors hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white md:hidden"
              >
                <span aria-hidden="true" className="flex flex-col gap-[5px]">
                  <span className="block h-0.5 w-5 rounded-full bg-current" />
                  <span className="block h-0.5 w-5 rounded-full bg-current" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        items={ITEMS}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        triggerRef={hamburger}
      />
    </>
  );
}
