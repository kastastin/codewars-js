// <-- Longest palindrome -->

/*
  Find the length of the longest substring in the given string s that is the same in reverse.

  As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

  If the length of the input string is 0, the return value must be 0.

  Example:
  "a" -> 1 
  "aab" -> 2  
  "abcde" -> 1
  "zzbaabcd" -> 4
  "" -> 0
*/

// <-- Solution -->
function longestPalindrome(s) {
  const isPalindrome = (str) => str === [...str].reverse().join``;

  for (let len = s.length; len >= 0; len--) {
    for (let i = 0; i + len <= s.length; i++) {
      if (isPalindrome(s.slice(i, i + len))) {
        return len;
      }
    }
  }
}
