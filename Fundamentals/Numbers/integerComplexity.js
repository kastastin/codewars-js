// <-- Integer complexity -->

/*
  Integer complexity is the smallest number of 1s you need to make a certain positive number, using only addition and multiplication. Because we typically use infix notation for math expressions, grouping with parenthesis is also allowed.

  Your goal is for a given positive integer to compute its integer complexity.
  Your program will be tested against inputs up to 200 000. Even relatively fast solutions may time out occasionally. If your solution times out and it's close to finishing, try again.

  Examples:
  1 -> 1    1
  2 -> 2    1 + 1
  3 -> 3    1 + 1 + 1
  6 -> 5    (1 + 1 + 1) * (1 + 1)
  8 -> 6    (1 + 1) * (1 + 1) * (1 + 1)
*/

// <-- Solution -->
const integerComplexity = (function (N) {
  const cache = new Uint8Array(N + 1).fill(-1);

  cache[0] = 0;

  for (let i = 1; i <= N; i++) {
    cache[i] = Math.min(cache[i - 1] + 1, cache[i]);

    for (let j = 2; j * i <= N; j++) {
      cache[i * j] = Math.min(cache[i * j], cache[i] + cache[j]);
    }
  }

  return (n) => cache[n];
})(200_000);
