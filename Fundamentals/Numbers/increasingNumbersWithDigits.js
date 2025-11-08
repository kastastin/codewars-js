// <-- Increasing Numbers with N Digits -->

/*
  An non decreasing number is one containing no two consecutive digits (left to right), whose the first is higer than the second.
  For example, 1235 is an non decreasing number, 1229 is too, but 123429 isn't.

  Write a function that finds the number of non decreasing numbers up to 10**N (exclusive) where N is the input of your function. For example, if N=3, you have to count all non decreasing numbers from 0 to 999.

  You'll definitely need something smarter than brute force for large values of N!
*/

// <-- My Solution -->
function increasingNumbers(n, m = 1n) {
  for (let i = 1n; i <= BigInt(n); i++) {
    m *= 9n + i;
    m /= i;
  }

  return m;
}

// <-- Best Solution -->
const fact = (
  (MEMO) => (n) =>
    (MEMO[n] ??= BigInt(n) * fact(n - 1))
)([1n, 1n]);

const increasingNumbersBest = (d) => fact(d + 9) / fact(9) / fact(d);
