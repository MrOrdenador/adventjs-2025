def find_unsafe_gifts(warehouse: list[str]) -> int:
  warehouse_board = [line for line in warehouse if line.strip()]
  rows = len(warehouse_board)
  cols = len(warehouse_board[0])
  unprodected_gifts = 0

  for row in range(rows):
    for col in range(cols):
      if warehouse_board[row][col] == "*":
        up = row > 0 and warehouse_board[row-1][col] == "#"
        down = row < rows - 1 and warehouse_board[row+1][col] == "#"
        left = col > 0 and warehouse_board[row][col - 1] == "#";
        right = col < cols - 1 and warehouse_board[row][col + 1] == "#";

        if not (up or down or left or right):
          unprodected_gifts += 1
  return unprodected_gifts
