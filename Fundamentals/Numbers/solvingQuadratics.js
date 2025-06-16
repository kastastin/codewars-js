// <-- Solving Quadratics -->

/*
  Your job is to write a function that takes A, B, and C, and returns either undefined (x cannot be found; the equation is unsolveable), or an array of possible values for x (one or two numerical values).

  NOTE: A, B, or C, can be 0. In these cases, x should still be found. This may not require the full quadratic formula to solve, but it's up to you how to find the answer.

  You should do this as efficiently as possible; square-rooting is a pretty CPU-intensive thing, so we want to use Math.sqrt as few times as possible. If you use Math.sqrt more than is necessary, you won't pass the kata.
*/

// <-- My Solution -->
function solveQuadratic(a, b, c) {
  const d = b ** 2 - 4 * a * c;

  if (d < 0) return;

  if (d === 0) return [-b / 2 / a];

  const sqrtOfD = d === 4 ? 2 : Math.sqrt(d);
  const x1 = (-b + sqrtOfD) / 2 / a;
  const x2 = (-b - sqrtOfD) / 2 / a;

  return [x1, x2];
}

// <-- Best Solution -->
function solveQuadraticBest(a, b, c) {
  const D = b * b - 4 * a * c;

  if (D < 0) return void 0;

  if (!D) return [-b / 2 / a];

  return [-1, 1].map((sign) => (-b + sign * D ** 0.5) / 2 / a);
}
