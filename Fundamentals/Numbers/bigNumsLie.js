// <-- Big nums and lie -->

/*
  Write a function that given an array of numbers >= 0, will arrange them such that they form the biggest number.

  For example:
  [1, 2, 3] --> "321" (3-2-1)
  [3, 30, 34, 5, 9] --> "9534330" (9-5-34-3-30)

  The results will be large so make sure to return a string.
*/

// <-- My Solution -->
function biggest(nums) {
  const arr = nums.map(String);
  const sorted = arr.sort((a, b) => (b + a).localeCompare(a + b));

  return sorted.join("").replace(/^0+/, "0");
}

// <-- Best Solution -->
function biggestBest(numbers) {
  return numbers.map(String).sort((a, b) => b + a - (a + b)).join``.replace(/^0+/, "0");
}
