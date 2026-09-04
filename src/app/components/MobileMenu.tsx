"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import icon from "../../../public/icon-512.png";

type Item = { id: string; label: string };

const FOCUSABLE =
  'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])';

export default function MobileMenu({
  items,
  open,
  onClose,
  triggerRef,
}: {
  items: Item[];
  open: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const node = panel.current;
    if (!node) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    // Captured now rather than read in cleanup: refs are mutable, and the
    // cleanup runs after the render that closed the menu.
    const trigger = triggerRef.current;
    node.querySelector<HTMLElement>(FOCUSABLE)?.focus();

    // Lock the body without letting the page jump sideways as the scrollbar
    // disappears: whatever width the bar was occupying comes back as padding.
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    const { overflow, paddingRight } = document.body.style;
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      // Focus trap. Without this, tabbing walks straight out of the overlay
      // and into the page behind it, which is still there.
      const focusables = Array.from(
        node!.querySelectorAll<HTMLElement>(FOCUSABLE),
      ).filter((el) => el.offsetParent !== null);
      if (!focusables.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      // Send focus back where it came from, so closing does not dump the
      // caret at the top of the document.
      (trigger ?? previouslyFocused)?.focus();
    };
  }, [open, onClose, triggerRef]);

  return (
    <div
      id="mobile-menu"
      ref={panel}
      inert={!open}
      className={`fixed inset-0 z-50 flex flex-col bg-teal-deep transition-opacity duration-200 motion-reduce:transition-none md:hidden ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4">
        <span className="flex items-center gap-2.5">
          <Image src={icon} alt="" width={28} height={28} className="rounded-[28%]" />
          <span className="font-display text-base font-bold text-white">
            Roomade
          </span>
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="flex h-10 w-10 items-center justify-center rounded-full text-2xl leading-none text-white/90 outline-none transition-colors hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white"
        >
          &times;
        </button>
      </div>

      <nav aria-label="Page sections" className="flex-1 px-6 pt-4">
        <ul className="flex flex-col gap-1">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                // Every item is a same-page anchor, so without this the panel
                // stays parked over the section the visitor just asked for.
                onClick={onClose}
                className="block rounded-2xl px-4 py-4 font-display text-2xl font-bold text-white outline-none transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
        <a
          href="#hero-waitlist"
          onClick={onClose}
          className="block rounded-[14px] bg-navy px-6 py-4 text-center font-display text-base font-bold text-white outline-none transition-colors hover:bg-navy-lift focus-visible:ring-2 focus-visible:ring-white"
        >
          Join the waitlist
        </a>
      </div>
    </div>
  );
}
