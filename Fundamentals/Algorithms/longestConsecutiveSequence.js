// <-- Longest Consecutive Sequence of Squares -->

/*
  In this kata you're expected to find the longest consecutive sequence of positive squares that sums up to a number.

  Your task is to write the function longestSequence(n) that either finds the longest consecutive sequence of squares that sums to the number n, or determines that no such sequence exists.

  longestSequence(50) // => [3, 4, 5]
  9 + 16 + 25 = 50

  longestSequence(595) // => [6, 7, 8, 9, 10, 11, 12]

  longestSequence(10) // => []
  Return an empty array if no such sequence exists.
*/

// <-- Solution -->
function longestSequence(n) {
  const longestSeq = [];
  const currentSeq = [];

  let currentNum = 0;
  const maxInt = Math.floor(Math.sqrt(n, 2));

  for (let i = maxInt; i > 0; i--) {
    let currentSum = currentNum + Math.pow(i, 2);

    currentNum = currentSum;
    currentSeq.unshift(i);

    if (currentSum > n) {
      currentNum -= Math.pow(currentSeq.pop(), 2);
    } else if (currentSum === n && currentSeq.length > longestSeq.length) {
      longestSeq = currentSeq.slice();
    }
  }

  return longestSeq;
}
