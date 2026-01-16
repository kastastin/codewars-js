// <-- Backwards Read Primes -->

/*
  Backwards-read-primes are primes that when read backwards in base 10 (from right to left) are a different prime. (This rules out primes which are palindromes.)

  Examples:
  13 17 31 37 71 73
  13 is such because it's prime and read from right to left writes 31 which is prime too. Same for the others.

  Task
  Find all Backwards-read-primes between two positive given numbers (both inclusive), the second one always being greater than or equal to the first one. The resulting array or the resulting string will be ordered following the natural order of the prime numbers.

  Examples (in general form):
  (start = 2, end = 100) => [13, 17, 31, 37, 71, 73, 79, 97] 
  (start = 9900, end = 10000) => [9923, 9931, 9941, 9967]
  (start = 501, end = 599) => []
*/

// <-- Solution -->
function backwardsPrime(x, y) {
  const result = [];

  for (let i = x; i <= y; i++) {
    if (isPrime(i)) {
      const j = +String(i).split``.reverse().join``;

      if (i != j && isPrime(j)) {
        result.push(i);
      }
    }
  }

  return result;
}

const isPrime = (n) => {
  for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return n > 1;
};
