// <-- Multiply by a number, so it becomes a perfect power -->

/*
  Let's say we have a positive integer n. You have to find the smallest possible positive integer that when multiplied by n, becomes a perfect power of integer k. A perfect power of k is any positive integer that can be represented as a^k. For example if k=2, then 36 is a perfect power of k, but 27 isn't.

  Examples
  n, k = 100, 3  return  10, #because 10*100 becomes 1000, and 1000 = 10**3
  n, k = 36, 2   return   1, #because 36 is already a perfect square 6**2
  n, k = 72, 4   return  18, #because 18*72 = 1296 = 6**4
*/

// <-- My Solution -->
function mulPower(n, k) {
  let result = 1n;

  for (let p = 2; p * p <= n; p++) {
    if (n % p === 0) {
      let e = 0;

      while (n % p === 0) {
        n = n / p;
        e++;
      }

      const need = (k - (e % k)) % k;

      result *= BigInt(p) ** BigInt(need);
    }
  }

  if (n > 1) {
    result *= BigInt(n) ** BigInt(k - 1);
  }

  return result;
}
