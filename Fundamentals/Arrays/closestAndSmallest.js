// <-- Closest and Smallest -->

/*
  Input
  a string strng of n positive numbers (n = 0 or n >= 2)
  Let us call weight of a number the sum of its digits. For example 99 will have "weight" 18, 100 will have "weight" 1.

  Two numbers are "close" if the difference of their weights is small.

  Task:
  For each number in strng calculate its "weight" and then find two numbers of strng that have:

  the smallest difference of weights ie that are the closest
  with the smallest weights
  and with the smallest indices (or ranks, numbered from 0) in strng
  Output:
  an array of two arrays, each subarray in the following format:
  [number-weight, index in strng of the corresponding number, original corresponding number in strng]

  or a pair of two subarrays (Haskell, Clojure, FSharp) or an array of tuples (Elixir, C++)

  or a (char*) in C or a string in some other languages mimicking an array of two subarrays or a string

  or a matrix in R (2 rows, 3 columns, no columns names)

  The two subarrays are sorted in ascending order by their number weights if these weights are different, by their indexes in the string if they have the same weights.

  Examples:
  Let us call that function closest

  strng = "103 123 4444 99 2000"
  the weights are 4, 6, 16, 18, 2 (ie 2, 4, 6, 16, 18)

  closest should return [[2, 4, 2000], [4, 0, 103]] (or ([2, 4, 2000], [4, 0, 103])
  or [{2, 4, 2000}, {4, 0, 103}] or ... depending on the language)
  because 2000 and 103 have for weight 2 and 4, their indexes in strng are 4 and 0.
  The smallest difference is 2.
  4 (for 103) and 6 (for 123) have a difference of 2 too but they are not 
  the smallest ones with a difference of 2 between their weights.
*/

// <-- Solution -->
function closest(str) {
  if (str === "") {
    return [];
  }

  const def = (val, def) => (typeof val === "undefined" ? def : val);
  const arr = str
    .split(" ")
    .map((s, idx) => {
      const num = +s;
      const weight = [...s].reduce((a, b) => a + +b, 0);
      return { num, weight, idx };
    })
    .sort((a, b) => a.weight - b.weight);

  for (let i = 1; i < arr.length; ++i) {
    const wd = arr[i].weight - arr[i - 1].weight;

    arr[i].wd = Math.min(wd, def(arr[i].wd, Infinity));
    arr[i - 1].wd = Math.min(wd, def(arr[i - 1].wd, Infinity));
  }

  return arr
    .sort((a, b) => {
      const dwd = a.wd - b.wd;
      const dw = a.weight - b.weight;
      const di = a.idx - b.idx;

      if (dwd !== 0) return dwd;
      if (dw !== 0) return dw;

      return di;
    })
    .slice(0, 2)
    .map((o) => [o.weight, o.idx, o.num]);
}
