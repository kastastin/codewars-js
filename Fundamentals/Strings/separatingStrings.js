// <-- Separating Strings -->

/*
  Create a function that takes a string and separates it into a sequence of letters.

  The array will be formatted as so:

  [['J','L','L','M']
  ,['u','i','i','a']
  ,['s','v','f','n']
  ,['t','e','e','']]
  The function should separate each word into individual letters, with the first word in the sentence having its letters in the 0th index of each 2nd dimension array, and so on.

  Shorter words will have an empty string in the place once the word has already been mapped out. (See the last element in the last part of the array.)

  Examples:

  sepStr("Just Live Life Man")
  [['J','L','L','M'],
  ['u','i','i','a'],
  ['s','v','f','n'],
  ['t','e','e','']]);
*/

// <-- My Solution -->
function sepStr(arr) {
  const wordsArrs = arr.split(" ").map((x) => x.split(""));
  const maxLength = Math.max(...wordsArrs.map((x) => x.length));

  const res = [];

  for (let i = 0; i < maxLength; i++) {
    res.push([]);

    for (let j = 0; j < wordsArrs.length; j++) {
      res[i].push(wordsArrs[j][i] ? wordsArrs[j][i] : "");
    }
  }

  return res;
}

// <-- Best Solution -->
function sepStrBest(arr) {
  const words = arr.split(" ");

  return new Array(Math.max(...words.map((e) => e.length))).fill(0).map((_, i) => words.map((e) => e[i] || ""));
}
