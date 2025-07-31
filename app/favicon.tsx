import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = "image/png"

// Image generation
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        background: "#f0fdfa",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Stylized "E" for EDU in the brand color */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          fontSize: 22,
          color: "#0d9488",
          fontFamily: "serif",
          position: "relative",
          zIndex: 2,
        }}
      >
        E
      </div>
      {/* Small puzzle piece accent in the corner */}
      <div
        style={{
          position: "absolute",
          top: 2,
          right: 2,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#f59e0b",
          zIndex: 1,
        }}
      />
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  )
}
