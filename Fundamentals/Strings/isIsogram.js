// <-- Is it an isogram? -->

/*
  An isogram (also known as a "nonpattern word") is a logological term for a word or phrase without a repeating letter. It is also used by some to mean a word or phrase in which each letter appears the same number of times, not necessarily just once.

  You task is to write a method isogram? that takes a string argument and returns true if the string has the properties of being an isogram and false otherwise. Anything that is not a string is not an isogram (ints, nils, etc.)

  Properties:
  must be a string
  cannot be nil or empty
  each letter appears the same number of times (not necessarily just once)
  letter case is not important (= case insensitive)
  non-letter characters (e.g. hyphens) should be ignored
*/

// <-- My Solution -->
function isIsogram(string) {
  if (typeof string !== "string") {
    return false;
  }

  const counts = {};
  const clean = string.toLowerCase().replace(/[^a-z]/g, "");

  for (const char of clean) {
    counts[char] = (counts[char] || 0) + 1;
  }

  return clean.length > 0 && Object.values(counts).every((count, idx, array) => count === array[0]);
}

// <-- Best Solution -->
function isIsogramBest(str) {
  if (typeof str !== "string" || !str) {
    return false;
  }

  str = str.toLowerCase().replace(/\W/g, "");

  return str.length % new Set([...str]).size == 0;
}
