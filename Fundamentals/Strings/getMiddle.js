// <-- Get the Middle Character -->

/*
  You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

  Examples:
  Kata.getMiddle("test") should return "es"
  Kata.getMiddle("testing") should return "t"
  Kata.getMiddle("middle") should return "dd"
  Kata.getMiddle("A") should return "A"
*/

// <-- My Solution -->
function getMiddle(s) {
  const middleCharacter = Math.floor(s.length / 2) - 1;
  const isStringLengthOdd = s.length % 2 === 0;

  return isStringLengthOdd
    ? s.slice(middleCharacter, middleCharacter + 2)
    : [...s].at(s.length / 2);
}

// <-- Best Solution -->
function getMiddleBest(s) {
  return s.slice(s.length / 2, s.length / 2 + 1);
}
