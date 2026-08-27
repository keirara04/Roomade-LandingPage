import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Roomade — the board for your flat",
    short_name: "Roomade",
    description:
      "Issues, spends, and heads-ups for your shared flat, all pinned to one board.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f1e6",
    theme_color: "#9c7c49",
    icons: [
      {
        src: "/icon-512.png",
        sizes: "1024x1024",
        type: "image/png",
      },
    ],
  };
}
