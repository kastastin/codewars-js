// <-- Parameter Of Number -->

/*
  Let's define a parameter of number n as the least common multiple (LCM) of the sum of its digits and their product.

  Calculate the parameter of the given number n.

  Input/Output
  [input] integer n

  A positive integer. It is guaranteed that no zero appears in n.

  [output] an integer

  The parameter of the given number.

  Example
  For n = 22, the output should be 4.

  Both the sum and the product of digits equal 4, and LCM(4, 4) = 4.

  For n = 1234, the output should be 120.

  1+2+3+4=10 and 1*2*3*4=24, LCM(10,24)=120
*/

// <-- My Solution -->
function parameter(n) {
  const sum = String(n)
    .split("")
    .reduce((acc, val) => acc + +val, 0);

  const mult = String(n)
    .split("")
    .reduce((acc, val) => acc * +val, 1);

  let LCM = mult;

  while (n) {
    if (!(LCM % mult) && !(LCM % sum)) return LCM;
    LCM += mult;
  }
}

// <-- Best Solution -->
function parameterBest(n) {
  let digits = (n) => [...String(n)].map((d) => +d);
  let sum = (n) => digits(n).reduce((a, b) => a + b, 0);
  let prod = (n) => digits(n).reduce((a, b) => a * b, 1);
  let gcd = (a, b) => (b ? gcd(b, a % b) : a);
  let lcm = (a, b) => (a / gcd(a, b)) * b;

  return lcm(sum(n), prod(n));
}
