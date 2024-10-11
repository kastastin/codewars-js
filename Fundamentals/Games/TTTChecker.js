// <-- Tic - Tac - Toe Checker -->

/*
  If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

  Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

  [[0, 0, 1],
  [0, 1, 2],
  [2, 1, 0]]
  We want our function to return:

  -1 if the board is not yet finished AND no one has won yet (there are empty spots),
  1 if "X" won,
  2 if "O" won,
  0 if it's a cat's game (i.e. a draw).
  You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.
*/

// <-- My Solution -->
function isSolved(board) {
  board = board.join("-").replace(/,/g, "");

  if (/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
  if (/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
  if (/0/.test(board)) return -1;

  return 0;
}

// <-- Best Solution -->
function isSolvedBest(board) {
  const row = board;
  const col = [0, 1, 2].map((i) => [0, 1, 2].map((h) => board[h][i]));
  const di1 = [[0, 1, 2].map((i) => board[i][i])];
  const di2 = [[0, 1, 2].map((i) => board.reverse()[i][i])];
  const all = row.concat(col, di1, di2);

  if (all.some((x) => "" + x == "1,1,1")) {
    return 1;
  } else if (all.some((x) => "" + x == "2,2,2")) {
    return 2;
  } else if (all.some((x) => x.includes(0))) {
    return -1;
  } else {
    return 0;
  }
}
