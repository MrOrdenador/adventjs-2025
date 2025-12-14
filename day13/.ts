type Factory = string[];
type Result = 'completed' | 'broken' | 'loop';

function runFactory(factory: Factory): Result {
  let pos = { row: 0, col: 0 };
  let walkedOn = new Set<string>();
  
  while (true) {
    if (pos.row < 0 || pos.row >= factory.length || pos.col < 0 || pos.col >= factory[0].length) {
      return "broken";
    }
    const posKey = pos.row.toString() + pos.col.toString()
    
    if (walkedOn.has(posKey)) return "loop";

    const move = factory[pos.row][pos.col];
    if (move === ".") return "completed";

    walkedOn.add(posKey);

    if (move === "<") pos.col--;
    else if (move === ">") pos.col++;
    else if (move === "^") pos.row--;
    else if (move === "v") pos.row++;
    else return "broken";
  }
}
