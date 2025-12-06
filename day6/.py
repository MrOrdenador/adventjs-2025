from typing import List, Dict

def match_gloves(gloves: List[Dict[str, str]]) -> List[str]:
  counts = {}
  for glove in gloves:
    color = glove["color"]
    hand = glove["hand"]

    if color not in counts:
      counts[color] = { "L": 0, "R": 0 }
    counts[color][hand] += 1

  array = []

  for color in counts:
    pairs = min(counts[color]["L"], counts[color]["R"])
    for i in range(pairs): array.append(color)

  return array