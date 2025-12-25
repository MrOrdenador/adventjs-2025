# Challenge #22: 🎄 The sleigh maze

Santa Claus 🎅 is testing a new **sleigh simulator** inside a maze in the workshop. The maze is represented as a matrix of characters.

Your task is to implement a function that determines if it is possible to reach the exit (`E`) starting from the initial position (`S`).

## Maze rules:

- `S`: Santa's initial position.
- `E`: Maze exit.
- `.`: Free path.
- `#`: Wall (blocks the path).
- Allowed movements: **up, down, left, and right**.
- There is only one `S` and one `E`.

## Examples

```javascript
canEscape([
  ['S', '.', '#', '.'],
  ['#', '.', '#', '.'],
  ['.', '.', '.', '.'],
  ['#', '#', '#', 'E']
]) // → true

canEscape([
  ['S', '#', '#'],
  ['.', '#', '.'],
  ['.', '#', 'E']
]) // → false

canEscape([
  ['S', 'E']
]) // → true

canEscape([
  ['S', '.', '.', '.', '.'],
  ['#', '#', '#', '#', '.'],
  ['.', '.', '.', '.', '.'],
  ['.', '#', '#', '#', '#'],
  ['.', '.', '.', '.', 'E']
]) // → true

canEscape([
  ['S', '.', '.'],
  ['.', '.', '.'],
  ['#', '#', '#'],
  ['.', '.', 'E']
]) // → false
```
## Things to keep in mind

- You don't need to return the path, just whether it is possible to arrive.  
- Santa cannot leave the boundaries of the maze.  
- You can pass through the same cell multiple times.  

**Tip:** This problem can be solved in several ways, but search algorithms like **BFS** (Breadth-First Search) or **DFS** (Depth-First Search) are ideal for these types of challenges.
