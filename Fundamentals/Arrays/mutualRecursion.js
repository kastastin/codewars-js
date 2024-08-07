// <-- Mutual Recursion -->

/*
  Mutual Recursion allows us to take the fun of regular recursion (where a function calls itself until a terminating condition) and apply it to multiple functions calling each other!

  Let's use the Hofstadter Female and Male sequences to demonstrate this technique. You'll want to create two functions F and M such that the following equations are true:

  F(0) = 1
  M(0) = 0
  F(n) = n - M(F(n - 1))
  M(n) = n - F(M(n - 1))
  Don't worry about negative numbers, n will always be greater than or equal to zero.
*/

// <-- My Solution -->
const femaleSequence = [];
const maleSequence = [];

function F(n) {
  if (n === 0) return 1;
  if (femaleSequence[n] !== undefined) return femaleSequence[n];

  femaleSequence[n] = n - M(F(n - 1));

  return femaleSequence[n];
}

function M(n) {
  if (n === 0) return 0;
  if (maleSequence[n] !== undefined) return maleSequence[n];

  maleSequence[n] = n - F(M(n - 1));

  return maleSequence[n];
}

// <-- Best Solution -->
function F(n) {
  return n === 0 ? 1 : n - M(F(n - 1));
}

function M(n) {
  return n === 0 ? 0 : n - F(M(n - 1));
}
