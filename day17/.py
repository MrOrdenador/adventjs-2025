def has_four_lights(board: list[list[str]]) -> bool:
  if not board:
    return False

  rows = len(board)
  cols = len(board[0])

  def has_streak(line: list[str]) -> bool:
    count = 0
    prev = "."

    for cell in line:
      if cell != "." and cell == prev:
        count += 1
      elif cell != ".":
        count = 1
        prev = cell
      else:
        count = 0
        prev = "."
      if count == 4:
        return True
    return False

    # rows
    for r in range(rows):
      if has_streak(board[r]):
        return True

    # cols
    for c in range(cols):
      col = [board[r][c] for r in range(rows)]
      if has_streak(col):
        return True

    return False
