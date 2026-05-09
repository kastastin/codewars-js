// <-- Square sums -->

/*
  Write function that, given integer number N (in range 2..43), returns array of integers 1..N arranged in a way, so sum of each 2 consecutive numbers is a square.

  Solution is valid if and only if following two criterias are met:

  Each number in range 1..N is used once and only once.
  Sum of each 2 consecutive numbers is a perfect square.

  Example:
  For N=15 solution could look like this:
  [ 9, 7, 2, 14, 11, 5, 4, 12, 13, 3, 6, 10, 15, 1, 8 ]
*/

// <-- Solution -->
function square_sums_row(n) {
  const squares = [];

  for (let i = 2; true; i++) {
    if (i * i > n * 2 - 1) break;
    squares.push(i * i);
  }

  const used = [...new Array(n)].map((i) => false);

  for (let i = n; i > 0; i--) {
    used[i] = true;
    const result = findNext(1, i, used, squares, n);
    if (result) return result;
    used[i] = false;
  }

  return false;
}

function findNext(len, last, used, squares, n) {
  if (len === n) {
    return [last];
  }

  for (let i = squares.length - 1; i >= 0 && squares[i] > last; i--) {
    const next = squares[i] - last;

    if (next > n || used[next]) continue;

    used[next] = true;
    const result = findNext(len + 1, next, used, squares, n);

    if (result) {
      result.push(last);
      return result;
    }

    used[next] = false;
  }

  return false;
}
