import type { ReactNode } from "react";

export default function StatusPill({
  color = "bg-ink text-paper",
  children,
}: {
  color?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={`font-[family-name:var(--font-label)] rounded px-2 py-0.5 text-[0.65rem] font-bold tracking-wide ${color}`}
    >
      {children}
    </span>
  );
}
