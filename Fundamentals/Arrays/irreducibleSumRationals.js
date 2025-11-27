// <-- Irreducible Sum of Rationals -->

/*
  You will have a list of rationals in the form

  lst = [ [numer_1, denom_1] , ... , [numer_n, denom_n] ]
  or
  lst = [ (numer_1, denom_1) , ... , (numer_n, denom_n) ]

  where all numbers are positive integers. You have to produce their sum N / D in an irreducible form: this means that N and D have only 1 as a common divisor.

  Example:
  [ [1, 2], [1, 3], [1, 4] ]  -->  [13, 12]
  1/2  +  1/3  +  1/4     =      13/12
*/

// <-- My Solution -->
function sumFracts(array) {
  if (!array.length) {
    return null;
  }

  const GCD = (a, b) => (b ? GCD(b, a % b) : a);
  const LCM = (a, b) => (a * b) / GCD(a, b);

  const denominator = array.map(([a, b]) => b).reduce(LCM);
  const numerator = array.reduce((sum, [a, b]) => sum + (denominator / b) * a, 0);

  if (numerator % denominator == 0) {
    return numerator / denominator;
  }

  const gcd = GCD(numerator, denominator);

  return [numerator / gcd, denominator / gcd];
}

// <-- Best Solution -->
const GCD = (a, b) => (!b ? a : GCD(b, a % b));

function addFract([n1, d1], [n2, d2]) {
  (([n, d]) => ((gcd) => [n / gcd, d / gcd])(GCD(n, d)))([n1 * d2 + n2 * d1, d1 * d2]);
}

function sumFractsBest(list) {
  return !list.length ? null : (([n, d]) => (d === 1 ? n : [n, d]))(list.reduce(addFract));
}
