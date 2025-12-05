// <-- Guess the array -->

/*
  In this kata, you should determine the values in an unknown array of numbers. You'll be given a function f, which you can call like this:

  f(a, b)
  where a and b are indexes of two different elements in the unknown array, 1 or 2 indexes apart. f will return the sum of those two elements.

  The absolute difference between a and b must not be 0 nor greater than 2 (that is: the chosen indexes must be exactly 1 or 2 apart).

  Your goal is to figure out the correct array.

  The whole procedure is:

  You are given f and the length of the array n.
  Ask f for any element sums you want.
  Create and return the correct array according to the answers.
  The array will always have at least 3 elements.
*/

// <-- My Solution -->
function guess(f, n) {
  const arr = new Array(n);

  const s01 = f(0, 1);
  const s12 = f(1, 2);
  const s02 = f(0, 2);

  arr[0] = (s01 + s02 - s12) / 2;
  arr[1] = s01 - arr[0];
  arr[2] = s12 - arr[1];

  for (let i = 3; i < n; i++) {
    const sum = f(i - 1, i);
    arr[i] = sum - arr[i - 1];
  }

  return arr;
}

// <-- Best Solution -->
function guessBest(f, length) {
  const res = Array(length);

  res[0] = (f(0, 1) + f(0, 2) - f(1, 2)) / 2;

  for (let i = 1; i < length; i++) {
    res[i] = f(i - 1, i) - res[i - 1];
  }

  return res;
}
