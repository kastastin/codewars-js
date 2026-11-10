// <-- Sum of nested numbers -->

/*
  Build a function that finds the sum of all numbers in a series of nested arrays raised to the power of their respective nesting levels. Numbers in the outer most array should be raised to the power of 1.

  For example,
  [1, [2], 3, [4, [5]]]
  should return 1 + 2*2 + 3 + 4*4 + 5*5*5 == 149
*/

// <-- My Solution -->
function sumNestedNumbers(arr, level = 1) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      sum += Math.pow(arr[i], level);
    } else {
      sum += sumNestedNumbers(arr[i], level + 1);
    }
  }

  return sum;
}
