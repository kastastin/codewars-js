// <-- First non-repeating character -->

/*
  Write a function that takes a string input, and returns the first character that is not repeated anywhere in the string.

  For example, if given the input "stress", the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

  As an added challenge, upper- and lowercase characters are considered the same character, but the function should return the correct case for the initial character. For example, the input "sTreSS" should return "T".

  If a string contains only repeating characters, return an empty string ("");

  Note: despite its name in some languages, your function should handle any Unicode codepoint:

  "@#@@*"    --> "#"
  "かか何"   --> "何"
  "🐐🦊🐐" --> "🦊"
*/

// <-- Solution -->
function firstNonRepeatingLetter(s) {
  const str = s.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return s[i];
    }
  }

  return "";
}
