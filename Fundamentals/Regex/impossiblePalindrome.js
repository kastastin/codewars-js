// <-- Impossible Palindrome Regex -->

/*
  Define a constant palindromeMatcher, which will match palindromes of any (nonzero) length when tested with the following String.prototype methods.

  What's a Palindrome?
  For this kata we define a palindrome as a single 'word' of length >= 1, which remains the same when reversed (case-insensitive). A 'word' is a sequence of letters (a-z, A-Z) which is not preceeded or succeeded by another letter. Other symbols (eg. !?.) are not a part of a word.

  "Hah!" -> "Hah" is a palindrome
  "my lil sister" -> "lil" is a palindrome, but "sis" is not (as it is part of "sister")
  "Mmmmm, I think not" -> "Mmmmm" and "I" are palindromes.

  Examples:
  match
  const str1 = "Hi! Wow its already noon";
  console.log(str1.match(palindromeMatcher)); // ["Wow", "noon"]

  matchAll
  const str2 = "Naan is great. Mmmmmmmm";
  console.log(Array.from(str2.matchAll(palindromeMatcher))); // ["Naan", index: 0, input: "Naan is great. Mmmmmmmm", groups: undefined], ["Mmmmmmmm", index: 15, input: "Naan is great. Mmmmmmmm", groups: undefined]]

  replace
  const str3 = "i like pop music lol";
  console.log(str3.replace(palindromeMatcher, "$&!?")); // "i!? like pop!? music lol!?"

  search
  const str4 = "hey dad catch";
  console.log(str4.search(palindromeMatcher)); // 4

  split
  const str5 = "my sis and i made cake";
  console.log(str5.split(palindromeMatcher)); // ["my ", " and ", " made cake"];

  Notes:
  Matches should be global.
  Do not try to modify the aforementioned methods (String and RegExp have been frozen)
  Matches should not contain any capture groups.
  Some words might be rather large.
*/

// <-- Solution -->
function buildRegex(str) {
  const words = str.split(/[^a-z]/i).filter((x) => x);
  const palindromes = words.filter((v) => v.toLowerCase() === v.toLowerCase().split("").reverse().join(""));

  if (palindromes.length == 0) {
    return /[]/g; // Will never match
  }

  return new RegExp("(?<![a-z])(?:" + palindromes.join("|") + ")(?![a-z])", "gi");
}

const palindromeMatcher = {
  flags: "g",
  [Symbol.match](str, ...args) {
    return str.match(buildRegex(str), ...args);
  },
  [Symbol.matchAll](str, ...args) {
    return str.matchAll(buildRegex(str), ...args);
  },
  [Symbol.replace](str, ...args) {
    return str.replace(buildRegex(str), ...args);
  },
  [Symbol.search](str, ...args) {
    return str.search(buildRegex(str), ...args);
  },
  [Symbol.split](str, ...args) {
    return str.split(buildRegex(str), ...args);
  },
};
