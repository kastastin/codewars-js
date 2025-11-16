// <-- Prime Time -->

/*
  We need prime numbers and we need them now!

  Write a method that takes a maximum bound and returns all primes up to and including the maximum bound.

  For example:
  11 => [2, 3, 5, 7, 11]
*/

// <-- My Solution -->
function prime(num) {
  const seive = [];
  const primes = [];

  for (let i = 2; i <= num; i++) {
    if (!seive[i]) {
      primes.push(i);

      for (let j = i * i; j <= num; j += i) {
        seive[j] = true;
      }
    }
  }

  return primes;
}

// <-- Best Solution -->
function primeBest(n) {
  const gen = [];

  nextPrime: for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        continue nextPrime;
      }
    }

    gen.push(i);
  }

  return gen;
}
