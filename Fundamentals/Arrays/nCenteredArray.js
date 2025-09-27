// <-- N-centered Array -->

/*
  An array is called centered-N if some consecutive sequence of elements of the array sum to N and this sequence is preceded and followed by the same number of elements.

  Example:

  [3,2,10,4,1,6,9] is centered-15
  because the sequence 10,4,1 sums to 15 and the sequence 
  is preceded by two elements [3,2] and followed by two elements [6,9]
  Write a method called isCenteredN that returns :

  true if its array argument is not empty and centered-N or empty and centered-0
  otherwise returns false.
*/

// <-- My Solution -->
function isCenteredN(arr, n) {
  let cntr = Math.floor(arr.length / 2);
  let sum = arr.length % 2 ? arr[cntr] : 0;

  if (sum === n) {
    return true;
  }

  for (let i = cntr - 1; i >= 0; --i) {
    sum += arr[i] + arr[arr.length - i - 1];

    if (sum === n) {
      return true;
    }
  }

  return false;
}

// <-- Best Solution -->
function isCenteredNBest(arr, n) {
  if (arr.reduce((acc, val) => acc + val, 0) === n) {
    return true;
  }

  return arr.length > 1 ? isCenteredNBest(arr.slice(1, -1), n) : false;
}
