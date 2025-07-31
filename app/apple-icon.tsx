import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = "image/png"

// Image generation
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 120,
        background: "#f0fdfa", // Light teal background
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "32px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Main "E" letter */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          fontSize: 100,
          color: "#0d9488", // Teal color
          fontFamily: "serif",
          position: "relative",
          zIndex: 2,
        }}
      >
        E
      </div>
      {/* Puzzle piece accent */}
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: "#f59e0b", // Amber color
          zIndex: 1,
        }}
      />
      {/* Second puzzle piece accent */}
      <div
        style={{
          position: "absolute",
          bottom: 20,
          left: 20,
          width: 30,
          height: 30,
          borderRadius: "50%",
          background: "#ec4899", // Pink color
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
