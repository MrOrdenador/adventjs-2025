def move_reno(board: str, moves: str):
  board_array = [line for line in board.split('\n') if line.strip() != '']

  allowed_moves = {
    'R': {'row': 0, 'col': 1},
    'L': {'row': 0, 'col': -1},
    'U': {'row': -1, 'col': 0},
    'D': {'row': 1, 'col': 0}
  }

  def out_of_bounds(r: int, c: int) -> bool:
    return not (0 <= r < len(board_array) and 0 <= c < len(board_array[0]))

  start_row = next(
    i for i, row in enumerate(board_array) 
    if '@' in row
  )


  start_col = board_array[start_row].index('@')

  pos_reno = {'row': start_row, 'col': start_col}

  for char in moves:
    move_data = allowed_moves[char]
    pos_reno['row'] += move_data['row']
    pos_reno['col'] += move_data['col']

    if out_of_bounds(pos_reno['row'], pos_reno['col']):
      return 'crash'

    next_cell = board_array[pos_reno['row']][pos_reno['col']]
    if next_cell == '*':
      return 'success'
    if next_cell == '#':
      return 'crash'

  return 'fail'
