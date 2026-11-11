import { ImageResponse } from "next/og";
import { hero } from "@/content/landing";

// ImageResponse cannot read CSS variables, so the tokens from globals.css are duplicated here.
const colors = {
  bg: "#F9F8F6",
  ink: "#1E2B33",
  muted: "#59646B",
  primary: "#1D5C75",
  tint: "#E4EEF2",
};

export const alt = "Diza: tu libro ya viene con tutor";
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
          backgroundColor: colors.bg,
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
              color: colors.primary,
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
              color: colors.ink,
              maxWidth: 900,
            }}
          >
            {`${hero.titleBefore} ${hero.titleAccent}.`}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 30, color: colors.muted, maxWidth: 760 }}>
            Te guía con preguntas y cita la página de tu libro.
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: colors.tint,
              color: colors.primary,
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
