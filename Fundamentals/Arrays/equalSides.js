// <-- Equal Sides Of An Array -->

/*
  You are going to be given array of integers. Your job is to take that array and find an index N where the sum of the integers to left of N is equal to the sum of the integers to the right of N.

  If there is no index that would make this happen, return -1.

  For example:
  Let's say you are given the array {1,2,3,4,3,2,1}:
  Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

  Let's look at another one.
  You are given the array {1,100,50,-51,1,1}:
  Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.
*/

// <-- My Solution -->
function findEvenIndex(arr) {
  const right = arr.reduce((s, n) => s + n, 0);

  let left = 0;

  for (let i = 0; i < arr.length; i++) {
    right -= arr[i];

    if (left === right) return i;

    left += arr[i];
  }

  return -1;
}

// <-- Best Solution -->
function findEvenIndexBest(arr) {
  return arr.findIndex(
    (e, i, a) =>
      a.slice(0, i).reduce((p, c) => p + c, 0) ==
      a.slice(i + 1).reduce((p, c) => p + c, 0),
  );
}
