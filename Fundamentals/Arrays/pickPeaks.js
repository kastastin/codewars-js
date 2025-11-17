// <-- Pick peaks -->

/*
  In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

  For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).

  The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.

  Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)

  All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.
*/

// <-- My Solution -->
function pickPeaks(arr) {
  const pos = [];
  const peaks = [];
  let lastIncreaseIndex = null;

  arr.forEach(function (e, index) {
    if (lastIncreaseIndex) {
      if (arr[index - 1] > arr[index]) {
        pos.push(lastIncreaseIndex);
        peaks.push(arr[lastIncreaseIndex]);
        lastIncreaseIndex = null;
      }
    }

    if (index && arr[index] > arr[index - 1]) {
      lastIncreaseIndex = index;
    }
  });

  return { pos: pos, peaks: peaks };
}

// <-- Best Solution -->
function pickPeaksBest(arr) {
  const pos = arr
    .map((x, i) => (i > 0 ? Math.sign(x - arr[i - 1]) * i : 0))
    .filter((i) => i != 0)
    .filter((x, i, a) => i < a.length - 1 && a[i + 1] < 0 && x > 0);

  return { pos: pos, peaks: pos.map((i) => arr[i]) };
}
