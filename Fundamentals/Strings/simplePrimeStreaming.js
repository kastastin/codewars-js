// <-- Simple prime streaming -->

/*
  Consider a sequence made up of the consecutive prime numbers. This infinite sequence would start with:

  "2357111317192329313741434753596167717379..."
  You will be given two numbers: a and b, and your task will be to return b elements starting from index a in this sequence.

  For example:
  solve(10,5) == `19232` Because these are 5 elements from index 10 in the sequence.
  Tests go up to about index 20000.
*/

// <-- My Solution -->
function solve() {
  const generator = (function* () {
    for (let n = 5; true; n++) {
      if (n % 2 === 0 || n % 3 === 0) continue;

      let b = true;

      for (let c = 5; c <= Math.sqrt(n); c += 6) {
        if (n % c === 0 || n % (c + 2) === 0) {
          b = false;
          break;
        }
      }

      if (b) {
        yield n;
      }
    }
  })();

  let str = "23";

  return (a, b) => {
    while (str.length < a + b) {
      str += generator.next().value;
    }

    return str.substring(a, a + b);
  };
}

// <-- Best Solution -->
function solveBest(a, b) {
  const n = 41000;
  const sieve = [];

  for (let i = 2; i < Math.sqrt(n); ++i) {
    if (!sieve[i]) {
      for (let j = i * 2; j < n; j += i) {
        sieve[j] = 1;
      }
    }
  }

  const primes = [];

  for (let i = 2; i < n; ++i) {
    if (!sieve[i]) {
      primes.push(i);
    }
  }

  return primes.join("").substr(a, b);
}
