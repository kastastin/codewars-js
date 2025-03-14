// <-- Check a Curious Divisibility -->

/*
  We want to find the integers such that its score_pow multiplied by a certain integer k is divisible by the sum of the divisors of score_prod. (In the sum of the divisors, 1 and the score_prod themselves are addens.)

  In this kata you have to create a function that will receive three arguments:

  The extreme values of a range [a, b], a as a start value and b as an upper limit, both included.

  An integer k such that 1 <= k <= 100

  The function should output the amount of found integers and an array with the sorted integers that fulfill the above condition.

  Let's see some cases:

  a = 100
  b = 200
  k = 1
  # Should return (7, [100, 110, 120, 135, 195, 197, 200])

  a = 500
  b = 700
  k = 2
  # Should return (18, [500, 510, 531, 532, 535, 553, 570, 611, 612, 614, 617, 625, 627, 631, 634, 671, 695, 699])

  a = 500
  b = 700
  k = 3
  # Should return (16, [501, 511, 532, 535, 553, 560, 571, 581, 613, 614, 617, 620, 625, 644, 645, 674])

  a = 500
  b = 700
  k = 4
  # Should return (30, [500, 510, 531, 532, 534, 535, 553, 558, 570, 600, 611, 612, 614, 615, 617, 625, 627, 631, 634, 636, 637, 640, 671, 675, 679, 682, 692, 693, 695, 699])
  For the tests always a < b
*/

// <-- My Solution -->
function findInt(a, b, k) {
  const lst = [];

  for (let n = a; n <= b; n++) {
    let [score_prod, score_pow] = [...n.toString()].reduce(
      ([prod, pow], d, i) => [prod + d * (i + 1), pow + Math.pow(i + 1, +d)],
      [0, 0],
    );

    if ((score_pow * k) % divisorSum(score_prod) === 0) lst.push(n);
  }

  return [lst.length, lst];
}

function divisorSum(n) {
  const arr = [1];

  for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) arr.push(i);

  return (
    arr.concat(arr.map((e) => n / e)).reduce((s, n) => s + n, 0) -
    (Math.sqrt(n) % 1 ? 0 : Math.sqrt(n))
  );
}

// <-- Best Solution -->
function findInt(a, b, k) {
  const f = (x, g) =>
      ("" + x)
        .split("")
        .map(g)
        .reduce((a, b) => a + b),
    score_prod = (x) => f(x, (x, i) => (i + 1) * +x),
    score_pow = (x) => f(x, (x, i) => (i + 1) ** +x),
    result = [];

  for (let i = a; i <= b; i++) {
    const pow = score_pow(i) * k,
      prod = score_prod(i),
      sum = [...Array(prod + 1).keys()]
        .filter((x) => x && prod % x === 0)
        .reduce((a, b) => a + b);
    if (pow % sum === 0) result.push(i);
  }

  return [result.length, result];
}
