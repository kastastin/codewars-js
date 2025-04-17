// <-- Madhav array -->

/*
  A Madhav array has the following property:

  a[0] = a[1] + a[2] = a[3] + a[4] + a[5] = a[6] + a[7] + a[8] + a[9] = ...

  Complete the function/method that returns true if the given array is a Madhav array, otherwise it returns false.

  Edge cases: An array of length 0 or 1 should not be considered a Madhav array as there is nothing to compare.
*/

// <-- My Solution -->
function isMadhavArray(arr) {
  if (arr.length < 2) {
    return false;
  }

  let check = arr[0];
  let shiftBy = 1;

  while (arr.length) {
    let temp = 0;

    for (let i = 0; i < shiftBy; i++) {
      temp += arr.shift();
    }

    if (temp !== check) {
      return false;
    }

    shiftBy++;
  }

  return true;
}

// <-- Best Solution -->
function isMadhavArrayBest(arr) {
  if (arr.length < 2) {
    return false;
  }

  for (let i = 1, s = 2; i < arr.length; s++) {
    let sum = 0;

    for (let j = 0; j < s; j++, i++) {
      sum += arr[i];
    }

    if (arr[0] !== sum) {
      return false;
    }
  }

  return true;
}
