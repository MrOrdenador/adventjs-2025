def run_factory(factory: list[str]) -> str:
  pos = { "row": 0, "col": 0 };
  walkedOn = [];
  
  while True:
    if (
      pos["row"] < 0 or
      pos["row"] >= len(factory) or
      pos["col"] < 0 or
      pos["col"] >= len(factory[0])
    ):
      return "broken"
      
    for p in walkedOn:
      if p["row"] == pos["row"] and p["col"] == pos["col"]:
        return "loop"
        
    move = factory[pos["row"]][pos["col"]]
    
    if move == ".":
      return "completed"
    
    walkedOn.append({ "row": pos["row"], "col": pos["col"] })

    if move == "<": 
      pos["col"] -= 1
    elif move == ">": 
      pos["col"] += 1
    elif move == "^": 
      pos["row"] -= 1
    elif move == "v": 
      pos["row"] += 1
    else:
      return "broken"
