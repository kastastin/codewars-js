// <-- Sum of Multiples -->

/*
  Find the sum of all multiples of n below m
  Keep in mind: n and m are natural numbers (positive integers), m is excluded from the multiples

  Example: sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
*/

// <-- My Solution -->
function sumMul(n, m) {
  if (n <= 0 || m <= 0 || m <= n) return "INVALID";

  return new Array(m - n)
    .fill(0)
    .map((_, index) => index + n)
    .filter((value) => value % n === 0)
    .reduce((acc, curr) => acc + curr, 0);
}

// <-- Best Solution -->
function sumMulBest(n, m) {
  if (m <= n) return "INVALID";

  let sum = 0;
  for (let i = n; i < m; i += n) a += i;

  return sum;
}
