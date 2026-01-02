// <-- Pure odd digits primes -->

/*
  Primes that have only odd digits are pure odd digits primes, obvious but necessary definition. Examples of pure odd digit primes are: 11, 13, 17, 19, 31... If a prime has only one even digit does not belong to pure odd digits prime, no matter the amount of odd digits that may have.

  Create a function, only_oddDigPrimes(), that receive any positive integer n, and output a list like the one below:

  [number pure odd digit primes below n, largest pure odd digit prime smaller than n, smallest pure odd digit prime higher than n]

  Let's see some cases:

  only_oddDigPrimes(20) ----> [7, 19, 31]
  ///7, beacause we have seven pure odd digit primes below 20 and are 3, 5, 7, 11, 13, 17, 19
  19, because is the nearest prime of this type to 20
  31, is the first pure odd digit that we encounter after 20///

  only_oddDigPrimes(40) ----> [9, 37, 53]
*/

// <-- Solution -->
const onlyOddDigPrimes = (n) => {
  const seq = [...Array(n).keys()].filter(isOddDigPrime);

  while (!isOddDigPrime(n)) {
    n++;
  }

  return [seq.length, seq[seq.length - 1], n];
};

const isOddDigPrime = (n) => {
  if (
    n <= 2 ||
    n % 2 == 0 ||
    Array.from(String(n), Number).includes(0) ||
    Array.from(String(n), Number).find((i) => i % 2 == 0)
  ) {
    return false;
  }

  return [...Array(Math.ceil(Math.sqrt(n)) + 1).keys()].filter((i) => i > 1).every((i) => n % i != 0);
};
