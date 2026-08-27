import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#b08d57",
          borderRadius: 96,
        }}
      >
        <span
          style={{
            fontSize: 320,
            fontWeight: 700,
            color: "#f7f1e6",
          }}
        >
          R
        </span>
      </div>
    ),
    { ...size },
  );
}
