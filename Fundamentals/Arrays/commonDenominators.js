// <-- Common Denominators -->

/*
  Common denominators

  You will have a list of rationals in the form

  { {numer_1, denom_1} , ... {numer_n, denom_n} } 
  or
  [ [numer_1, denom_1] , ... [numer_n, denom_n] ] 
  or
  [ (numer_1, denom_1) , ... (numer_n, denom_n) ] 
  where all numbers are positive ints. You have to produce a result in the form:

  (N_1, D) ... (N_n, D) 
  or
  [ [N_1, D] ... [N_n, D] ] 
  or
  [ (N_1', D) , ... (N_n, D) ] 
  or
  {{N_1, D} ... {N_n, D}} 
  or
  "(N_1, D) ... (N_n, D)"
  depending on the language (See Example tests) in which D is as small as possible and

  N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.
  Example:
  convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]
*/

// <-- Solution -->
function convertFrac(lst) {
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  const lcm = lst.reduce((res, i) => (res * i[1]) / gcd(res, i[1]), 1);

  return lst.reduce((res, i) => res + "(" + (lcm / i[1]) * i[0] + "," + lcm + ")", "");
}
