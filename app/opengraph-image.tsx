import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "EDU HUSTAWKA - Wsparcie Rozwoju Twojego Dziecka"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

// Image generation
export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 48,
        background: "linear-gradient(to right, #f0fdfa, #e0f2fe)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Background decorative elements */}
      <div
        style={{
          position: "absolute",
          top: 40,
          right: 40,
          width: 120,
          height: 120,
          opacity: 0.3,
        }}
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-QxdAhRdRecXI4fIZtIjtPTWo9IcJok.png"
          alt=""
          width={120}
          height={120}
        />
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 40,
          width: 100,
          height: 100,
          opacity: 0.3,
        }}
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-yJA45UCgiYbwyGiqTk0IJRkX8uIku5.png"
          alt=""
          width={100}
          height={100}
        />
      </div>

      {/* Main logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 40,
        }}
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-Ygj0ARBLXn3YKQvYxyyD2mKMf0fELt.png"
          alt="EDU HUSTAWKA Logo"
          width={200}
          height={200}
        />
      </div>

      {/* Text content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#0f766e",
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          EDU HUSTAWKA
        </h1>
        <p
          style={{
            fontSize: 32,
            color: "#334155",
            textAlign: "center",
            maxWidth: 800,
          }}
        >
          Wsparcie Rozwoju Twojego Dziecka
        </p>
      </div>
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  )
}
