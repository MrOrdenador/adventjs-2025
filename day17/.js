/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourLights(board) {
  if (!board.length) return false

  const rows = board.length
  const cols = board[0].length

  function hasStreak(getCell, length){
    let count = 0
    let prev = '.'

    for (let i = 0; i < length; i++) {
      const cell = getCell(i)

      if (cell === '.') {
        count = 0
        prev = '.'
      } else if (cell === prev) {
        count++
      } else {
        prev = cell
        count = 1
      }

      if (count === 4) return true
    }

    return false
  }
  for (let r = 0; r < rows; r++) {
    if (hasStreak(c => board[r][c], cols)) {
      return true
    }
  }

  for (let c = 0; c < cols; c++) {
    if (hasStreak(r => board[r][c], rows)) {
      return true
    }
  }

  return false
}
