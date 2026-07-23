// <-- Pascal's Triangle -->

/*
  In mathematics, Pascal's triangle is a triangular array of the binomial coefficients expressed with formula.

  You can read Wikipedia article on Pascal's Triangle for more information.

  Task
  Write a function that, given a depth n, returns n top rows of Pascal's Triangle flattened into a one-dimensional list/array.

  Example:
  n = 1: [1]
  n = 2: [1,  1, 1]
  n = 4: [1,  1, 1,  1, 2, 1,  1, 3, 3, 1]

  Note
  Beware of overflow. Requested terms of a triangle are guaranteed to fit into the returned type, but depending on selected method of calculations, intermediate values can be larger.
*/

// <-- Solution -->
function pascalsTriangle(n) {
  const r = [];

  for (let i = 0; i < n; i++) {
    for (var e = 0; e <= i; e++) {
      r.push(Math.round(f(i) / (f(e) * f(i - e))));
    }
  }

  return r;
}

function f(n) {
  if (n < 2) {
    return 1;
  }

  return n * f(n - 1);
}
