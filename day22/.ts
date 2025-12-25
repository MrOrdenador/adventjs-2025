function canEscape(maze: string[][]): boolean {
  const startRow = maze.findIndex(row => row.includes("S"))
  let startPoint = [
    startRow,
    maze[startRow].indexOf("S")
  ]
  const visited = Array.from({ length: maze.length }, () => Array(maze[0].length).fill(false));

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ]

  function isValid(i, j) {
    return i >= 0 && i < maze.length && j >= 0 && j < maze[0].length && maze[i][j] != "#"
  }

  function dfs(i, j){
    if (maze[i][j] == "E") return true
    if (visited[i][j]) return false

    visited[i][j] = true

    for (const [x, y] of dirs){
      const ni = i + x;
      const nj = j + y;
      if (isValid(ni, nj)) {
        if (dfs(ni, nj)) return true;
      }
    }
    return false
  }
  const result = dfs(startPoint[0], startPoint[1])
  return result
}
