// <-- Length of missing array -->

/*
  You get an array of arrays.
  If you sort the arrays by their length, you will see, that their length-values are consecutive.
  But one array is missing!


  You have to write a method, that return the length of the missing array.

  Example:
  [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

  If the array of arrays is null/nil or empty, the method should return 0.

  When an array in the array is null or empty, the method should return 0 too!
  There will always be a missing element and its length will be always between the given arrays.
*/

// <-- My Solution -->
function getLengthOfMissingArray(arrayOfArrays) {
  let result = (arrayOfArrays || [])
    .map((e) => (e ? e.length : 0))
    .sort((a, b) => a - b);
  
  if (result.includes(0)) return 0;

  for (let i = 0; i < result.length; i++) {
    if (result[i + 1] != result[i] + 1) {
      return result[i] + 1;
    }
  }
  
  return 0;
}

// <-- Best Solution -->
const getLengthOfMissingArrayBest = (matrix) =>
  !Array.isArray(matrix) ||
  !matrix[0] ||
  matrix.some((x) => !Array.isArray(x) || !x.length)
    ? 0
    : matrix
        .map((x) => x.length)
        .sort((x, y) => x - y)
        .find((x, i, list) => x + 1 < list[i + 1]) + 1;