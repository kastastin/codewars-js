// <-- Largest Palindromic Product -->

/*
  A palindromic number is a number whose digits are in the same order when read both forward and backward.

  For example, 11, 33, 1331, and 98389 are all palindromic numbers.

  Write a function which, when given two integers lower and upper, returns the largest palindromic number that's a product of any two integers between the inclusive range of lower and upper.

  For example, if lower = 10 and upper = 99, the largest palindromic product that can be made from two integers within the range is: 99 * 91 = 9009.

  Remember that you can use the same number twice, and that the range is inclusive. So, for lower = 1 and upper = 11, the largest palindrome would be 11 * 11 = 121.

  A single digit always counts as a palindrome.

  If no palindromic products can be made, return NaN.

  This kata won't give you invalid arguments, so you may rely on the fact that upper and lower will always be valid integers.

  upper will always be greater than lower, and both upper and lower will never be less than 1 or greater than 999999.

  This kata is mostly about optimization. Naïve solutions will time out, so you'll have to find ways to avoid unnecessary or redundant calculations.
*/

// <-- Solution -->
function largestPalindromicProduct(lower, upper) {
  let max = 0;

  for (let i = upper; i >= lower; i--) {
    for (let j = upper; j >= i; j--) {
      if (i * j <= max) {
        break;
      }

      if ((i * j).toString() == (i * j).toString().split("").reverse().join("")) {
        max = j * i;
      }
    }
  }
  return max == 0 ? NaN : max;
}
