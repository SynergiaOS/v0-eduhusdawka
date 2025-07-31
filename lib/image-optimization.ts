export const generateBlurDataURL = (width: number, height: number): string => {
  const canvas = document.createElement("canvas")
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext("2d")

  if (ctx) {
    const gradient = ctx.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, "#f3f4f6")
    gradient.addColorStop(1, "#e5e7eb")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)
  }

  return canvas.toDataURL()
}

export const getOptimizedImageSizes = (breakpoints: { [key: string]: number }) => {
  return Object.entries(breakpoints)
    .map(([key, value]) => `(max-width: ${key}px) ${value}px`)
    .join(", ")
}

export const getImageFormat = (src: string): "webp" | "avif" | "jpeg" | "png" => {
  if (src.includes(".webp")) return "webp"
  if (src.includes(".avif")) return "avif"
  if (src.includes(".png")) return "png"
  return "jpeg"
}
