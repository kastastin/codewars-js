// <-- Min Factor Distance -->

/*
  Write a function that returns the smallest distance between two factors of a number. The input will always be a number greater than one.

  Example:

  13013 has factors: [ 1, 7, 11, 13, 77, 91, 143, 169, 1001, 1183, 1859, 13013]

  Hence the answer will be 2 (=13-11)
*/

// <-- My Solution -->
function minDistance(n) {
  if (n % 2 === 0) return 1;

  let res = n;
  let last = -Infinity;

  for (let i = 1; i <= n; i += 2) {
    if (n % i) continue;

    const diff = i - last;

    if (res > diff) {
      res = diff;
    }

    last = i;
  }

  return res;
}

// <-- Best Solution -->
function minDistanceBest(n) {
  let dmin = n;
  let fprev = 1;

  for (i = 2; i <= n; i++) {
    if (n % i == 0) {
      dmin = Math.min(dmin, i - fprev);
      fprev = i;
    }
  }

  return dmin;
}
