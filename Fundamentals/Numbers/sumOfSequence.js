// <-- Sum of a Sequence -->

/*
  The task is simple to explain: simply sum all the numbers from the first parameter being the beginning to the second parameter being the upper limit (possibly included), going in steps expressed by the third parameter:

  sequenceSum(2,2,2) === 2
  sequenceSum(2,6,2) === 12 // 2 + 4 + 6
  sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
  sequenceSum(1,5,3) === 5 // 1 + 4

  If it is an impossible sequence (with the beginning being larger the end and a positive step or the other way around), just return 0. See the provided test cases for further examples :)

  Note: differing from the other base kata, much larger ranges are going to be tested, so you should hope to get your algo optimized and to avoid brute-forcing your way through the solution.
*/

// <-- My Solution -->
function sequenceSum(begin, end, step) {
  if (begin > end && step > 0) return 0;
  if (begin < end && step < 0) return 0;

  const b = end - ((end - begin) % step);
  const t0 = (b - begin) / step + 1;
  const t1 = (b + begin) / 2;

  return t0 * t1;
}

// <-- Best Solution -->
function sequenceSumBest(begin, end, step) {
  const n = Math.floor((end - begin) / step) + 1;

  return n <= 0 ? 0 : ((2 * begin + step * (n - 1)) * n) / 2;
}
