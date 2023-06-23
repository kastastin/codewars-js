// <-- Calculate average -->

/*
  Write a function which calculates the average of the numbers in a given list.
  Note: Empty arrays should return 0.
*/

// <-- My Solution -->
function findAverage(array) {
  if (!array.length) return 0;

  return array.reduce((a, b) => a + b, 0) / array.length;
}

// <-- Best Solution -->
function findAverageBest(arr) {
  const length = arr.length;
  return !length ? 0 : arr.reduce((a, b) => a + b, 0) / length;
}
