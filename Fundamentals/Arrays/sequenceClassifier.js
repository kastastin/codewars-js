// <-- Sequence classifier -->

/*
  A series or sequence of numbers is usually the product of a function and can either be infinite or finite.

  In this kata we will only consider finite series and you are required to return a code according to the type of sequence:

  Code	Type	Example
  0	unordered	[3,5,8,1,14,3]
  1	strictly increasing	[3,5,8,9,14,23]
  2	not decreasing	[3,5,8,8,14,14]
  3	strictly decreasing	[14,9,8,5,3,1]
  4	not increasing	[14,14,8,8,5,3]
  5	constant	[8,8,8,8,8,8]
  You can expect all the inputs to be non-empty and completely numerical arrays/lists - no need to validate the data; do not go for sloppy code, as rather large inputs might be tested.

  Try to achieve a good solution that runs in linear time; also, do it functionally, meaning you need to build a pure function or, in even poorer words, do NOT modify the initial input!
*/

// <-- My Solution -->
function sequenceClassifier(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    newArr.push(arr[i + 1] - arr[i]);
  }

  const arrLength = arr.length - 1;
  const arrPos = newArr.filter((a) => a >= 0);
  const arrNeg = newArr.filter((a) => a <= 0);
  const arrZeroL = newArr.filter((a) => a === 0).length;

  if (arrZeroL === arrLength) {
    return 5;
  } else if (arrPos.length === arrLength && arrZeroL > 0) {
    return 2;
  } else if (arrPos.length === arrLength && arrZeroL === 0) {
    return 1;
  } else if (arrNeg.length === arrLength && arrZeroL > 0) {
    return 4;
  } else if (arrNeg.length === arrLength && arrZeroL === 0) {
    return 3;
  } else {
    return 0;
  }
}

// <-- Best Solution -->
function sequenceClassifier(arr) {
  if (arr.every((num) => num === arr[0])) return 5;
  if (arr.slice(1).every((num, i) => num > arr[i])) return 1;
  if (arr.slice(1).every((num, i) => num >= arr[i])) return 2;
  if (arr.slice(1).every((num, i) => num < arr[i])) return 3;
  if (arr.slice(1).every((num, i) => num <= arr[i])) return 4;

  return 0;
}
