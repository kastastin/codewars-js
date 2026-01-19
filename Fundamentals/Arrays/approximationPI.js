// <-- PI approximation -->

/*
  The aim of the kata is to try to show how difficult it can be to calculate decimals of an irrational number with a certain precision. We have chosen to get a few decimals of the number "pi" using the following infinite series (Leibniz 1646–1716):
  PI / 4 = 1 - 1/3 + 1/5 - 1/7 + ... which gives an approximation of PI / 4.

  To have a measure of the difficulty we will count how many iterations are needed to calculate PI with a given precision of epsilon.

  Example :
  Given epsilon = 0.001 your function gets an approximation of 3.140592653839794 for PI at the end of 1000 iterations : since you are within epsilon of Math::PI you return

  iter_pi(0.001) --> [1000, 3.1405926538]
*/

// <-- Solution -->
function iterPi(epsilon) {
  let n = 1.0;
  let value = 0.0;
  let counter = 0;

  while (Math.abs(Math.PI - 4 * value) > epsilon) {
    value += 1.0 / n;
    n = -n;

    if (n > 0) n += 2.0;
    if (n < 0) n -= 2.0;

    counter += 1;
  }

  return [counter, parseFloat((value * 4).toFixed(10))];
}
