// <-- String subpattern recognition -->

/*
  Since there is no deterministic way to tell which pattern was really the original one among all the possible permutations of a fitting subpattern, return a subpattern with sorted characters, otherwise return the base string with sorted characters (you might consider this case as an edge case, with the subpattern being repeated only once and thus equalling the original input string).

  For example:
  "a" ==> "a"; // no repeated pattern, just one character
  "aaaa" ==> "a"; // just one character repeated
  "abcd" ==> "abcd"; // base pattern equals the string itself, no repetitions
  "babababababababa" ==> "ab"; // remember to return the base string sorted
  "bbabbaaabbaaaabb" ==> "ab"; // same as above, just shuffled
*/

// <-- My Solution -->
function hasSubpattern(str) {
  const chars =
    [...str]
      .sort()
      .join("")
      .match(/(.)\1*/g) || [];
  const sizes = chars.map((str) => str.length);

  let divisor = 1;

  for (let k = 2; k <= Math.min(...sizes); k++) {
    if (sizes.every((size) => size % k == 0)) {
      divisor = k;
    }
  }

  return chars.map((c) => c[0].repeat(c.length / divisor)).join("");
}

// <-- Best Solution -->
function hasSubpatternBest(s) {
  const hash = [...s].reduce((d, c) => ((d[c] = d[c] + 1 || 1), d), {});
  const k = Object.values(hash).reduce((g = (a, b) => (!b ? a : g(b, a % b))));

  return Object.entries(hash)
    .reduce((li, i) => li.concat(i[0].repeat(i[1] / k)), [])
    .sort()
    .join("");
}
