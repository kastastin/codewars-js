// <-- Prime reduction -->

/*
  Consider the prime number 23. If we sum the square of its digits we get: 2^2 + 3^2 = 13, then for 13: 1^2 + 3^2 = 10, and finally for 10: 1^2 + 0^2 = 1.

  Similarly, if we start with prime number 7, the sequence is: 7->49->97->130->10->1.

  Given a range, how many primes within that range will eventually end up being 1?

  The upperbound for the range is 50,000. A range of (2,25) means that: 2 <= n < 25.
*/

// <-- My Solution -->
const isPrime = (num) => {
  for (let i = 2; i * i <= num; i += 1 + (i % 2)) {
    if (!(num % i)) {
      return false;
    }
  }

  return num > 1;
};

const endsUpWith = (num) => {
  const seen = {};

  while ((seen[num] = !seen[num])) {
    num = [...`${num}`].reduce((acc, dgt) => acc + dgt ** 2, 0);
  }

  return num;
};

const solve = (a, b) =>
  Array.from({ length: b - a }, (_, idx) => a + idx)
    .filter(isPrime)
    .filter((num) => endsUpWith(num) === 1).length;

// <-- Best Solution -->
const solve = (a, b) => {
  let r = 0;

  for (let i, p, s, t; a < b; r += a > 1 && t < 2, a++) {
    for (p = 1, i = 2; p && i * i <= a; i++) {
      p = a % i;
    }

    for (
      s = new Set(), t = a;
      p && !s.has(t) && t ^ 1;
      t = [...("" + t)].reduce((a, d) => a + d * d, 0)
    ) {
      s.add(t);
    }
  }

  return r;
};
