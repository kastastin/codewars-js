// <-- Shortest Word -->

/*
  Simple, given a string of words, return the length of the shortest word(s).

  String will never be empty and you do not need to account for different data types.
*/

// <-- My Solution -->
function filterList(l) {
  return l.filter((el) => el >= 0 && typeof el != "string");
}

// <-- Best Solution -->
function filterListBest(l) {
  return l.filter(Number.isInteger);
}
