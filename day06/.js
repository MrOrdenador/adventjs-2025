/**
 * @param {{ hand: 'L' | 'R', color: string }[]} gloves
 * @returns {string[]} Colors of matched pairs
 */
function matchGloves(gloves) {
  const pending = {};
  const result = [];

  for (const glove of gloves) {
    const hand = glove.hand;
    const color = glove.color;

    if (!pending[color]) {
      pending[color] = { L: 0, R: 0 };
    }

    if (hand === 'L' && pending[color].R > 0) {
      pending[color].R--;
      result.push(color);
    } else if (hand === 'R' && pending[color].L > 0) {
      pending[color].L--;
      result.push(color);
    } else {
      pending[color][hand]++;
    }
  }

  return result;
}
