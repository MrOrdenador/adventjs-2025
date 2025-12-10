/** @param {number} height - Height of the tree
 *  @param {string} ornament - Character to use as ornament
 *  @param {number} frequency - How often ornaments appear
 *  @returns {string} The decorated tree
 */
function drawTree(height, ornament, frequency) {
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
