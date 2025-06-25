// <-- Number Of Carries -->

/*
  Task
  Two integer numbers are added using the column addition method. When using this method, some additions of digits produce non-zero carries to the next positions. Your task is to calculate the number of non-zero carries that will occur while adding the given numbers.

  The numbers are added in base 10.

  Example
  For a = 543 and b = 3456, the output should be 0

  For a = 1927 and b = 6426, the output should be 2

  For a = 9999 and b = 1, the output should be 4

  Input/Output
  [input] integer a
  A positive integer.

  Constraints: 1 ≤ a ≤ 10^7

  [input] integer b
  A positive integer.

  Constraints: 1 ≤ b ≤ 10^7

  [output] an integer
*/

// <-- My Solution -->
const numberOfCarries = (a, b) => {
  let [aStr, bStr] = [a.toString(), b.toString()];
  const maxLen = Math.max(aStr.length, bStr.length);

  aStr = aStr.padStart(maxLen, "0");
  bStr = bStr.padStart(maxLen, "0");

  let carry = 0;
  let counter = 0;

  for (let i = maxLen - 1; i >= 0; i--) {
    const sum = +aStr[i] + +bStr[i] + carry;

    carry = sum > 9 ? 1 : 0;

    if (carry) {
      counter++;
    }
  }

  return counter;
};

// <-- Best Solution -->
function numberOfCarriesBest(a, b) {
  let r = 0;
  let c = 0;

  while (a || b) {
    c = Math.floor(((a % 10) + (b % 10) + c) / 10);
    r += c;
    a = Math.floor(a / 10);
    b = Math.floor(b / 10);
  }

  return r;
}
