// <-- Form The Minimum -->

/*
  Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

  Note that an array of 0 or 1 integer(s) is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.

  For example:
  inAscOrder([1,2,4,7,19]); // returns true
  inAscOrder([1,2,3,4,5]); // returns true
  inAscOrder([1,6,10,18,2,4,20]); // returns false
  inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order
*/

// <-- My Solution -->
function inAscOrder(arr) {
  return arr
    .slice()
    .sort((a, b) => a - b)
    .every((x, i) => x === arr[i]);
}

// <-- Best Solution -->
function inAscOrderBest(arr) {
  return arr.slice(1).every((x, i) => x >= arr[i]);
}
