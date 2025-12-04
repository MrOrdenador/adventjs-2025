/**
 * @param {number} size - The size of the gift
 * @param {string} symbol - The symbol to draw
 * @returns {string} The gift drawn
 */
function drawGift(size, symbol) {  
  if (size < 2) return ""; 

  let box = symbol.repeat(size) + "\n";
  for (let i = 0; i < size-2; i++){
    box += symbol + " ".repeat(size-2) + symbol + "\n"
  }
  box += symbol.repeat(size)

  return box
}