// <-- Count consonants -->

/*
  Complete the function that takes a string of English-language text and returns the number of consonants in the string.

  Consonants are all letters used to write English excluding the vowels a, e, i, o, u.
*/

// <-- My Solution -->
function consonantCount(str) {
  return str.replace(/[aeiouAEIOU]|[^a-zA-Z]/g, "").length;
}

// <-- Best Solution -->
function consonantCountBest(str) {
  const consonants = "bcdfghjklmnpqrstvwxyz";

  return str
    .toLowerCase()
    .split("")
    .filter((e) => consonants.includes(e)).length;
}
