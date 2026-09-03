"use client";

import { useRef, useState, type ReactNode, type CSSProperties } from "react";
import { useGSAP } from "@gsap/react";
import { initMotion, ScrollTrigger } from "../lib/motion";

const START = 0.88;

export default function RevealOnScroll({
  delay = "0ms",
  className = "",
  children,
}: {
  delay?: string;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      initMotion();

      // Already in view, or already scrolled past, at the moment this mounts.
      // ScrollTrigger fires callbacks on state changes, not retroactively for
      // where the page already is, so this case has to be handled directly.
      // It covers landing on a URL with a hash and a browser restoring scroll
      // position on back-navigation.
      if (el.getBoundingClientRect().top < window.innerHeight * START) {
        setVisible(true);
        return;
      }

      // For everything below the fold, ScrollTrigger drives it. Unlike a raw
      // IntersectionObserver it compares scroll positions rather than waiting
      // for an intersection threshold to be crossed, so jumping the whole page
      // in one step still fires every trigger it passed. That is exactly what
      // a section-nav click does, and it is what used to leave sections stuck
      // at opacity 0.
      const trigger = ScrollTrigger.create({
        trigger: el,
        start: `top ${START * 100}%`,
        once: true,
        onEnter: () => setVisible(true),
      });

      return () => trigger.kill();
    },
    { scope: ref },
  );

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--delay": delay } as CSSProperties}
    >
      {children}
    </div>
  );
}
