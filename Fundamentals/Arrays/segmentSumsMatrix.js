// <-- Segment Sums Matrix -->

/*
  For a given array of integers, construct a square matrix A with side length equal to the length of array, where A[i, j] is equal to the sum of all elements of the array with indexes between i and j, inclusive.

  Note that between i and j means a[i] + a[i + 1] + ... + a[j] for the case i ≤ j, and a[j] + a[j + 1] + ... + a[i] for the case i > j.

  Input/Output
  [input] integer array arr

  2 ≤ arr.length ≤ 10, 1 ≤ arr[i] ≤ 10.

  [output] 2D integer array

  Example
  For arrr = [1, 2, 3], the output should be

  [ [1, 3, 6], [3, 2, 5], [6, 5, 3] ]
*/

// <-- My Solution -->
function segmentSumsMatrix(arr) {
  const n = arr.length;
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i <= j) {
        matrix[i][j] = arr
          .slice(i, j + 1)
          .reduce((sum, value) => sum + value, 0);
      } else {
        matrix[i][j] = arr
          .slice(j, i + 1)
          .reduce((sum, value) => sum + value, 0);
      }
    }
  }

  return matrix;
}

// <-- Best Solution -->
function segmentSumsMatrixBest(arr) {
  const acc = [];
  
  arr.reduce((s, v) => (acc.push((s += v)), s), 0);
  
  return arr.map((_, i) =>
    arr.map((_, j) => {
      let [a, b] = j < i ? [j, i] : [i, j];
      return acc[b] - (acc[a - 1] || 0);
    }),
  );
}