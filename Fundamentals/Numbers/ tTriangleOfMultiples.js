// <-- Triangle of Multiples -->

/*
  The total sum of the numbers in the triangle, up to the 5th line included, is 225, part of it, 144, corresponds to the total sum of the even terms and 81 to the total sum of the odd terms.

  Create a function that may output an array (in Haskell, a tuple) with three results for each value of n.

  n  ---->  [total_sum, total_even_sum, total_odd_sum]
  Our example will be:

  5  ---->  [225, 144, 81]
  Features of the random tests:

  number of tests = 100
  50 <= n <= 5000
*/

// <-- My Solution -->
function multTriangle(n) {
  let even = 0,
    odd = 1;

  const addNum = (num, doub) => {
    const newNum = doub ? num * 2 : num;
    num % 2 === 0 ? (even += newNum) : (odd += newNum);
  };

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      addNum(i * j, i !== j);
    }
  }

  return [even + odd, even, odd];
}

// <-- Best Solution -->
function multTriangleBest(n) {
  const totalSum = ((n * (n + 1)) / 2) ** 2;
  const oddSum = Math.ceil(n / 2) ** 4;

  return [totalSum, totalSum - oddSum, oddSum];
}
