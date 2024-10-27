// <-- Even fusc fun -->

/*
  A fusc function is defined as:

  fusc(1) = 1
  fusc(2n) = fusc(n)
  fusc(2n+1) = fusc(n) + fusc(n+1)
  We are interested in the next closest number m such that m >= n and fusc(m) % 2 == 0.

  Input: n > 0

  For example the fusc sequence up to 6th element is:

  [1 1 2 1 3 2]
  Examples:

  closestEvenFusc(1) = 3
  closestEvenFusc(2) = 3
  closestEvenFusc(3) = 3
  closestEvenFusc(4) = 6
*/

// <-- My Solution -->
function closestEvenFusc(n) {
  while (n % 3) {
    n += 1;
  }

  return n;
}

// <-- Best Solution -->
function closestEvenFusc(n) {
  return 3 * Math.ceil(n / 3);
}
