// <-- Consonant value -->

/*
  Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

  We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

  For example, for the word "zodiac", let's cross out the vowels. We get: "z o d ia c"

  "zodiac" -> 26
  The consonant substrings are: "z", "d" and "c" with values "z" = 26, "d" = 4 and "c" = 3. The highest is 26.

  "strength" -> 57
  The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
*/

// <-- Solution -->
function solve(str) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  let highestValue = 0;
  let currentValue = 0;

  for (const char of str) {
    if (!vowels.has(char)) {
      currentValue += char.charCodeAt(0) - 96;
      highestValue = Math.max(currentValue, highestValue);
    } else {
      currentValue = 0;
    }
  }

  return highestValue;
}
