// <-- Longest palindrome -->

/*
  A palindrome is a series of characters that read the same forwards as backwards, such as "hannah", "racecar" and "lol".

  For this Kata, you need to write a function that takes a string of characters and returns the length, as an integer value, of the longest alphanumeric palindrome that can be formed by combining the characters in any order. You are free to use the characters as many times as it appears in that string. The function should not be case-sensitive.

  For example:

  Given "Hannah", the function should return 6.
  Given "xyz__a_/b0110//a_zyx", the function should return 13, one possible alphanumeric palindrome is "xyza01b10azyx".

*/

// <-- My Solution -->
function longestPalindrome(str) {
  const s = str.toLowerCase();
  const arr = "abcdefghijklmnopqrstuvwxyz0123456789";
  let count = 0;

  for (let i = 0; i < arr.length; ++i) {
    let c = 0;

    for (let j = 0; j < str.length; ++j) {
      if (s[j] == arr[i]) {
        c++;
      }
    }

    count += Math.floor(c / 2) * 2;
  }
  return count == s.length ? count : ++count;
}

// <-- Best Solution -->
const longestPalindromeBest = (s, parity = 0) =>
  s
    .toLowerCase()
    .split("")
    .sort()
    .join("")
    .replace(/[\W_]|(.)\1|(.)/g, (x, double, single) =>
      double ? x : (single && (parity = 1), ""),
    ).length + parity;
