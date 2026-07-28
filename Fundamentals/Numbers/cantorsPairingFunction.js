// <-- Cantor's pairing function -->

/*
  Georg Cantor's in one of his proofs used following sequence:

  1/1 1/2 1/3 1/4 1/5 ...
  2/1 2/2 2/3 2/4 ...
  3/1 3/2 3/3 ...
  4/1 4/2 ...
  5/1 ...

  There are many ways to order those expressions. In this kata we'll use this approach:

  So sequence is:
  1/1, 1/2, 2/1, 3/1, 2/2, 1/3, 1/4 ...

  Your task is to return nth element of this sequence.

  Input: n - positive integer (max 268435455)

  Output: string - nth expression of sequence - 'a/b' where a and b are integers.
*/

// <-- Solution -->
function cantor(n) {
  const m = Math.round(Math.sqrt(2 * n));
  const i = (m * (m + 1)) / 2 - n;
  const x = m - i;
  const y = 1 + i;

  return m % 2 ? `${y}/${x}` : `${x}/${y}`;
}
