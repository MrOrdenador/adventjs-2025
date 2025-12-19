/**
 * @param {string[][]} routes - Array of [origin, destination] pairs
 * @returns {string[]} The reconstructed route
 */
function revealSantaRoute(routes) {
  const map = new Map(routes)
  const destinations = new Set()
  let current = routes[0][0]
  let result = []

  for (const [, destination] of routes) {
    destinations.add(destination)
  }
  while (current) {
    result.push(current)
    current = map.get(current)
  }
  return result
}
