/**
 * @param {string} s - The string to check
 * @returns {number} The maximum depth of the magic
 */
function maxDepth(s) {
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
