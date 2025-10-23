// <-- Fixed length palindromes -->

/*
  Four-digit palindromes start with [1001,1111,1221,1331,1441,1551,1551,...] and the number at position 2 is 1111.

  You will be given two numbers a and b. Your task is to return the a-digit palindrome at position b if the palindromes were arranged in increasing order.

  Therefore, palin(4,2) = 1111, because that is the second element of the 4-digit palindrome series.
*/

// <-- My Solution -->
function palin(a, b) {
  if (a < 1 || b < 1) {
    return;
  }

  const start = Number("1" + "0".repeat(Math.ceil(a / 2) - 1));
  const total = start * 9;

  if (b > total) {
    return;
  }

  const left = String(start + b - 1);
  let right = left.split("").reverse().join("");

  if (a % 2 !== 0) {
    right = right.slice(1);
  }

  return Number(left + right);
}

// <-- Best Solution -->
function palinBest(a, b) {
  const half = String(Number("1" + "0".repeat(Math.ceil(a / 2) - 1)) - 1 + b);

  const reverse = half
    .split("")
    .reverse()
    .join("")
    .slice(a % 2 === 0 ? 0 : 1);

  return Number(half + reverse);
}
