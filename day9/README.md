# Day 9: 🦌 The Reno Robot Aspirator

The elves have built a **robot vacuum reindeer 🦌** (`@`) to tidy up the workshop a bit for Christmas.  

The reindeer moves on a board to **pick things up from the floor** (`*`) and must **avoid obstacles** (`#`).  

You will receive two parameters:

- `board`: a `string` that represents the board.
- `moves`: a `string` with the moves: `'L'` (left), `'R'` (right), `'U'` (up), `'D'` (down).

## 📝 Movement rules

- If the reindeer **goes off the board** or **crashes into an obstacle** (`#`) → return `'crash'`.
- If the reindeer **picks something up from the floor** (`*`) during the moves → return `'success'`.
- If the reindeer **doesn’t pick anything up and doesn’t crash** → return `'fail'`.

**Important:** Keep in mind that in the `board` the first and last lines are blank and must be discarded.

## 🧩 Examples

```javascript
const board = `
.....
.*#.*
.@...
.....
`

moveReno(board, 'D')
// ➞ 'fail' -> it moves but doesn’t pick anything up

moveReno(board, 'U')
// ➞ 'success' -> it picks something up (*) just above

moveReno(board, 'RU')
// ➞ 'crash' -> it crashes into an obstacle (#)

moveReno(board, 'RRRUU')
// ➞ 'success' -> it picks something up (*)

moveReno(board, 'DD')
// ➞ 'crash' -> it crashes into the bottom of the board

moveReno(board, 'UUU')
// ➞ 'success' -> it picks something up from the floor (*) and then crashes at the top

moveReno(board, 'RR')
// ➞ 'fail' -> it moves but doesn’t pick anything up
