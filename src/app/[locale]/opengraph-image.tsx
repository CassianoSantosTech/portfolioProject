import { ImageResponse } from "next/og";
import { routing } from "@/i18n/routing";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Cassiano Santos — Full Stack Developer";

export function generateImageMetadata({ params }: { params: { locale: string } }) {
  return [{ id: params.locale, alt, contentType, size }];
}

export default async function OG({
  params,
}: {
  params: { locale: string };
}) {
  const isPt = params.locale === "pt";
  const eyebrow = isPt
    ? "Desenvolvedor Full Stack · Fortaleza, CE"
    : "Full Stack Developer · Fortaleza, Brazil";
  const lede = isPt
    ? "Quase três anos construindo software em produção na Sunne — Java, Node, React, Angular."
    : "Nearly three years shipping production software at Sunne — Java, Node, React, Angular.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0E0D0B",
          padding: "80px",
          color: "#EFEAE0",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "20px",
            color: "#8B857A",
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontFamily: "monospace",
          }}
        >
          <span
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "5px",
              background: "#6FBF73",
              display: "block",
            }}
          />
          <span>cassiano.dev</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: "26px",
              color: "#E8A24C",
              marginBottom: "16px",
              fontFamily: "monospace",
            }}
          >
            {eyebrow}
          </span>
          <span
            style={{
              fontSize: "104px",
              lineHeight: 1,
              color: "#FFFFFF",
              letterSpacing: "-2px",
            }}
          >
            Cassiano Santos
          </span>
          <span
            style={{
              fontSize: "30px",
              color: "#8B857A",
              marginTop: "32px",
              maxWidth: "950px",
              lineHeight: 1.35,
            }}
          >
            {lede}
          </span>
        </div>

        <div
          style={{
            fontSize: "18px",
            color: "#5A554D",
            textTransform: "uppercase",
            letterSpacing: "3px",
            fontFamily: "monospace",
          }}
        >
          cassianosantos-dev.vercel.app
        </div>
      </div>
    ),
    { ...size },
  );
}
