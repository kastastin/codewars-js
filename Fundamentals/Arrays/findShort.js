// <-- Shortest Word -->

/*
  Simple, given a string of words, return the length of the shortest word(s).

  String will never be empty and you do not need to account for different data types.
*/

// <-- My Solution -->
function findShort(s) {
  return s
    .split(" ")
    .map((el) => el.length)
    .sort((a, b) => a - b)
    .at(0);
}

// <-- Best Solution -->
function findShortBest(s) {
  return Math.min(...s.split(" ").map((el) => el.length));
}
