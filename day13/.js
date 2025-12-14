/**
 * @param {string[]} factory - The factory layout
 * @returns {'completed'|'broken'|'loop'} Result of the gift journey
 */
function runFactory(factory) {
  let pos = { row: 0, col: 0 };
  let walkedOn = new Set();
  while (true) {
    if (
      pos.row < 0 ||
      pos.row >= factory.length ||
      pos.col < 0 ||
      pos.col >= factory[0].length
    ) {
      return "broken";
    }
    for (let p of walkedOn) {
      if (p.row == pos.row && p.col == pos.col) return "loop";
    }
    const move = factory[pos.row][pos.col];
    if (move === ".") {
      return "completed";
    }
    walkedOn.add({ row: pos.row, col: pos.col });
    if (move == "<") pos.col--;
    else if (move == ">") pos.col++;
    else if (move == "^") pos.row--;
    else if (move == "v") pos.row++;
    else return "broken";
  }
}
