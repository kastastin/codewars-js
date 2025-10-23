// <-- Routes in a square grid -->

/*
  Given a side length n, traveling only right and down how many ways are there to get from the top left corner to the bottom right corner of an n by n grid?

  Your mission is to write a program to do just that!
  Add code to route(n) that returns the number of routes for a grid n by n (if n is less than 1 return 0).

  Examples:
  -100 -> 0
  1 -> 2
  2 -> 6
  20 -> 137846528820
*/

// <-- My Solution -->
function routes(n, down = 0, right = 0, memo = {}) {
  if (n < 1) return 0;
  if (n === 1) return 2;

  const key = down + "," + right;

  if (key in memo) return memo[key];
  if (down === n || right === n) return 1;

  memo[key] = routes(n, down + 1, right, memo) + routes(n, down, right + 1, memo);

  return memo[key];
}

// <-- Best Solution -->
function routes(n) {
  let ans = 1;

  for (var i = 1; i <= n; i++) {
    ans = (ans * (i + n)) / i;
  }

  return n <= 0 ? 0 : Math.round(ans);
}
