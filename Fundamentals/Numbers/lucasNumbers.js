// <-- Lucas numbers -->

/*
  Lucas numbers are numbers in a sequence defined like this:

  L(0) = 2
  L(1) = 1
  L(n) = L(n-1) + L(n-2)
  Your mission is to complete the function that returns the nth term of this sequence.

  Note: It should work for negative numbers as well; how you do this is you flip the equation around, so for negative numbers: L(n) = L(n+2) - L(n+1)

  Examples
  L(-10) = 123
  L(-5)  = -11
  L(-1)  =  -1
  L(0)   =   2
  L(1)   =   1
  L(5)   =  11
  L(10)  = 123
*/

// <-- My Solution -->
const lucasnum = (n) => {
  const phi = (1 + Math.sqrt(5)) / 2;
  const psi = (1 - Math.sqrt(5)) / 2;

  return Math.round(Math.pow(phi, n) + Math.pow(psi, n));
};

// <-- Best Solution -->
function lucasnumBest(n) {
  const d = n < 0 ? -1 : 1;

  if (n == 0) return 2;
  if (n == 1) return 1;

  return lucasnum.cache[n]
    ? lucasnum.cache[n]
    : (lucasnum.cache[n] = lucasnum(n - d * 2) + d * lucasnum(n - d * 1));
}

lucasnum.cache = {};
