"use client";

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

export default function RevealOnScroll({
  tilt = "0deg",
  delay = "0ms",
  className = "",
  children,
}: {
  tilt?: string;
  delay?: string;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--tilt": tilt, "--delay": delay } as CSSProperties}
    >
      {children}
    </div>
  );
}
