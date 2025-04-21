// <-- Surrounding Primes for a value -->

/*
  We need a function prime_bef_aft() that gives the largest prime below a certain given value n,

  befPrime or bef_prime (depending on the language),

  and the smallest prime larger than this value,

  aftPrime/aft_prime (depending on the language).

  The result should be output in a list like the following:

  primeBefAft == [befPrime, aftPrime]
  If n is a prime number it will give two primes, n will not be included in the result.

  Let's see some cases:

  primeBefAft(100) == [97, 101]

  primeBefAft(97) == [89, 101]

  primeBefAft(101) == [97, 103]
  Range for the random tests: 1000 <= n <= 200000
*/

// <-- My Solution -->
function primeBefAft(num) {
  function tub(n) {
    for (let i = 2; Math.sqrt(n) >= i; i++) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
  }

  let i = num - 1;
  let j = num + 1;

  while (!tub(i)) {
    i--;
  }

  while (!tub(j)) {
    j++;
  }

  return [i, j];
}

// <-- Best Solution -->
function primeBefAftBest(num) {
  const isPrime = (n) => {
    if (n % 2 === 0) {
      return false;
    }

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
  };

  let before = num - 1;
  let after = num + 1;

  while (!isPrime(before)) --before;
  while (!isPrime(after)) ++after;

  return [before, after];
}
