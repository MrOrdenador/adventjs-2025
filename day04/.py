def decode_santa_pin(code: str) -> str | None:
  code = code[1:-1]
  code = code.split("][")

  if len(code) != 4: return None

  string = ""
  for hole in code:
    if hole == "<":
      if string == "": return None 
      string = string + string[-1]
      continue
      
    total = int(hole[0])

    for char in hole[1:]:
      if char == "+": 
        total = (total + 1) % 10
      elif char == "-":
        total = (total + 9) % 10
    string = string + str(total)   
   
  return string