function maxDepth (s: string): number {
  let intensity = 0
  let maxIntensity = 0
  for (const char of s) {
    if (char == '[') {
      intensity++
      if (intensity > maxIntensity) {
        maxIntensity = intensity
      }
    } else if (char == ']') {
      intensity--
      if (intensity < 0) return -1
    }
  }

  if (intensity != 0) return -1
  return maxIntensity == 0 ? -1 : maxIntensity
}