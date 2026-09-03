"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import icon from "../../../public/icon-512.png";

/**
 * The Roomade character in the hero, as the app icon itself.
 *
 * Presented as a rounded square rather than a cut-out of the creature: the
 * icon crops its body against its own bottom and left edges, so keying the
 * background out would leave two hard straight edges with nowhere to hide
 * them. The square also reads as "this is the app", which is the more honest
 * claim for a page whose only CTA is a waitlist.
 *
 * Motion is a slow float plus a tilt that follows the pointer. Both are
 * transform-only and driven through CSS custom properties, so pointer
 * movement never causes a React render.
 */
export default function Mascot({ className = "" }: { className?: string }) {
  const holder = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = holder.current;
    if (!node) return;

    // Track the whole hero section, not the icon's own box. The icon sits
    // behind the phone, so most of its area is not even hoverable; listening
    // on its own wrapper would mean the tilt almost never fires, and when it
    // did it would read as a hover state rather than the character noticing
    // you crossing the hero.
    const area = node.closest("section") ?? node;

    function handleMove(event: PointerEvent) {
      const rect = area.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      node!.style.setProperty("--mascot-tilt", `${(x * 10).toFixed(2)}deg`);
      node!.style.setProperty("--mascot-shift", `${(y * -6).toFixed(2)}px`);
    }

    function handleLeave() {
      node!.style.setProperty("--mascot-tilt", "0deg");
      node!.style.setProperty("--mascot-shift", "0px");
    }

    area.addEventListener("pointermove", handleMove);
    area.addEventListener("pointerleave", handleLeave);

    return () => {
      area.removeEventListener("pointermove", handleMove);
      area.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return (
    <div ref={holder} className={`mascot ${className}`}>
      <Image
        src={icon}
        // Decorative. The character carries no information the surrounding
        // copy does not already state.
        alt=""
        sizes="(max-width: 640px) 45vw, 15rem"
        quality={90}
        loading="eager"
        fetchPriority="high"
        className="mascot-icon w-full rounded-[24%]"
      />
    </div>
  );
}
