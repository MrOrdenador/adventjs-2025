def has_four_in_a_row(board: list[list[str]]) -> bool:
  if not len(board): return False

  rows = len(board)
  cols = len(board[0])

  dirs = [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, -1]
  ]

  def hasStreakFrom(r, c, dr, dc):
    color = board[r][c]
    if color == '.': return False

    for i in range(4):
      nr = r + dr * i
      nc = c + dc * i

      if (
        nr < 0 or nr >= rows or
        nc < 0 or nc >= cols or
        board[nr][nc] != color
      ):
        return False
    return True

  for r in range(rows):
    for c in range(cols):
      for dr, dc of dirs: 
        if hasStreakFrom(r, c, dr, dc): 
          return True
  return False
