// <-- Anagram -->

/*
  An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
  Note: anagrams are case insensitive
  Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

  Examples
  "foefet" is an anagram of "toffee"
  "Buckethead" is an anagram of "DeathCubeK"
*/

// <-- My Solution -->
var isAnagram = function (test, original) {
  if (test.length != original.length) return false;

  return (
    original.toLowerCase().split("").sort().join("") ===
    test.toLowerCase().split("").sort().join("")
  );
};

// <-- Best Solution -->
var isAnagramBest = function (t, o) {
  return (
    t.toLowerCase().split("").sort().join("") ==
    o.toLowerCase().split("").sort().join("")
  );
};
