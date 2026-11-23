// <-- Knight's Reach -->

/*
  A lonely knight stands on square (x, y) in the middle of an empty 8×8 chessboard. He doesn't know where to go, but he must make exactly n moves. Find out on how many distinct squares he can end up.

  Complete the function that takes the starting coordinates x, y and the number of moves n, and returns the number of unique squares where the knight can finish his path.

  Rules
  x and y are the knight's starting coordinates on a standard chessboard (from 1 to 8).
  n is the exact number of moves the knight must make.
  The knight moves in an "L" shape and cannot leave the board.
  The knight may revisit squares along the way, but each possible final square should be counted only once.
  
  Examples
  x = 1, y = 1, n = 0  -->   1
  x = 4, y = 4, n = 1  -->   8
  x = 2, y = 2, n = 2  -->  15
  x = 4, y = 4, n = 5  -->  32
  
  Constraints
  1 <= x <= 8
  1 <= y <= 8
  0 <= n <= 1000
*/

// <-- My Solution -->
const moves = [
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
  [-2, 1],
  [-1, 2],
];

function manyHorse(x, y, n) {
  let current = new Set([`${x},${y}`]);

  for (let step = 0; step < n; ++step) {
    const next = new Set();

    current.forEach((pos) => {
      const [cx, cy] = pos.split(",").map(Number);
      for (let index = 0; index < 8; ++index) {
        const nx = cx + moves[index][0];
        const ny = cy + moves[index][1];
        if (nx >= 1 && nx <= 8 && ny >= 1 && ny <= 8) next.add(`${nx},${ny}`);
      }
    });

    current = next;
  }

  return current.size;
}
