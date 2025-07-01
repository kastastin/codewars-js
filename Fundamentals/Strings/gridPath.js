// <-- Grid Path x -->

/*
  Given an n by n grid filled with lowercase x's and periods (.), return the minimum number of periods to be replaced with x's in order to form a continuous, straight, n-length path of x's, from either: side to side, top to bottom, or diagonally.

  Input and Output:
  Input: a string formatted as an n by n grid filled with randomly placed lowercase x's and periods. Each line of the grid is separated from the next by a linebreak.

  Output: a number between 0 and n, inclusive. The return number represents the minimum number of periods to be replaced with x's to obtain a straight n-length path of x's.

  Example:
  Input:
    ..x..
    .....
    .....
    ..x..
    xx..x 
  Output: 2
  As you can see, in the last row (xx..x) of the grid, you only need to replace two periods with x's to get a straight n-length path of x's in the grid. Any other row, column, or diagonal will require more replacements than 2. So 2 is the minimum number of periods to be replaced with x's.
*/

// <-- My Solution -->
function minXPath(grid) {
  let lines = grid.split("\n");

  let min = Math.min(
    ...lines.map((v) => [...v].filter((x) => x === ".").length),
  );

  min = Math.min(
    min,
    Math.min(...lines.map((_, i) => lines.filter((v) => v[i] === ".").length)),
  );

  min = Math.min(min, lines.filter((v, i) => v[i] === ".").length);
  min = Math.min(min, lines.filter((v, i) => v[v.length + ~i] === ".").length);

  return min;
}

// <-- Best Solution -->
function minXPathBest(grid) {
  const rows = grid.split("\n");
  const cols = rows.map((_, i) => rows.map((_, j) => rows[j][i]));
  const diag = rows.map((_, i) => rows[i][i]);
  const gaid = rows.map((_, i) => rows[rows.length - 1 - i][i]);

  const comb = [...rows, ...cols, diag, gaid];

  function nXRow(row) {
    return [...row].filter((c) => c == ".").length;
  }

  return Math.min(...comb.map(nXRow));
}
