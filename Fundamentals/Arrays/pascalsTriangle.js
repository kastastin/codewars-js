// <-- Pascal's Triangle -->

/*
  Your function will be passed the depth of the triangle and your code has to return the corresponding Pascal's triangle up to that depth.

  The triangle should be returned as a nested array. For example:

  pascal(5) -> [ [1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1] ]
  To build the triangle, start with a single 1 at the top, for each number in the next row you just take the two numbers above it and add them together, except for the edges, which are all 1. e.g.:

        1
      1   1
    1   2   1
  1   3   3   1
*/

// <-- Solution -->
function pascal(n) {
  const result = [[1]];
  const sums = [];

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < result[i - 1].length - 1; j++) {
      sums.push(result[i - 1][j] + result[i - 1][j + 1]);
    }

    result[i] = [1, ...sums, 1];
    sums = [];
  }

  return result;
}
