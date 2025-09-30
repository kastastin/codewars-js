// <-- Split and Join -->

/*
  There is a 2D array arr:
  [[1],[2,3],[4,5,6],[7,8,9,10]]

  Task1: Write a function split. Split 2D array to two arrays:

  Result:
  array 1: all numbers in 2D array   array 2: Leave all subarrays and
                                                fill in the length of 
                                                each subarray
    [  [1,2,3,4,5,6,7,8,9,10],            [[1],[2],[3],[4]]  ]

  Task2: Write a function join. Join two array(like the result above) to one array(like the arr above)
*/

// <-- My Solution -->
function split(arr) {
  const all = [];

  arr.forEach((array) => {
    array.forEach((x) => {
      all.push(x);
    });
  });

  const len = arr.map((array) => [array.length]);

  return [all, len];
}

function join(arr1, arr2) {
  const res = [];

  arr2.forEach((len) => {
    const temp = arr1.splice(0, len);
    res.push(temp);
  });

  return res;
}

// <-- Best Solution -->
function splitBest(arr) {
  return [arr.flat(), arr.map(({ length }) => [length])];
}

function joinBest([...arr1], arr2) {
  return arr2.map(([length]) => arr1.splice(0, length));
}
