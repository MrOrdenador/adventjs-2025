def draw_tree(height, ornament, frequency):
  tree_drawing = ""
  pos = 1

  for i in range(height):
    line = ""
    for j in range(2*i+1):
      line+= ornament if pos % frequency == 0 else "*"
      pos += 1
    tree_drawing += " "*(height-i-1) + line + "\n"
  tree_drawing += " "*(height-1) + "#"
  return tree_drawing
