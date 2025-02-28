// <-- Weird prime generator -->

/*
  Consider the sequence a(1) = 7, a(n) = a(n-1) + gcd(n, a(n-1)) for n >= 2:

  7, 8, 9, 10, 15, 18, 19, 20, 21, 22, 33, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 69, 72, 73....

  Let us take the differences between successive elements of the sequence and get a second sequence g: 1, 1, 1, 5, 3, 1, 1, 1, 1, 11, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 23, 3, 1....

  For the sake of uniformity of the lengths of sequences we add a 1 at the head of g:

  g: 1, 1, 1, 1, 5, 3, 1, 1, 1, 1, 11, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 23, 3, 1...

  Removing the 1s gives a third sequence: p: 5, 3, 11, 3, 23, 3... where you can see prime numbers.

  Task:
  Write functions:

  1: an(n) with parameter n: returns the first n terms of the series of a(n) (not tested)

  2: gn(n) with parameter n: returns the first n terms of the series of g(n) (not tested)

  3: countOnes(n) with parameter n: returns the number of 1 in the series gn(n) 
      (don't forget to add a `1` at the head) # (tested)
      
  4:  p(n) with parameter n: returns an array filled with the n first distinct primes in the same order they are found in the sequence gn (not tested)

  5: maxPn(n) with parameter n: returns the biggest prime number of the above p(n) # (tested)

  6: anOver(n) with parameter n: returns an array (n terms) of the a(i)/i for every i such g(i) != 1 (not tested but interesting result)

  7: anOverAverage(n) with parameter n: returns as an *integer* the average of anOver(n) # (tested)
  Note:
  You can write directly functions 3:, 5: and 7:. There is no need to write functions 1:, 2:, 4: 6: except out of pure curiosity.
*/

// <-- My Solution -->
const gcd = (a, b) => (b ? gcd(b, a % b) : a);
let a = [7];
for (let i = 1; i < 1000000; i++) {
  a.push(a[i - 1] + gcd(i + 1, a[i - 1]));
}
let p = [1, ...a.map((e, i) => a[i + 1] - e)];
let t = [...new Set(p.filter((e) => e > 1))];
let q = a.map((e, i) => e / i).filter((e, i) => p[i] > 1);

function countOnes(n) {
  return p.slice(0, n).reduce((a, c) => a + (c === 1), 0);
}

function maxPn(n) {
  return Math.max(...t.slice(0, n));
}

function anOverAverage(n) {
  return (q.slice(0, n).reduce((a, c) => a + c, 0) / n) | 0;
}

// <-- Best Solution -->
const gcdBest = (x, y) => {
    while (y !== 0) [x, y] = [y, x % y];
    return x;
  },
  countOnes = (n, a = 7, i = 1, s = 1) => {
    while (i < n) {
      const g = gcdBest(++i, a);
      a += g;
      if (g === 1) s += 1;
    }
    return s;
  },
  maxPn = (n, a = 7, i = 1, s = new Set()) => {
    while (s.size <= n) {
      const g = gcdBest(++i, a);
      a += g;
      s.add(g);
    }
    return Math.max(...s);
  },
  anOverAverage = (n, a = 7, i = 1, s = 0) => {
    while (s < n) {
      const g = gcdBest(++i, a);
      a += g;
      if (g > 1) s += 1;
    }
    return Math.floor(a / i);
  };
