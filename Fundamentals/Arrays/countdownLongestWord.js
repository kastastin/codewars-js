// <-- Countdown - Longest Word -->

/*
  Countdown is a British game show with number and word puzzles. The letters round consists of the contestant picking 9 shuffled letters - either picking from the vowel pile or the consonant pile. The contestants are given 30 seconds to try to come up with the longest English word they can think of with the available letters - letters can not be used more than once unless there is another of the same character.

  Task:
  Given an uppercase 9 letter string, letters, find the longest word that can be made with some or all of the letters. The preloaded array words (or $words in Ruby) contains a bunch of uppercase words that you will have to loop through. Only return the longest word; if there is more than one, return the words of the same lengths in alphabetical order. If there are no words that can be made from the letters given, return None/nil/null.

  Examples:
  letters = "ZZZZZZZZZ"
  longest word = None

  letters = "POVMERKIA", 
  longest word = ["VAMPIRE"]

  letters = "DVAVPALEM"
  longest word = ["PALMED", "VALVED", "VAMPED"]
*/

// <-- My Solution -->
const longestWord = (letters) => {
  const res = [];
  let len = 0;

  for (const word of letters) {
    let tmpWord = word;

    for (let l of letters) {
      tmpWord = tmpWord.replace(l, "");
    }

    if (tmpWord.length === 0) {
      res.push(word);
      len = Math.max(word.length, len);
    }
  }

  return res.length ? res.filter((w) => w.length === len) : null;
};

// <-- Best Solution -->
function longestWord(letters) {
  return words
    .reduce(
      (acc, word) => {
        if (!letters.split("").reduce((a, l) => a.replace(l, ""), word)) {
          let l = word.length;
          if (acc[l] == null) acc[l] = [word];
          else acc[l].push(word);
        }
        return acc;
      },
      [null],
    )
    .pop();
}
