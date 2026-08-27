import { ImageResponse } from "next/og";

export const alt = "Roomade — the board for your flat";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const CORK = "#9c7c49";
const PAPER = "#f7f1e6";
const INK = "#2b2420";
const CORAL = "#e15a3e";
const SAGE = "#6e9c7d";
const BUTTER = "#f4c744";

function Card({
  rotate,
  pin,
  label,
  title,
}: {
  rotate: number;
  pin: string;
  label: string;
  title: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: PAPER,
        borderRadius: 6,
        padding: "20px 22px",
        width: 260,
        transform: `rotate(${rotate}deg)`,
        boxShadow: "0 14px 24px rgba(43,36,32,0.4)",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -10,
          left: "50%",
          marginLeft: -8,
          width: 16,
          height: 16,
          borderRadius: 999,
          background: pin,
        }}
      />
      <span
        style={{
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: `${INK}80`,
        }}
      >
        {label}
      </span>
      <span
        style={{
          marginTop: 10,
          fontSize: 26,
          fontWeight: 700,
          color: INK,
          lineHeight: 1.15,
        }}
      >
        {title}
      </span>
    </div>
  );
}

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: CORK,
          padding: "60px 80px",
        }}
      >
        <span
          style={{
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: `${PAPER}cc`,
          }}
        >
          Shared-flat coordination
        </span>
        <span
          style={{
            marginTop: 18,
            fontSize: 56,
            fontWeight: 700,
            color: PAPER,
            textAlign: "center",
            lineHeight: 1.15,
          }}
        >
          Whatever&apos;s happening in your flat, it&apos;s on the board.
        </span>
        <div style={{ display: "flex", gap: 40, marginTop: 56 }}>
          <Card rotate={-4} pin={CORAL} label="Issue" title="Kitchen tap won't stop dripping" />
          <Card rotate={3} pin={SAGE} label="Spend" title="Costco run: $86.40" />
          <Card rotate={-2} pin={BUTTER} label="Heads-Up" title="Sam's parents staying" />
        </div>
      </div>
    ),
    { ...size },
  );
}
