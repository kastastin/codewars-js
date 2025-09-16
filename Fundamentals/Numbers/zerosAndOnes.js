// <-- Zeros and Ones -->

/*
  Given an array containing only zeros and ones, find the index of the zero that, if converted to one, will make the longest sequence of ones.

  For instance, given the array:

  [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1]
  replacing the zero at index 10 (counting from 0) forms a sequence of 9 ones:

  [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1]
                    '------------^------------'
  Your task is to complete the function that determines where to replace a zero with a one to make the maximum length subsequence.

  Notes:

  If there are multiple results, return the last one:
  [1, 1, 0, 1, 1, 0, 1, 1] ==> 5

  The array will always contain only zeros and ones.
*/

// <-- My Solution -->
function replaceZero(arr) {
  let replacePos;

  for (let i = arr.indexOf(0), [start, zero, end, maxLen] = [0, -1, i++, 0]; i <= arr.length; i++) {
    if (arr[i]) continue;

    [start, zero, end] = [zero + 1, end, i];

    if (end - start >= maxLen) {
      [replacePos, maxLen] = [zero, end - start];
    }
  }

  return replacePos;
}

// <-- Best Solution -->
function replaceZeroBest(a) {
  a = a.join``.split`0`.map((x) => x.length);

  const b = a.map((x, i, a) => x + a[i + 1]).slice(0, -1);

  return a.slice(0, b.lastIndexOf(Math.max(...b)) + 1).reduce((a, b) => a + b + 1, -1);
}
