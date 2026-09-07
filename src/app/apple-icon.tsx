import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          borderRadius: 40,
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            fontWeight: 700,
            fontSize: 84,
            lineHeight: 1,
            letterSpacing: "-0.06em",
          }}
        >
          <span style={{ color: "#b8f000" }}>[</span>
          <span style={{ color: "#f5f5f5", fontWeight: 800 }}>B</span>
          <span style={{ color: "#b8f000" }}>]</span>
        </span>
      </div>
    ),
    { ...size },
  );
}
