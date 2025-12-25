function minStepsToDeliver(map: string[][]): number {
  const rows: number = map.length;
  const cols: number = map[0].length;

  const startRow: number = map.findIndex((row: string[]) => row.includes("S"));
  const startCol: number = map[startRow].indexOf("S");

  const visited: boolean[][] = Array.from({ length: rows }, () => Array(cols).fill(false));
  const dist: number[][] = Array.from({ length: rows }, () => Array(cols).fill(-1));
  const queue: [number, number, number][] = [[startRow, startCol, 0]];

  visited[startRow][startCol] = true;
  dist[startRow][startCol] = 0;

  const dirs: [number, number][] = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ];

  function isValidCell(i: number, j: number): boolean {
    return i >= 0 && i < rows && j >= 0 && j < cols && !visited[i][j] && map[i][j] !== "#";
  }

  function processNeighbor(i: number, j: number, steps: number) {
    if (!isValidCell(i, j)) return;
    visited[i][j] = true;
    dist[i][j] = steps + 1;
    queue.push([i, j, steps + 1]);
  }

  while (queue.length > 0) {
    const [i, j, steps]: [number, number, number] = queue.shift()!;
    for (const [di, dj] of dirs) {
      processNeighbor(i + di, j + dj, steps);
    }
  }

  let total: number = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (map[i][j] === "G") {
        if (dist[i][j] === -1) return -1;
        total += dist[i][j];
      }
    }
  }

  return total;
}
