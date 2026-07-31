// <-- Efficient Power Modulo n -->

/*
  Your task is to create a new implementation of modpow so that it computes (x^y)%n for large y. The problem with the current implementation is that the output of Math.pow is so large on our inputs that it won't fit in a 64-bit float.

  You're also going to need to be efficient, because we'll be testing some pretty big numbers.

  Random tests:
  150 random tests with 2 ≤ x ≤ 40000, 3000000 ≤ y ≤ 2000000000, 1000 ≤ n ≤ 10000000
*/

// <-- Solution -->
function modpow(x, n, p) {
  if (n === 0) {
    return 1;
  }

  let tmp = modpow((x * x) % p, Math.floor(n / 2), p);

  if (n % 2 !== 0) {
    tmp = (tmp * x) % p;
  }

  return tmp;
}
