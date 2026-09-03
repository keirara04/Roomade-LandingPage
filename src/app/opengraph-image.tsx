import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Roomade: everything your house needs, in one place";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const iconData = await readFile(join(process.cwd(), "public/icon-512.png"), "base64");
const iconSrc = `data:image/png;base64,${iconData}`;

const TEAL = "#3a7071";
const CREAM = "#fddfb5";
const WHITE = "#ffffff";
const INK = "#141c19";
const NAVY = "#1e3a5f";

function Card({ label, title }: { label: string; title: string }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: WHITE,
        borderRadius: 20,
        padding: "20px 24px",
        width: 260,
        boxShadow: "0 18px 34px rgba(0,0,0,0.32)",
      }}
    >
      <span style={{ fontSize: 17, fontWeight: 700, color: NAVY }}>{label}</span>
      <span
        style={{
          marginTop: 8,
          fontSize: 25,
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
          background: TEAL,
          padding: "60px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <img src={iconSrc} width={64} height={64} alt="" style={{ borderRadius: 18 }} />
          <span style={{ fontSize: 24, fontWeight: 700, color: CREAM }}>
            Roomade
          </span>
        </div>
        <span
          style={{
            marginTop: 24,
            fontSize: 62,
            fontWeight: 800,
            color: WHITE,
            textAlign: "center",
            lineHeight: 1.1,
            letterSpacing: -1.5,
          }}
        >
          Everything your house needs, in one place.
        </span>
        <div style={{ display: "flex", gap: 32, marginTop: 54 }}>
          <Card label="Board" title="What still needs doing" />
          <Card label="Settle up" title="You pay, or you get back" />
          <Card label="Chat" title="Right next to all of it" />
        </div>
      </div>
    ),
    { ...size },
  );
}
