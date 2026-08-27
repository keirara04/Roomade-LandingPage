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
    theme_color: "#b08d57",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
