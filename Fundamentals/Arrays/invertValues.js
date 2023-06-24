// <-- Invert Values -->

/*
  Given a set of numbers, return the additive inverse of each.
  Each positive becomes negatives, and the negatives become positives.
*/

// <-- My Solution -->
function invert(array) {
  return array.map((elem) => elem * -1);
}

// <-- Best Solution -->
function invertBest(array) {
  return array.map((el) => -el);
}
