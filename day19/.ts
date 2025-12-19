function revealSantaRoute(routes: string[][]): string[] {
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
