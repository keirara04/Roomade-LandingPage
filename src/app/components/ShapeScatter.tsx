/**
 * Decorative doodle texture behind a solid ground. Purely a CSS background
 * layer — no motion, no interaction — so it costs nothing beyond the one
 * shared SVG tile at `public/doodles.svg`. Opacity is the only thing that
 * changes between call sites, which is what lets the same tile serve both
 * the prominent Hero treatment and the faint divider-section treatment.
 */
export default function ShapeScatter({
  opacity = 0.14,
  className = "",
}: {
  opacity?: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 bg-repeat ${className}`}
      style={{ backgroundImage: "url(/doodles.svg)", opacity }}
    />
  );
}
