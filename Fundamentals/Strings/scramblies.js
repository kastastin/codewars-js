// <-- Scramblies -->

/*
  Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

  Notes:
  Only lower case letters will be used (a-z). No punctuation or digits will be included.
  Performance needs to be considered.

  Examples:
  scramble('rkqodlw', 'world') ==> True
  scramble('cedewaraaossoqqyt', 'codewars') ==> True
  scramble('katas', 'steak') ==> False
*/

// <-- Solution -->
function scramble(str1, str2) {
  const str1Hash = {};
  let containsScramble = true;

  for (const char1 of str1) {
    str1Hash[char1] ? (str1Hash[char1] += 1) : (str1Hash[char1] = 1);
  }

  for (const char2 of str2) {
    str1Hash[char2] ? (str1Hash[char2] -= 1) : (containsScramble = false);
  }

  return containsScramble;
}
