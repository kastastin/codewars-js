// <-- Chandos Number -->

/*
  The sequence of Chando is an infinite sequence of all Chando's numbers in ascending order.

  A number is called Chando's if it is an integer that can be represented as a sum of different positive integer powers of 5.

  The first Chando's numbers is 5 (5^1). And the following nth Chando's numbers are:

  25  (5^2)
  30  (5^1 + 5^2)
  125 (5^3)
  130 (5^1 + 5^3)
  150 (5^2 + 5^3)
  ...
  ...
  Your task is to find the Chando's nth number for a given n.
*/

// <-- My Solution -->
function nthChandosNumber(n) {
  let currentSum = 0;
  let currentPower = 1;
  let chandosNumber = 0;

  while (n > 0) {
    if (n % 2 === 1) {
      currentSum += Math.pow(5, currentPower);
    }

    n = Math.floor(n / 2);
    currentPower++;
  }

  return currentSum;
}

// <-- Best Solution -->
function nthChandosNumberBest(n) {
  return parseInt(n.toString(2) + "0", 5);
}
