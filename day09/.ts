type Board = string
type Moves = string
type Result = 'fail' | 'crash' | 'success'

function moveReno(board: Board, moves: Moves): Result {
  let boardArray = board.split("\n").filter((line) => line.trim() != "")

  const allowedMoves = {
    R: { row: 0, col: 1 },
    L: { row: 0, col: -1 },
    U: { row: -1, col: 0 },
    D: { row: 1, col: 0 }
  }

  function outOfBounds(row: number, col: number): boolean {
    return !(
      row >= 0 &&
      row < boardArray.length &&
      col >= 0 &&
      col < boardArray[0].length
    )
  }

  const startRow = boardArray.findIndex(line => line.includes("@"));

  let posReno = {
    row: startRow,
    col: boardArray[startRow].indexOf("@")
  };

  for (const char of moves) {
    const moveData = allowedMoves[char]

    posReno.row += moveData.row
    posReno.col += moveData.col

    if (outOfBounds(posReno.row, posReno.col)) return "crash"

    const nextCell = boardArray[posReno.row][posReno.col]

    if (nextCell === '*') return "success"
    if (nextCell === '#') return "crash"
  }

  return "fail"
}
