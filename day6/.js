/**
 * @param {{ hand: 'L' | 'R', color: string }[]} gloves
 * @returns {string[]} Colors of matched pairs
 */
function matchGloves(gloves) {
  const counts = {}

  gloves.forEach((glove) => {
    if (!counts[glove.color]) {
      counts[glove.color] = { L: 0, R: 0 }
    }
    counts[glove.color][glove.hand]++
  })

  const array = []

  for (const color in counts) {
    const pairs = Math.min(counts[color].L, counts[color].R)
    for (let i = 0; i < pairs; i++) array.push(color)
  }

  return array
}
