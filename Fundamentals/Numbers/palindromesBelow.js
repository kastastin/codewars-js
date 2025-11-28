// <-- Palindromes Below -->

/*
  The aim of this Kata is to modify the Ruby: Integer ( JS: Number CS: extension for int) class to give it the palindrome_below ( JS: palindromeBelow CS: PalindromeBelow ) method. This method returns all numbers from and including 1 up to but not including itself that are palindromes for a given base. The base values tested will be between 2 to 36.

  For example in base 2 (binary)

  1 = "1"
  2 = "10"
  3 = "11"
  4 = "100"
  Therefore 1 and 3 are palindromes in base two and the method should return the following:
      5..palindromeBelow(2)
      => [1, 3]
*/

// <-- Solution -->
Number.prototype.palindromeBelow = function (n) {
  const gen = [];
  const arr = [...Array(Number(this) + 1).keys()].slice(1);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toString(n) === arr[i].toString(n).split("").reverse().join("")) {
      gen.push(arr[i]);
    }
  }

  return gen;
};
