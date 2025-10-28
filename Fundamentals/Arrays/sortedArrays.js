// <-- Sorted Arrays -->

/*
  Given any number of arrays each sorted in ascending order, find the nth smallest number of all their elements.

  All the arguments except the last will be arrays, the last argument is n.

  nthSmallest([1,5], [2], [4,8,9], 4) // returns 5 because it's the 4th smallest value
*/

// <-- My Solution -->
function nthSmallest(...arr) {
  const smallestIndex = arr.pop() - 1;

  let resArr = [];

  for (const arrNums of arr) {
    resArr = [...resArr, ...arrNums];
  }

  resArr.sort((a, b) => a - b);

  return resArr[smallestIndex];
}

// <-- Best Solution -->
function nthSmallestBest(...args) {
  const n = args.pop();

  return args.flat(Infinity).sort((a, b) => a - b)[n - 1];
}
