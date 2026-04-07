// <-- Going to zero or to infinity? -->

/*
  Consider the following numbers (where n! is factorial(n)):

  u1 = (1 / 1!) * (1!)
  u2 = (1 / 2!) * (1! + 2!)
  u3 = (1 / 3!) * (1! + 2! + 3!)
  ...
  un = (1 / n!) * (1! + 2! + 3! + ... + n!)
  Which will win: 1 / n! or (1! + 2! + 3! + ... + n!)?

  Are these numbers going to 0 because of 1/n! or to infinity due to the sum of factorials or to another number?

  Task
  Calculate (1 / n!) * (1! + 2! + 3! + ... + n!) for a given n, where n is an integer greater or equal to 1.

  Your result should be within 10^-6 of the expected one.
*/

// <-- Solution -->
function going(n) {
  let result = 1;
  let acc = 1;

  while (n > 1) {
    acc *= 1 / n;
    result += acc;
    n--;
  }

  return Math.floor(result * 1e6) / 1e6;
}
