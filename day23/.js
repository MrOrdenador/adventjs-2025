/**
 * @param {string[][]} map - The town map.
 * @returns {number} - Minimum steps to deliver all gifts.
 */
function minStepsToDeliver(map) {
  const rows = map.length
  const cols = map[0].length
  
  const startRow = map.findIndex(row => row.includes("S"));
  const startCol = map[startRow].indexOf("S");
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false))
  const dist = Array.from({ length: rows }, () => Array(cols).fill(-1))
  const queue = [[startRow, startCol, 0]]

  visited[startRow][startCol] = true;
  dist[startRow][startCol] = 0;

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ];

  while (queue.length) {
    const [i, j, steps] = queue.shift();

    for (let k = 0; k < dirs.length; k++) {
      const ni = i + dirs[k][0];
      const nj = j + dirs[k][1];

      if (ni < 0 || ni >= rows) continue
      if (nj < 0 || nj >= cols) continue
      if (visited[ni][nj]) continue
      if (map[ni][nj] === '#') continue
      
      visited[ni][nj] = true;
      dist[ni][nj] = steps + 1;
      queue.push([ni, nj, steps + 1]);
    }
  }

  let total = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (map[i][j] == 'G') {
        if (dist[i][j] == -1) return -1;
        total += dist[i][j];
      }
    }
  }

  return total
}