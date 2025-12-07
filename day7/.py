def draw_tree(height, ornament, frequency):
  string = ""
  pos = 1

  for i in range(height):
    line = ""
    for j in range(2*i+1):
      line+= ornament if pos % frequency == 0 else "*"
      pos += 1
    string += " "*(height-i-1) + line + "\n"
  string += " "*(height-1) + "#"
  return string
