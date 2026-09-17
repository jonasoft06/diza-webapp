import { ImageResponse } from "next/og";

export const alt = "Diza — La tutora que vive dentro de tu libro";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FAFAF8",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              color: "#8A3B2E",
            }}
          >
            diza
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 40,
              fontSize: 76,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "#1C1917",
              maxWidth: 900,
            }}
          >
            La tutora que vive dentro de tu libro.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 30, color: "#6B6560", maxWidth: 760 }}>
            No da respuestas. Hace las preguntas correctas, siempre desde tu libro.
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#F6ECE9",
              color: "#8A3B2E",
              fontSize: 28,
              fontWeight: 600,
              padding: "12px 24px",
              borderRadius: 999,
            }}
          >
            Pág. 42
          </div>
        </div>
      </div>
    ),
    size
  );
}
