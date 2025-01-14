// <-- nth user -->

/*
  A product to do market research, n users to participate in the activities. The researchers assigned each user a number. The first user's number is 1, the second users numbered 2, and so on...

  Strangely, there are no digits 4 and 9 in the user's numbers, that is to say the number of 3rd users is 3, the number of 4th users is 5... the number of 8th users is 10... like this:

  user   1st 2nd 3rd 4th 5th 6th 7th 8th 9th 10th ........ nth
  number  1   2   3   5   6   7   8  10   11  12  ........ ??
  Please calculate, what is the number of the nth user?

  Rules
  Write a function that takes an argument n (meaning the nth user), and returns the user's number in string format.

  Examples
  n =  1 : Your function should return "1"
  n =  4 : Your function should return "5"
  n =  8 : Your function should return "10"
  n = 10 : Your function should return "12"
  n = 20 : Your function should return "25"
*/

// <-- My Solution -->
function userNumber(n) {
  const result = [];
  let num = Math.abs(Number(n));
  const keys = [0, 1, 2, 3, 5, 6, 7, 8, 9, 10];

  do {
    const index = num % 8;
    result.unshift(keys[index]);
    num = Math.trunc(num / 8);
  } while (num !== 0);

  return result.join("");
}

// <-- Best Solution -->
function userNumberBest(n) {
  return n.toString(8).replace(/[4-7]/g, (x) => +x + 1);
}
