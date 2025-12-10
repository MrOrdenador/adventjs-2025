def draw_gift(size, symbol):
  if size <= 1: return ""

  box = symbol * size + "\n"

  for _ in range(size-2):
    box = box + symbol + " "*(size-2) + symbol + "\n"

  box = box + symbol * size

  return box
