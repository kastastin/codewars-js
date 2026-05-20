// <-- Doubly Not Less -->

/*
  You are given an integer n(in string format). Find the smallest integer m such that both m and its reversed version (a number that is obtained by reversing the order of its digits) are not less than n.

  Note: After reversing all leading zeros are omitted.

  Examples
  For n = "5314", the result should be `"5316".

  Because both numbers 5316 and 6135 are not less than 5314.

  The result is not 5315 because 5135(5315 reversed) < 5314.

  For n = "23456", the result is also "23456".

  Input/Output
  [input] string n
  string representation of a positive integer n. 0 < n < 10^100

  [output] a string
  string representation of an integer m
*/

// <-- Solution -->
function doublyNotLess(n) {
  const reverse = n.split("").reverse();

  for (let i = 0; i < n.length; i++) {
    if (BigInt(reverse.join("")) < BigInt(n)) {
      if (reverse[i] < 9) {
        reverse[i] = String(+reverse[i] + 1);
        i--;
      }
    } else {
      break;
    }
  }

  return reverse.reverse().join("");
}
