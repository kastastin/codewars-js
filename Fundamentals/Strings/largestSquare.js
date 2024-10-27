// <-- The largest square -->

/*
  Give you a 2D array wall:

  [
    ["X"," "," "," "," "," "],
    [" "," "," "," "," "," "],
    [" "," "," "," "," "," "],
    [" "," "," "," "," "," "],
    [" "," "," "," "," "," "],
    [" "," "," "," "," "," "]
  ]
  " " is the blank part, "X" is the hole in the wall, please find the largest square (no hole) on the wall, return its area.

  The above example should return 25, because the maximum square that can be found is 5X5
*/

// <-- My Solution -->
function max(wall) {
  let rows = wall.length;
  let cols = wall[0].length;
  let size = Math.min(rows, cols);

  while (size) {
    for (let r = 0; r <= rows - size; ++r) {
      for (let c = 0; c <= cols - size; ++c) {
        let slice = wall
          .slice(r, r + size)
          .map((row) => row.slice(c, c + size));

        if (!/X/.test(slice)) {
          return size * size;
        }
      }
    }

    size--;
  }
}

// <-- Best Solution -->
function max(matrix) {
  const H = matrix.length;

  if (!H) return 0;

  const W = matrix[0].length;

  for (let r = 0; r < H; r++) {
    for (let c = 0; c < W; c++) {
      if (matrix[r][c] === "X") {
        return Math.max(
          max(matrix.slice(0, r)),
          max(matrix.slice(r + 1)),
          max(matrix.map((row) => row.slice(0, c))),
          max(matrix.map((row) => row.slice(c + 1)))
        );
      }
    }
  }

  return Math.min(H, W) ** 2;
}
