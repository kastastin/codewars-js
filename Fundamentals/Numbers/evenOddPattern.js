// <-- Even Odd Pattern -->

/*
  Write a function that takes an array / list of numbers and returns a number.

  See the examples and try to guess the pattern:

  (1, 2, 6, 1, 6, 3, 1, 9, 6) => 393
  (1, 2, 3)                   =>   5
  (0, 2, 3)                   =>   3
  (1, 0, 3)                   =>   3
  (3, 2)                      =>   6
*/

// <-- My Solution -->
function EvenOdd(arr) {
  if (arr.length === 0) return 0;

  let result = arr[0];

  for (let i = 1; i < arr.length; i += 2) {
    result = result * arr[i] + (i + 1 < arr.length ? arr[i + 1] : 0);
  }

  return result;
}

// <-- Best Solution -->
const EvenOddBest = (xs) => xs.reduce((acc, x, i) => (i % 2 ? acc * x : acc + x), 0);
