/**
 * Deciphers a Santa-style PIN code.
 * @param {string} code - The code to decipher, e.g., "[1+][2-][3][<]"
 * @returns {string|null} The deciphered PIN or null if invalid
 */
function decodeSantaPin(code) {
  code = code.slice(1, -1).split("][");
  
  if (code.length != 4) return null;

  let result = "";

  for (let hole of code) {
    if (hole === "<") {
      result += result.at(-1);
      continue;
    }

    let total = Number(hole[0]);
    for (let i = 1; i < hole.length; i++) {
      if (hole[i] === "+") total = (total + 1) % 10;
      else if (hole[i] === "-") total = (total - 1 + 10) % 10;
    }
    
    result += total;
  }

  return result;
}
