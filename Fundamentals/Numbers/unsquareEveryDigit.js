// <-- Going backwards: Unsquare every digit -->

/*
  Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

  For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

  Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

  Note: The function accepts a non-negative integer and returns an integer.

  We now interrupt your regularly scheduled programming
  Given the result, return the number!

  if there is more than one possibility, return the smallest
  if there are no possibilities, return Nothing or a similar empty value
*/

// <-- Solution -->
const _unsquarings = { 0: 0n, 1: 1n, 4: 2n, 9: 3n, 16: 4n, 25: 5n, 36: 6n, 49: 7n, 64: 8n, 81: 9n };

function unsquareDigits(n) {
  const s = String(n);
  const re = /16(?!4(?!9))|25|36|49|64|81|0|1|4|9/gy;

  let x = 0n;
  let m;

  while ((m = re.exec(s))) {
    x = x * 10n + _unsquarings[m];
    
    if (re.lastIndex == s.length) {
      return x;
    }
  }

  return null;
}
