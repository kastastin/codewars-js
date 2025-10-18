// <-- Simple division -->

/*
  In this Kata, you will be given two numbers, a and b, and your task is to determine if the first number a is divisible by all the prime factors of the second number b. For example: solve(15,12) = False because 15 is not divisible by all the prime factors of 12 (which include2).
*/

// <-- My Solution -->
function solve(a, b) {
  let divisor = 2;

  while (b >= 2) {
    if (b % divisor === 0) {
      if (a % divisor !== 0) {
        return false;
      }

      b = b / divisor;
    } else {
      divisor++;
    }
  }

  return true;
}

// <-- Best Solution -->
function solveBest(a, b) {
  for (let i = 2; i * i <= b; i++) {
    while ((b % i) + (a % i) < 1) {
      b /= i;
    }
  }

  return a % b < 1;
}
