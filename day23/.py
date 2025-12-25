from collections import deque
from typing import List, Tuple

def min_steps_to_deliver(map: List[List[str]]) -> int:
  rows: int = len(map)
  cols: int = len(map[0])

  start_row: int = next(i for i, row in enumerate(map) if "S" in row)
  start_col: int = map[start_row].index("S")

  visited: List[List[bool]] = [[False] * cols for _ in range(rows)]
  dist: List[List[int]] = [[-1] * cols for _ in range(rows)]
  dirs: List[Tuple[int, int]] = [(1, 0), (-1, 0), (0, 1), (0, -1)]

  def is_valid_cell(i: int, j: int) -> bool:
    return 0 <= i < rows and 0 <= j < cols and not visited[i][j] and map[i][j] != "#"

  def bfs(start_i: int, start_j: int) -> None:
    queue: deque[Tuple[int, int, int]] = deque([(start_i, start_j, 0)])
    visited[start_i][start_j] = True
    dist[start_i][start_j] = 0

    while queue:
      i, j, steps = queue.popleft()
      for di, dj in dirs:
        ni, nj = i + di, j + dj
        if is_valid_cell(ni, nj):
          visited[ni][nj] = True
          dist[ni][nj] = steps + 1
          queue.append((ni, nj, steps + 1))

  def total_distance() -> int:
    total: int = 0
    for i in range(rows):
      for j in range(cols):
        if map[i][j] == "G":
          if dist[i][j] == -1:
            return -1
          total += dist[i][j]
    return total

  bfs(start_row, start_col)
  return total_distance()
