def decode_santa_pin(code: str) -> str | None:
  blocks = code[1:-1].split("][")
    
  if len(blocks) != 4:
    return None
    
  result = ""
    
  for hole in blocks:
    if hole == "<":
      if len(result) == 0:
        return None
      result += result[-1]
      continue
        
    total = int(hole[0])

    for i in range(len(hole)):
    char = hole[i]
      if char == "+":
        total = (total + 1) % 10
      elif char == "-":
        total = (total + 9) % 10 
        
  result += str(total)
    
  return result