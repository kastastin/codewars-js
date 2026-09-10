// <-- Surjection Count -->

/*
  Notation and definition
  Let [n] be a set of all positive integers up to and including n, for all positive integers n.
  A function f:X→Y is considered surjective, if all elements in the codomain Y are paired up with at least one element from the domain X.

  Task
  Given the inputs n and k, find the number of surjections for f:[n]→[k].

  Examples
  surjections(3, 2) -> 6
  surjections(6, 2) -> 62
  surjections(5, 3) -> 150

  Constraints
  1≤k≤n≤300
*/

// <-- Solution -->
const memo = {};

function stirling(n, k) {
  if (n === k) return 1n;
  if (n === 0n || k === 0n) return 0n;

  memo[n] ??= {};

  return (memo[n][k] ??= k * stirling(n - 1n, k) + stirling(n - 1n, k - 1n));
}

function factorial(n) {
  let ret = 1n;

  for (let i = 1n; i <= n; i++) {
    ret *= i;
  }

  return ret;
}

function surjections(n, k) {
  return stirling(n, k) * factorial(k);
}
