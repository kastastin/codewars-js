// <-- Rotate Corners -->

/*
  In this kata, you must write a function that expects a two-dimensional list matrix (minimum size: 2 x 2) as the only argument. The return value will be a two-dimensional list (size: 2 x 2) showing only the corners after n clockwise rotations.

  Examples of corner values, rotation and corners-only return value: invalid as a kata test case, demonstration only!

  # corners = 1, 2, 3, 4
  # non-corners = 0
  [[1, 0, 2],
  [0, 0, 0],
  [4, 0, 3]]

  # above 2D list after a single clockwise rotation
  [[4, 0, 1],
  [0, 0, 0],
  [3, 0, 2]]

  # return value of above 2D list showing only the corners
  [[4, 1],
  [3, 2]]
  The total number of clockwise rotations, n, is equal to the sum of all corner values multiplied by the sum of all non-corner values.

  Values in matrix are ASCII characters, booleans or integers. Use the integer values when determining the corner/non-corner sums.

  In the case of ASCII characters, use the corresponding ASCII value. A == 65, Z == 90, etc
  In the case of booleans, use the corresponding integer value. True/true == 1, False/false == 0
  matrix will always be a two-dimensional list (minimum size: 2 x 2)

  If the initial size of matrix is 2 x 2, no rotation is needed.
*/

// <-- My Solution -->
const getNum = (v) => (typeof v === "number" ? v : typeof v === "string" ? v.charCodeAt(0) : +v);

function rotateCorners(matrix) {
  if (matrix.length == 2 && matrix[0].length == 2) return matrix;

  const sum = matrix.reduce((s, v) => s + v.reduce((si, vi) => si + getNum(vi), 0), 0),
    row = matrix.length - 1,
    col = matrix[0].length - 1,
    arr = [
      [matrix[0][0], matrix[0][col]],
      [matrix[row][0], matrix[row][col]],
    ],
    cornerSum = arr.reduce((s, v) => s + v.reduce((si, vi) => si + getNum(vi), 0), 0),
    midSum = sum - cornerSum,
    time = (cornerSum * midSum) % 4;

  while (time--) {
    arr = [
      [arr[1][0], arr[0][0]],
      [arr[1][1], arr[0][1]],
    ];
  }

  return arr;
}
