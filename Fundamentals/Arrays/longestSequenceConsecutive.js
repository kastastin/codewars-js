// <-- Length of the longest sequence of consecutive integers -->

/*
  Given an array of integers, the sequences we are looking for are formed of consecutive numbers from the array, but not with necessarily consecutive indices. The order of the indices must be ascending though.

  Consecutive in this context means numbers in increasing order, that differ by at most one unit (they can be equal). 1,2,3 are consecutive, but also 1,1,1,2,3 and 10,10,10

  Example:

  For this array: [1,1,2,5,3] the possible such sequences are:

  [1], [2], [5], [3], [1, 1], [1, 2], [2, 3], [1, 1, 2], [1, 2, 3], [1, 1, 2, 3]
  The function to be implemented must return the length of the longest such sequence, in this case 4.
*/

// <-- Solution -->
function maxConsecutiveSequenceLength(array) {
  let longestSequence = [];
  let currentSequence = [];

  for (let i = array.length; i >= 0; i--) {
    currentSequence = [];
    currentSequence.push(array[i]);

    for (let j = i - 1; j >= 0; j--) {
      if (
        array[j] <= currentSequence[currentSequence.length - 1] &&
        currentSequence[currentSequence.length - 1] - array[j] <= 1
      ) {
        currentSequence.push(array[j]);
      }

      if (currentSequence.length > longestSequence.length) {
        longestSequence = currentSequence;
      }
    }
  }

  return longestSequence.length;
}
