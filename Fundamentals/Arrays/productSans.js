// <-- Array Product(Sans n) -->

/*
  Given an array of numbers, your task is to return a new array where each index (new_array[i]) is equal to the product of the original array, except for the number at that index (array[i]).

  Two things to keep in mind:

  Zeroes will be making their way into some of the arrays you are given
  O(n²) solutions will not pass.
  All input arrays will be valid arrays of nonzero length.

  Examples:
  [1, 2, 3, 4]              => [24, 12, 8, 6]
  [2, 3, 4, 5]              => [60, 40, 30, 24]
  [1, 1, 1]                 => [1, 1, 1]
  [9, 0, -2]                => [0, -18, 0]
  [0, -99, 0]               => [0, 0, 0]
  [3, 14, 9, 11, 11]        => [15246, 3267, 5082, 4158, 4158]
  [-8, 1, 5, 13, -1]        => [-65, 520, 104, 40, -520]
  [4, 7, 3, 6, 2, 14, 7, 5] => [123480, 70560, 164640, 82320, 246960, 35280, 70560, 98784]
*/

// <-- My Solution -->
function productSansN(n) {
  n = n.map(BigInt);
  const out = [];

  for (let i = 0; i < n.length; i++) {
    out[i] = i > 0 ? out[i - 1] * n[i - 1] : 1n;
  }

  let postfix = 1n;
  for (let i = n.length - 1; i >= 0; i--) {
    out[i] *= i == n.length - 1 ? postfix : (postfix *= n[i + 1]);
    out[i] = out[i].toString();
  }
  
  return out;
}

// <-- Best Solution -->
const productSansBest = (numbers) => {
  let zeroes = 0;

  const prod = numbers.reduce(
    (acc, val) => acc * BigInt(val || (++zeroes && 1)),
    1n,
  );

  return numbers.map(
    (val) => BigInt(zeroes < 2 && (!zeroes || !val)) && prod / BigInt(val || 1),
  );
};
