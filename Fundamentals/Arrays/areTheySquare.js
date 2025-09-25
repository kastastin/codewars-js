// <-- Are they square 2? -->

/*
  Your task - Write a function that checks whether all elements in a multidimensional array are square numbers. The function should be able to take any number of array elements and any number of dimensions.

  Your function should return true if all elements are square numbers and false if not.

  An entirely empty array should return undefined/NULL depending on the language you are completing this Kata in.

  You can assume that all array elements will be positive integers.

  Examples:

  isSquare([1, 4, 9, 16, 25, 36]);
  //returns true

  isSquare([1, 2, 3, 4, 5, 6]);
  //returns false

  isSquare([1, [4], [9, 16, 25], [36, 49, [64, 81]], [100, [121, 144, [169]]], [196, [225, [256, 289, [324, [361, 400]]]]]]);
  //returns true
*/

// <-- My Solution -->
function isSquare(arr) {
  let res;

  for (let i = 0; i < arr.length; i++) {
    res = true;

    if (typeof arr[i] == "number" && (Math.sqrt(arr[i]) + "").indexOf(".") > -1) return false;
    if (typeof arr[i] == "object") res = isSquare(arr[i]);
  }

  return res;
}

// <-- Best Solution -->
function isSquareBest(arr) {
  return arr.length ? arr.every((val) => (val.length ? isSquare(val) : !(val ** 0.5 % 1))) : undefined;
}
