// <-- Grouped by commas -->

/*
  Finish the solution so that it takes an input n (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.

  Assume: 0 <= n <= 2147483647

  Examples
        1  ->           "1"
        10  ->          "10"
      100  ->         "100"
      1000  ->       "1,000"
    10000  ->      "10,000"
    100000  ->     "100,000"
  1000000  ->   "1,000,000"
  35235235  ->  "35,235,235"
*/

// <-- My Solution -->
function groupByCommas(n) {
  let arr = n.toString().split("");

  if (arr.length <= 3) {
    return arr.join("");
  }

  for (let i = arr.length - 3; i > 0; i -= 3) {
    arr.splice(i, 0, ",");
  }

  return arr.join("");
}

// <-- Best Solution -->
function groupByCommasBest(n) {
  return n.toLocaleString();
}
