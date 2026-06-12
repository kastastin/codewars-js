// <-- Maximum Contiguous Sum -->

/*
  Given an unsorted array of integer values, find the maximum positive sum of any contiguous range within the array.

  An array containing only negative values can return 0. Your solution should be efficient enough to not throw a timeout exception.

  Example:
  maxContiguousSum([3, -4, 8, 7, -10, 19, -3]); // returns 24
  maxContiguousSum([-8, -10, -12, -2, -3, 5]); // returns 5

  Visual example:
  [3, -4, 8, 7, -10, 19, -3]
        |_____________|
              ||
              \/
              24
*/

// <-- Solution -->
function maxContiguousSum(arr) {
  let res = 0;
  let cur = 0;

  for (const i of arr) {
    cur = Math.max(0, cur + i);
    res = Math.max(res, cur);
  }

  return res;
}
