// <-- String subpattern recognition -->

/*
  This time there are two small changes:

  if a subpattern has been used, it will be present at least twice, meaning the subpattern has to be shorter than the original string;
  the strings you will be given might or might not be created repeating a given subpattern, then shuffling the result.

  For example:
  "a"    --> false //no repeated shorter sub-pattern, just one character
  "aaaa" --> true  //just one character repeated
  "abcd" --> false //no repetitions
  "babababababababa" --> true //repeated "ba"
  "bbabbaaabbaaaabb" --> true //same as above, just shuffled

  Strings will never be empty and can be composed of any character (just consider upper- and lowercase letters as different entities) and can be pretty long (keep an eye on performances!).
*/

// <-- Solution -->
function hasSubpattern(s) {
  const map = {};

  for (const char of s) {
    map[char] = (map[char] || 0) + 1;
  }

  const values = Object.values(map);
  const g = (a, b) => (b ? g(b, a % b) : a);

  return values.reduce(g) > 1;
}
