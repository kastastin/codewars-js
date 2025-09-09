// <-- Circularly Sorted Array -->

/*
  An array is circularly sorted if the elements are sorted in ascending order, but displaced, or rotated, by any number of steps.

  Complete the function/method that determines if the given array of integers is circularly sorted.

  Examples
  These arrays are circularly sorted (true):

  [2, 3, 4, 5, 0, 1]       -->  [0, 1] + [2, 3, 4, 5]
  [4, 5, 6, 9, 1]          -->  [1] + [4, 5, 6, 9]
  [10, 11, 6, 7, 9]        -->  [6, 7, 9] + [10, 11]
  [1, 2, 3, 4, 5]          -->  [1, 2, 3, 4, 5]
  [5, 7, 43, 987, -9, 0]   -->  [-9, 0] + [5, 7, 43, 987]
  [1, 2, 3, 4, 1]          -->  [1] + [1, 2, 3, 4]

  While these are not (false):
  [4, 1, 2, 5]
  [8, 7, 6, 5, 4, 3]
  [6, 7, 4, 8]
  [7, 6, 5, 4, 3, 2, 1]
*/

// <-- My Solution -->
function isCircleSorted(arr) {
  let integer = 0;

  for (let a = 0; a < arr.length; a++) {
    if (arr[a] > arr[(a + 1) % arr.length]) {
      integer++;
    }
  }

  return integer <= 1;
}

// <-- Best Solution -->
function isCircleSortedBest(arr) {
  return arr.reduce((n, x, i) => n + (x > arr[(i + 1) % arr.length]), 0) <= 1;
}
