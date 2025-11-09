// <-- Midpoint Sum -->

/*
  For a given list of integers, return the index of the element where the sums of the integers to the left and right of the current element are equal.

  Example:
  ints = [4, 1, 7, 9, 3, 9]
  # Since 4 + 1 + 7 = 12 and 3 + 9 = 12, the returned index would be 3

  ints = [1, 0, -1]
  # Returns None/nil/undefined/etc (depending on the language) as there
  # are no indices where the left and right sums are equal
*/

// <-- My Solution -->
const midpointSum = function (n) {
  if (n.length < 3) {
    return null;
  }

  for (let i = 1; i < n.length - 1; i++) {
    const left = n.slice(0, i).reduce((x, y) => x + y);
    const right = n.slice(i + 1).reduce((x, y) => x + y);

    if (left === right) {
      return i;
    }
  }
};

// <-- Best Solution -->
function midpointSumBest(n) {
  const sums = n.reduce((s, e, i) => {
    s.push(i ? e + s[i - 1] : e);
    return s;
  }, []);

  for (let i = 1; i < n.length - 1; i++) {
    if (sums[i - 1] == sums[n.length - 1] - sums[i]) {
      return i;
    }
  }
}
