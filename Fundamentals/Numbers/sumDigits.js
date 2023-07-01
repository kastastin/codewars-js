// <-- Summing a Number's Digits -->

/*
  Write a function named sumDigits which takes a number as input and returns the sum of the absolute value
  of each of the number's decimal digits.

  For example: (Input --> Output)
  10 --> 1
  99 --> 18
  -32 --> 5
  Let's assume that all numbers in the input will be integer values.
*/

// <-- My Solution -->
function sumDigits(number) {
  const positiveNumber = Math.abs(number);
  const arr = [...positiveNumber.toString()].map(Number);
  const sum = arr.reduce((a, c) => a + c, 0);

  return sum;
}

// <-- Best Solution -->
function sumDigitsBest(number) {
  return String(Math.abs(number))
    .split("")
    .map(Number)
    .reduce((acc, sum) => acc + sum);
}
