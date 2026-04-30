// <-- k-Primes -->

/*
  A natural number is called k-prime if it has exactly k prime factors, counted with multiplicity. For example:

  k = 2  -->  4, 6, 9, 10, 14, 15, 21, 22, ...
  k = 3  -->  8, 12, 18, 20, 27, 28, 30, ...
  k = 5  -->  32, 48, 72, 80, 108, 112, ...
  A natural number is thus prime if and only if it is 1-prime.

  Task:
  Complete the function count_Kprimes (or countKprimes, count-K-primes, kPrimes) which is given parameters k, start, end (or nd) and returns an array (or a list or a string depending on the language - see "Solution" and "Sample Tests") of the k-primes between start (inclusive) and end (inclusive).

  Example:
  countKprimes(5, 500, 600) --> [500, 520, 552, 567, 588, 592, 594]
  Notes:

  The first function would have been better named: findKprimes or kPrimes :-)
  In C some helper functions are given (see declarations in 'Solution').
  For Go: nil slice is expected when there are no k-primes between start and end.
  Second Task: puzzle (not for Shell)
  Given a positive integer s, find the total number of solutions of the equation a + b + c = s, where a is 1-prime, b is 3-prime, and c is 7-prime.

  Call this function puzzle(s).

  Examples:
  puzzle(138)  -->  1  because [2 + 8 + 128] is the only solution
  puzzle(143)  -->  2  because [3 + 12 + 128] and [7 + 8 + 128] are the solutions
*/

// <-- Solution -->
function countKprimes(k, start, nd) {
  return new Array(nd - start + 1)
    .fill("")
    .map((_, i) => start + i)
    .filter((n) => factors(n).length === k);
}

function puzzle(s) {
  let count = 0;

  const one = countKprimes(1, 0, s);
  const three = countKprimes(3, 0, s);
  const seven = countKprimes(7, 0, s);

  for (let se of seven) {
    for (let th of three) {
      for (let on of one) {
        if (se + th + on === s) {
          count++;
        }
      }
    }
  }

  return count;
}

function factors(s) {
  const arr = [];

  for (let i = 2; i <= Math.sqrt(s); i++) {
    if (s % i === 0) {
      while (s % i === 0) {
        arr.push(i);
        s /= i;
      }

      i = 1;
    }
  }

  return s <= 1 ? arr : arr.concat(s);
}
