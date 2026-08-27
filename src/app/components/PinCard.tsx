import type { ReactNode } from "react";

type Props = {
  tilt?: string;
  pinColor?: string;
  tapeColor?: string;
  tapeSide?: "left" | "right";
  className?: string;
  children: ReactNode;
};

export default function PinCard({
  tilt = "0deg",
  pinColor = "bg-ink",
  tapeColor,
  tapeSide = "right",
  className = "",
  children,
}: Props) {
  return (
    <div
      className={`pin-card relative rounded-sm ${className}`}
      style={{ transform: `rotate(${tilt})` }}
    >
      <span className={`pushpin ${pinColor}`} />
      {tapeColor && (
        <span
          className={`washi-tape ${tapeColor} rotate-[-6deg]`}
          style={
            tapeSide === "right"
              ? { top: "-0.7rem", right: "0.5rem", left: "auto" }
              : { top: "-0.7rem", left: "0.5rem" }
          }
        />
      )}
      {children}
    </div>
  );
}
