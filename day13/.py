def run_factory(factory: list[str]) -> str:
  pos = { "row": 0, "col": 0 };
  walked_on = set()
  
  while True:
    if pos['row'] < 0 or pos['row'] >= len(factory) or pos['col'] < 0 or pos['col'] >= len(factory[0]):
      return "broken"

    pos_key = f"{pos['row']},{pos['col']}"
    
    if pos_key in walked_on:
      return "loop"

    move = factory[pos['row']][pos['col']]
    if move == ".":
      return "completed"

    walked_on.add(pos_key)

    if move == "<":
      pos['col'] -= 1
    elif move == ">":
      pos['col'] += 1
    elif move == "^":
      pos['row'] -= 1
    elif move == "v":
      pos['row'] += 1
    else:
      return "broken"
