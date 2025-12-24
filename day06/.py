from typing import List, Dict

def match_gloves(gloves: List[Dict[str, str]]) -> List[str]:
  pending = {}
  result = []

  for glove in gloves:
    color = glove["color"]
    hand = glove["hand"]

    if color not in pending:
      pending[color] = {"L": 0, "R": 0}

    if hand == "L" and pending[color]["R"] > 0:
      pending[color]["R"] -= 1
      result.append(color)

    elif hand == "R" and pending[color]["L"] > 0:
      pending[color]["L"] -= 1
      result.append(color)
      
    else:
      pending[color][hand] += 1

  return result