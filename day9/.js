/**
 * @param {string} board - Represent the board situation
 * @param {string} moves - Movement direction
 * @returns {'fail' | 'crash' | 'success'}
 */

function moveReno(board, moves) {
  let boardArray = board.split("\n").filter((line) => line.trim() != "")
  const allowedMoves = {
    R: { row: 0, col: 1 },
    L: { row: 0, col: -1 },
    U: { row: -1, col: 0 },
    D: { row: 1, col: 0 }
  }

  function outOfBounds(r, c) {
    return !(
      r >= 0 &&
      r < boardArray.length &&
      c >= 0 &&
      c < boardArray[0].length
    )
  }

  function findReno() {
    for (let row = 0; row < boardArray.length; row++) {
      for (let col = 0; col < boardArray[row].length; col++) {
        if (boardArray[row][col] === "@") {
          return { row, col }; 
        }
      }
    }
    return null; 
  }

  const posReno = findReno();
  if (!posReno) return "fail";

  for (const char of moves) {
    const moveData = allowedMoves[char]

    posReno.row += moveData.row
    posReno.col += moveData.col

    if (outOfBounds(posReno.row, posReno.col)) return "crash"

    const nextCell = boardArray[posReno.row][posReno.col]

    if (nextCell === "*") return "success"
    if (nextCell === "#") return "crash"
  }

  return "fail"
}
