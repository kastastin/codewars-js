// <-- NegaFibonacci representation -->

/*
  Zeckendorf's Theorem[wiki] states that every positive integer can be represented uniquely as the sum of one or more distinct Fibonacci numbers in such a way that the sum does not include any two consecutive Fibonacci numbers. This representation can be used for Fibonacci Coding[wiki] of positive integers.

  The representation and encoding can be extended to use NegaFibonacci numbers[wiki], which would allow us to encode negative numbers as well as positive numbers. 0 Can be represented, but not encoded; this kata will therefore use the representation and not the encoding for its expected value.

  Task
  Define a function that accepts an integer and returns its representation as an array of zero (!) or more non-consecutive NegaFibonacci integers, sorted descending by absolute value.

  Examples
  repr(0) => []
  repr(1) => [1]
  repr(4) => [5,-1]
  repr(-17) => [-21,5,-1]
  repr(64) => [89,-21,-3,-1]
*/

// <-- Solution -->
function repr(n) {
  if (n === 0) return [];

  const nearest = n > 0 ? nearestFibPositive(n) : nearestFibNegative(n);

  return [nearest, ...repr(n - nearest)];
}

function nearestFibPositive(n) {
  let [current, next] = [1, 1];

  while (next < n) {
    [current, next] = [current + next, current + 2 * next];
  }

  return current;
}

function nearestFibNegative(n) {
  let [current, next] = [0, 1];

  while (next <= -n) {
    [current, next] = [current + next, current + 2 * next];
  }

  return -current;
}
