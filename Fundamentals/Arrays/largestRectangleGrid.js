// <-- Area of largest rectangle in grid -->

/*
  You are given a 2D array matrix of 0s and 1s and your task is to find the area of the largest rectangle which can be placed on top of a group of adjacent 1s.

  Example input:
  matrix = 
  [
    [1,0,1,1,1],
    [0,1,1,0,1],
    [0,1,1,0,1],
    [0,1,1,0,1],
  ]
  
  Output: 6
*/

// <-- Best Solution -->
function largestRectangleInGrid(matrix) {
  let largest = 0;

  const [M, N] = [matrix.length, matrix[0].length];

  for (let i0 = 0; i0 < M; i0++) {
    for (let j0 = 0; j0 < N; j0++) {
      for (let i1 = i0, maxN = N; i1 < M; i1++) {
        for (let j1 = j0; j1 < (maxN = matrix[i1][j1] ? maxN : j1); j1++) {
          largest = Math.max(largest, (i1 - i0 + 1) * (j1 - j0 + 1));
        }
      }
    }
  }

  return largest;
}
