// <-- Next multiple of 5 -->

/*
  Write a function that receives a non-negative integer n ( n >= 0 ) and returns the next higher multiple of five of that number, obtained by concatenating the shortest possible binary string to the end of this number's binary representation.

  Examples
  1.  nextMultipleOfFive(8)
  Steps:

  8 to binary == '1000'
  concatenate shortest possible string '11' to obtain '1000' + '11' == '100011'
  '100011' to decimal == 35 => the answer
  ('001' would do the job too, but '11' is the shortest string here)

  2.  nextMultipleOfFive(5)
  Steps:

  5 to binary =='101'
  concatenate shortest possible string '0' to obtain '101' + '0' == '1010'
  '1010' to decimal == 10
  (5 is already a multiple of 5, obviously, but we're looking for the next multiple of 5)

  Note
  Numbers up to 1e10 will be tested, so you need to come up with something smart.
*/

// <-- My Solution -->
const nextMultipleOfFive = (n) => {
  switch (n % 5) {
    case 0:
      return 2 * n || 5;
    case 1:
      return 4 * n + 1;
    case 2:
      return 2 * n + 1;
    case 3:
      return 4 * n + 3;
    case 4:
      return 8 * n + 3;
  }
};

// <-- Best Solution -->
function nextMultipleOfFiveBest(n) {
  return n > 0 ? [n * 2, n * 4 + 1, n * 2 + 1, n * 4 + 3, n * 8 + 3][n % 5] : 5;
}
