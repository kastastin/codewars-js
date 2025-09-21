// <-- Playing with passphrases -->

/*
  Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

  choose a text in capital letters including or not digits and non alphabetic characters,

  shift each letter by a given number but the transformed letter must be a letter (circular shift),
  replace each digit by its complement to 9,
  keep such as non alphabetic and non digit characters,
  downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
  reverse the whole result.
  Example:
  your text: "BORN IN 2015!", shift 1

  1 + 2 + 3 -> "CPSO JO 7984!"

  4 "CpSo jO 7984!"

  5 "!4897 Oj oSpC"
*/

// <-- My Solution -->
function playPass(s, n) {
  const str = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";

  return s
    .toLowerCase()
    .replace(/[a-z0-9]/g, (a, i) => {
      if (!isNaN(+a)) return 9 - a;

      a = str[str.indexOf(a) + (n % 26)];

      if (i % 2 === 0) {
        a = a.toUpperCase();
      }

      return a;
    })
    .split("")
    .reverse()
    .join("");
}

// <-- Best Solution -->
function playPassBest(s, n) {
  return s
    .replace(/[A-Z]/g, (l) => String.fromCharCode(((l.charCodeAt(0) + n - 65) % 26) + 65))
    .replace(/\d/g, (d) => 9 - d)
    .split("")
    .map((l, i) => (i % 2 == 0 ? l.toUpperCase() : l.toLowerCase()))
    .reverse()
    .join("");
}
