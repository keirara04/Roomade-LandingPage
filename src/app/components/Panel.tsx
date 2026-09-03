import type { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

/**
 * White card. Everything long-form on this site sits in one of these, because
 * cream and coral both fail contrast as body text on the teal ground. Only
 * white text clears AA there, and running whole paragraphs in white on teal
 * gets tiring. See globals.css for the ratios.
 */
export default function Panel({ className = "", children }: Props) {
  return <div className={`panel text-ink ${className}`}>{children}</div>;
}
