import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Roomade: everything your house needs, in one place",
    short_name: "Roomade",
    description:
      "One board for your shared house: what needs fixing, what everyone owes, what's happening this week, and the chat that goes with it.",
    start_url: "/",
    display: "standalone",
    background_color: "#3A7071",
    theme_color: "#3A7071",
    icons: [
      {
        src: "/icon-512.png",
        sizes: "1024x1024",
        type: "image/png",
      },
    ],
  };
}
