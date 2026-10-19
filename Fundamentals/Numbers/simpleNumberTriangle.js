// <-- Simple number triangle -->

/*
  Consider the number triangle below, in which each number is equal to the number above plus the number to the left. If there is no number above, assume it's a 0.

  1
  1 1
  1 2 2
  1 3 5 5
  1 4 9 14 14

  The triangle has 5 rows and the sum of the last row is sum([1,4,9,14,14]) = 42.

  You will be given an integer n and your task will be to return the sum of the last row of a triangle of n rows.

  In the example above:

  solve(5) = 42
*/

// <-- Solution -->
function solve(n) {
  let res = 1n;

  for (let i = n + 2n, j = 1n; j < n; i++, j++) {
    res = (res * i) / j;
  }

  return res / n;
}
