// <-- Paths in the Grid -->

/*
  You have a grid with m rows and n columns. Return the number of unique ways that start from the top-left corner and go to the bottom-right corner. You are only allowed to move right and down.

  For example, in the below grid of 2 rows and 3 columns, there are 10 unique paths:

  o----o----o----o
  |    |    |    |
  o----o----o----o
  |    |    |    |
  o----o----o----o

  Note: there are random tests for grids up to 1000 x 1000 in most languages, so a naive solution will not work.
*/

// <-- My Solution -->
function numberOfRoutes(m, n) {
  if (n > m) return numberOfRoutes(n, m);

  let sum = 1;

  for (let i = m + 1; i <= n + m; i++) {
    sum = sum * i;
  }

  for (let i = 1; i <= n; i++) {
    sum = sum / i;
  }

  return sum;
}

// <-- Best Solution -->
function numberOfRoutesBest(m, n) {
  let count = 1;

  for (let k = n + 1; k <= m + n; k++) {
    count = (count * k) / (k - n);
  }

  return count;
}
