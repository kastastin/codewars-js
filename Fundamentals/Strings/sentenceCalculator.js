// <-- Sentence Calculator -->

/*
  Calculate the total score (sum of the individual character scores) of a sentence given the following score rules for each allowed group of characters:

  Lower case [a-z]: 'a'=1, 'b'=2, 'c'=3, ..., 'z'=26
  Upper case [A-Z]: 'A'=2, 'B'=4, 'C'=6, ..., 'Z'=52
  Digits [0-9] their numeric value: '0'=0, '1'=1, '2'=2, ..., '9'=9
  Other characters: 0 value
  Note: input will always be a string
*/

// <-- My Solution -->
const lettersToNumbers = (str) => {
  const obj = {};

  for (let i = 48, k = 0; i <= 57; i++, k++) {
    obj[String.fromCharCode(i)] = k;
  }

  for (let i = 65, k = 2; i <= 90; i++, k += 2) {
    obj[String.fromCharCode(i)] = k;
  }

  for (let i = 97, k = 1; i <= 122; i++, k++) {
    obj[String.fromCharCode(i)] = k;
  }

  return [...str].reduce((a, b) => (obj[b] ? (a += obj[b]) : a), 0);
};

// <-- Best Solution -->
const lettersToNumbersBest = (function () {
  const values = {};

  "abcdefghijklmnopqrstuvwxyz".split("").forEach((c, i) => (values[c] = i + 1));
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    .split("")
    .forEach((c, i) => (values[c] = i * 2 + 2));

  "0123456789".split("").forEach((c, i) => (values[c] = i));

  return (str) => str.split("").reduce((a, b) => a + (values[b] || 0), 0);
})();
