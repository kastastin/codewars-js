// <-- Find Maximum and Minimum Values of a List -->

/*
  Your task is to make two functions that receive a list of integers as input,
  and return the largest and lowest number in that list, respectively.
*/

// <-- My Solution -->
const min = function (list) {
  list.sort((a, b) => a - b);
  return list[0];
};

const max = function (list) {
  list.sort((a, b) => (a > b ? -1 : 1));
  return list[0];
};

// <-- Best Solution -->
const minBest = function (list) {
  return Math.min(...list);
};

const maxBest = function (list) {
  return Math.max(...list);
};
