// <-- Fix array sequence -->

/*
  Assume we take a number x and perform any one of the following operations:

  a) Divide x by 3 (if it is divisible by 3), or
  b) Multiply x by 2
  After each operation, we write down the result. If we start with 9, we can get a sequence such as:

  [9,3,6,12,4,8] -- 9/3=3 -> 3*2=6 -> 6*2=12 -> 12/3=4 -> 4*2=8
  You will be given a shuffled sequence of integers and your task is to reorder them so that they conform to the above sequence. There will always be an answer.

  For the above example:
  solve([12,3,9,4,6,8]) = [9,3,6,12,4,8].
*/

// <-- My Solution -->
function solve(arr) {
  const res = arr.filter((x, _, a) => !a.includes(x * 3) && !a.includes(x / 2));

  let index = 0;

  while (res.length < arr.length) {
    if (arr.includes(res[index] * 2)) {
      res.push(res[index++] * 2);
    } else {
      res.push(res[index++] / 3);
    }
  }

  return res;
}

// <-- Best Solution -->
const threesOf = (n) => (n % 3 == 0 ? threesOf(n / 3) + 1 : 0);

const solveBest = (array) => array.sort((a, b) => threesOf(b) - threesOf(a) || a - b);
