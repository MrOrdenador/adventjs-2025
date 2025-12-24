/**
 * Deciphers a Santa-style PIN code.
 * @param {string} code - The code to decipher, e.g., "[1+][2-][3][<]"
 * @returns {string|null} The deciphered PIN or null if invalid
 */
function decodeSantaPin(code) {
  let blocks = code.slice(1, -1).split("][");
  
  if (blocks.length !== 4) return null;

  let result = "";

  for (let hole of blocks) {
    if (hole === "<") {
      result += result.at(-1);
      continue;
    }

    let total = Number(hole[0]);
    for (let i = 1; i < hole.length; i++) {
      const char = hole[i];
      if (char === "+") total = (total + 1) % 10;
      else if (char === "-") total = (total - 1 + 10) % 10;
    }

    result += total;
  }

  return result;
}