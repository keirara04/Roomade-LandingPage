import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    // Required from Next 16 — the default allowlist is [75], and any other
    // value is silently coerced to the nearest entry. The screenshots are UI
    // full of small text, so they need the extra quality; 75 visibly muds the
    // 12pt labels in Board.png.
    qualities: [75, 90],
  },
};

export default nextConfig;
