function drawTree(height: number, ornament: string, frequency: number): string {
  let string = "";
  let pos = 1;

  for (let i = 0; i < height; i++) {
    let line = "";
    for (let j = 0; j < 2 * i + 1; j++) {
      line += pos % frequency == 0 ? ornament : "*";
      pos++;
    }
    string += " ".repeat(height - i - 1) + line + "\n";
  }
  string += " ".repeat(height - 1) + "#";
  return string;
}
