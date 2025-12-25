from collections import deque

def can_escape(maze: list[list[str]]) -> bool:
  rows, cols = len(maze), len(maze[0])
  visited = [[False] * cols for _ in range(rows)]

  for i in range(rows):
    for j in range(cols):
      if maze[i][j] == "S":
        start_i, start_j = i, j
        break

  dirs = [(1,0), (-1,0), (0,1), (0,-1)]
  queue = deque([(start_i, start_j)])
  visited[start_i][start_j] = True

  while queue:
    i, j = queue.popleft()

    if maze[i][j] == "E":
      return True

    for di, dj in dirs:
      ni, nj = i + di, j + dj
      if 0 <= ni < rows and 0 <= nj < cols and maze[ni][nj] != "#" and not visited[ni][nj]:
        visited[ni][nj] = True
        queue.append((ni, nj))

  return False
