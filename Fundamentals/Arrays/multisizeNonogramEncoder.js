// <-- Multisize Nonogram Encoder -->

/*
  Could you please write me a program that can convert a drawn nonogram (represented as an array of arrays):

  nonogram = [
    [0, 0, 0, 1, 0, 0, 0, 1, 1, 0],
    [0, 0, 1, 1, 1, 0, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
    [1, 0, 1, 0, 0, 0, 1, 1, 0, 0],
    [1, 1, 1, 0, 0, 1, 1, 0, 0, 0],
    [1, 1, 1, 0, 0, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ]
  
  Into a tuple of (column_clues, row_clues) where:
  column_clues = [[4], [1, 3], [2, 4],...] and row_clues = [[1, 2], [3, 4], [8],...]

  Notes:
  Any empty rows or empty columns (which are cosmically unlikely to occur in random tests) should be represented as an empty (zero-length) sequence.
  Nonograms come in different sizes, such that 5 <= size <= 100
*/

// <-- Solution -->
function encode(sol) {
  const rotSol = [];

  for (let i = 0; i < sol.length; i++) {
    rotSol[i] = [];

    for (let j = 0; j < sol.length; j++) {
      rotSol[i][j] = sol[j][i];
    }
  }

  function count(s) {
    return s.map((v) =>
      v
        .join("")
        .split(0)
        .filter((v) => v)
        .map((v) => Number(v.split("").reduce((a, b) => Number(a) + Number(b)))),
    );
  }

  return [count(rotSol), count(sol)];
}
