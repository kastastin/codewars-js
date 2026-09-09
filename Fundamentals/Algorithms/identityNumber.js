// <-- Turkish National Identity Number -->

/*
  Every Turkish citizen has an identity number whose validity can be checked by these set of rules:

  It has 11 digits and the first digit can't be zero
  Take the sum of 1st, 3rd, 5th, 7th and 9th digit and multiply it by 7. Then subtract the sum of 2nd, 4th, 6th and 8th digits from this value. Modulo 10 of the result should be equal to the 10th digit
  Sum of first ten digits' modulo 10 should be equal to the 11th digit
  Task
  Your task is to write a function to check if the given number is a valid Turkish ID number, and return true or false accordingly. Return false for any invalid input too (e.g. strings).

  Example
  input = 10167994524

  1 + 1 + 7 + 9 + 5 = 23  // sum of 1st, 3rd, 5th, 7th and 9th digit
  23 * 7 = 161            // sum multiplied by 7
  0 + 6 + 9 + 4 = 19      // sum of 2nd, 4th, 6th and 8th digits
  161 - 19 = 142          // subtracted from the first value

  142 % 10 = 2            // modulo 10 of the result
  10167994524             // should be equal to the 10th digit
          ^

  1 + 0 + 1 + 6 + 7 + 9 + 9 + 4 + 5 + 2 = 44
                          // sum of first 10 digits
  44 % 10 = 4             // modulo 10 of the result
  10167994524             // should be equal to the 11th digit
            ^
*/

// <-- Solution -->
function checkValidTrNumber(n) {
  const arr = n.toString().split("").map(Number);

  if (arr[0] == 0) {
    return false;
  }

  let sum = 0;

  for (let i = 0; i < 10; i++) {
    sum += Number(arr[i]);
  }

  return sum % 10 == arr[10] ? true : false;
}
