import type { ReactNode } from "react";

type Props = {
  /** Tailwind background + text classes. Must clear 4.5:1 on its own. */
  tone?: string;
  className?: string;
  children: ReactNode;
};

/**
 * Capsule tag, matching the app's chip vocabulary (Core/Theme.swift: chips are
 * capsules, not rounded rects). Sentence case only, since the app's brand guide
 * bans Title Case, and uppercase tracking belonged to the old identity.
 */
export default function Chip({
  tone = "bg-ink/8 text-ink/70",
  className = "",
  children,
}: Props) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${tone} ${className}`}
    >
      {children}
    </span>
  );
}
