function findUnsafeGifts(warehouse: string[]): number {
  const warehouseBoard = warehouse.filter((line) => line.trim() != "");
  const rows = warehouseBoard.length;
  const cols = warehouseBoard[0].length;
  let unprotectedGifts = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (warehouseBoard[row][col] == "*") {
        const up = row > 0 && warehouseBoard[row - 1][col] == "#";
        const down = row < rows - 1 && warehouseBoard[row + 1][col] == "#";
        const left = col > 0 && warehouseBoard[row][col - 1] == "#";
        const right = col < cols - 1 && warehouseBoard[row][col + 1] == "#";
        if (!(up || down || left || right)) {
          unprotectedGifts++;
        }
      }
    }
  }
  return unprotectedGifts;
}
